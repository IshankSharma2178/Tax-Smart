import { apiConnector } from "../apiconnector";
import { studentEndpoints } from "../apis";
import toast from "react-hot-toast";
import { setPaymentLoading } from "../../slices/authSlice"; // Updated for payment-specific slice
import { setUser } from "../../slices/authSlice";

const { PAYMENT_API, VERIFY_PAYMENT_API, SEND_PAYMENT_SUCCESS_EMAIL_API } = studentEndpoints;

// Function to load Razorpay script dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// Function to handle the payment process
export const makePayment = async (token, totalAmount, userDetails, navigate, dispatch) => {
  const toastId = toast.loading("Loading...");

  try {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    // Initiating payment order creation
    console.log("Razorpay SDK");
    const orderResponse = await apiConnector(
        "POST",
        PAYMENT_API,
        { totalAmount },

    );

    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message);
    }

    // Razorpay payment options
    const options = {
      key: process.env.RAZORPAY_KEY,
      currency: orderResponse.data.message.currency,
      amount: `${orderResponse.data.message.amount}`,
      order_id: orderResponse.data.message.id,
      name: "Payment Gateway",
      description: "Thank you for your payment",
      prefill: {
        name: `${userDetails.firstName}`,
        email: userDetails.email,
      },
      handler: (response) => {
        sendPaymentSuccessEmail(response, orderResponse.data.message.amount, token);
        verifyPayment(response, token, navigate, dispatch);
      },
    };

    // Open Razorpay payment modal
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", (response) => {
      toast.error("Oops, payment failed");
    });

    // Update user payment data (if needed)
    const userData = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch(setUser(userData));
  } catch (error) {
    console.log("PAYMENT API ERROR.....", error);
    toast.error("Could not make Payment");
  }

  toast.dismiss(toastId);
};

// Function to send a payment success email
async function sendPaymentSuccessEmail(response, amount, token) {
  try {
    await apiConnector(
      "POST",
      SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  } catch (error) {
    console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
    toast.error("Payment success mail failed");
  }
}

// Function to verify the payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment...");
  dispatch(setPaymentLoading(true));

  try {
    const response = await apiConnector(
      "POST",
      VERIFY_PAYMENT_API,
      bodyData,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Payment successful!");
    navigate("/dashboard");
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR....", error);
    toast.error("Could not verify Payment");
  }
  
  toast.dismiss(toastId);
  dispatch(setPaymentLoading(false));
}

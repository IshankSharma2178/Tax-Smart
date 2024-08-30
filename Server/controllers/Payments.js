const { instance } = require("../config/razorpay");
const User = require("../models/User");
const crypto = require('crypto');
require("dotenv").config();

exports.capturePayment = async (req, res) => {
  const { totalAmount } = req.body;
  const currency = "INR";
  console.log(totalAmount )

  const options = {
    amount: totalAmount * 100, 
    currency,
    receipt: Math.random(Date.now()).toString() 
  };

  try {
    const paymentResponse = await instance.orders.create(options);
    res.json({
      success: true,
      message: paymentResponse
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Could not Initiate Order" });
  }
};

exports.verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, message: "Payment Failed" });
  }

  let body = razorpay_order_id + "|" + razorpay_payment_id;
  
  const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET)
                                  .update(body.toString())
                                  .digest("hex");

  if (expectedSignature === razorpay_signature) {
    return res.status(200).json({ success: true, message: "Payment Verified" });
  }

  return res.status(400).json({ success: false, message: "Payment Verification Failed" });
};

exports.sendPaymentSuccessEmail = async (req, res) => {
  const { orderId, paymentId, amount } = req.body;

  if (!orderId || !paymentId || !amount ) {
    return res.status(400).json({ success: false, message: "Please provide all the fields" });
  }

  try {
    console.log(`Payment of ${amount/100} INR received. Order ID: ${orderId}, Payment ID: ${paymentId}`);
    res.status(200).json({ success: true, message: "Payment Success Email Sent" });
  } catch (error) {
    console.log("Error in sending mail", error);
    return res.status(500).json({ success: false, message: "Could not send email" });
  }
};

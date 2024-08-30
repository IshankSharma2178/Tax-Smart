// Import the required modules
const express = require("express")
const router = express.Router()

const { capturePayment, verifyPayment,sendPaymentSuccessEmail} = require("../controllers/Payments")

router.post("/capturePayment",  capturePayment)
router.post("/verifyPayment", verifyPayment)
router.post("/sendPaymentSuccessEmail", sendPaymentSuccessEmail);

module.exports = router
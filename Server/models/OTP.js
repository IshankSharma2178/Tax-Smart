const mongoose = require("mongoose");
const mailSender=require("../utils/MailSender");

const OTPSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    }
})


async function sendVerificationEmail(email,otp){
    try{
        const mailResponder= await mailSender(email,"Verification Email from StudyNotion",otp);
        console.log("Email sent successfully",mailResponder);
    }
    catch(err){
        console.log("error occured while handling emails : ",err);
        throw err;
    }
}

OTPSchema.pre("save",async function(next){
    await sendVerificationEmail(this.email,this.otp);     
    next();
}  
)

module.exports = mongoose.model("OTP",OTPSchema);
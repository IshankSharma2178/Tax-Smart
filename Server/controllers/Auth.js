const OTP=require("../models/OTP")
const User=require("../models/User");
const otpGenerator = require("otp-generator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const Profile = require('../models/Profile');
const Module1 = require('../models/Module1');
const Module2 = require('../models/Module2');
const Module3 = require('../models/Module3');
const Module4 = require('../models/Module4');
const Module5 = require('../models/Module5');
const Modules = require('../models/Modules');


//send otp
exports.sendOTP = async (req,res) => {
    try {
        const {email} = req.body;
        console.log("Email in senOtp controller",email)
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(401).json({
                success:false,
                message: "Email already exists"
            })
        }

        let otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        

        let result = await OTP.findOne({otp:otp});

        while (result) {
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = OTP.findOne({otp:otp});
        }
        console.log("OTP generated", otp);

        const createdOtp = await OTP.create({
            email,
            otp
        })

        console.log("Created OTP", createdOtp);
        return res.status(200).json({
            success:true,
            message: "OTP created!",
            createdOtp
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//sign up

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, otp } = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (password !== confirmPassword) {
            return res.status(403).json({
                success: false,
                message: "Password and confirm password are not the same",
            });
        }

        const checkUserPresent = await User.findOne({ email: email });
        if (checkUserPresent) {
            return res.status(400).json({
                success: false,
                message: "User is already registered",
            });
        }

        const recentOtp = await OTP.findOne({ email }).sort({ createdAt: -1 }).limit(1);
        if (!recentOtp) {
            return res.status(400).json({
                success: false,
                message: "OTP not found",
            });
        } else if (otp !== recentOtp.otp) {
            return res.status(400).json({
                success: false,
                message: "OTP does not match",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
        });

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        const module1 = await Module1.create({ email: email });
        const module2 = await Module2.create({ email: email });
        const module3 = await Module3.create({ email: email });
        const module4 = await Module4.create({ email: email });
        const module5 = await Module5.create({ email: email });
        const modules = await Modules.create({ email: email });

        const modulesDetails = await Modules.create({
            module1: module1._id,
            module2: module2._id,
            module3: module3._id,
            module4: module4._id,
            module5: module5._id,
        });

        user.modulesDetails = modulesDetails._id;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "User is registered successfully",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};


//Login in
exports.login=async(req,res)=>{
    try{
        //get data from req body
        const {email,password}=req.body;
        //validation data
        if(!email || !password){
            return res.status(403).json({
                success: false,
                message: "please enter your email address and password"
            })
        }
        //user check if exists or not
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(403).json({
                success: false,
                message: "email address is incorrect"
            })
        }

        // generate jwttoken ,after matching password
        if(await bcrypt.compare(password, user.password)){
            const payload={
                email: email,
                id: user._id
            }
            const token=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"1000h",
            })
            user.toObject();
            user.token=token;
            user.password=undefined;
        
        //create cookie and send respond
            const options={
                expires:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }
        res.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user,
            message:"logged in successfully"
        })
    }
    else{
        return res.status(401).json({
            success:false,
            message:"password is incorrect"
        })
    }
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"login failure please try again"
        })
    }
}

//change password
exports.changePassword = async(req,res)=>{
    try{
        
    }catch(err){

    }
}
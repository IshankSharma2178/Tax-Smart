const User=require("../models/User");
const jwt=require("jsonwebtoken");
require("dotenv").config();

//auth
exports.auth=async(req,res)=>{
    try{
        //extract token
        console.log("before get token",req.get("Authorization")?.replace("Bearer ", ""))
        const token = req.body.token || req.cookies.token || req.get("Authorization")?.replace("Bearer ", "").replace(/^"|"$/g, '');
            console.log( token)
        if(!token){ 
            return res.status(401).json({ 
                success: false,
                message: "token is missing" 
            })
        } 
                //verify the token 
        const Secret=process.env.JWT_SECRET;
        try{
            const payload = jwt.verify(token,Secret);
            console.log("decode data is : ",payload);
            req.user = payload;
        } 
        catch(e){
            console.log("next");
            return res.status(401).json({
                success: false,
                message: "token is invalid "
            })
        }
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


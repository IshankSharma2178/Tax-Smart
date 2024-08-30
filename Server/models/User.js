const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
    },
    image:{
        type:String,
        required:true,
    },
    token:{
        type:String
    },
    resetPasswordExpires:{
        type:Date,
    },
    coins:{
        type:Number,
        default:0,
    },
    modulesDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Modules",
    }

   

})

module.exports=mongoose.model("User",UserSchema);
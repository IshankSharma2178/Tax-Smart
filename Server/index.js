const express=require('express');
const app= express();
const userRoutes=require("./routes/User")
const paymentRoutes=require("./routes/Payment");
const moduleRoutes=require("./routes/Module");
const database =require("./config/database").connect();
require("dotenv").config();
const cors= require("cors");

const cookieParser=require("cookie-parser")
require("dotenv");
const PORT =process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1",moduleRoutes)
app.use("/api/v1",paymentRoutes);

app.get("/",(req,res)=>{
    return res.json({
        message:"your server is running "
    })
})

app.listen(PORT,()=>{
    console.log(`app is ruuning on port ${PORT}...`);
})


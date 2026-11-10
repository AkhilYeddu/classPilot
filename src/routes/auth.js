const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")
const{validateSignUpData, validateLoginData} = require("../utils/validation")

authRouter.post("/signup",async(req,res)=>{

    validateSignUpData(req.body)
    console.log("valid fields")

    console.log("Signup route reached!");
    const user = new User({
        firstName : "Akhil",
        lastName : "Yeddu",
        email : "akhil@gmail.com",
        password : "akki123",
        role : "student"

    })

    const savedUser = await user.save()

    res.send("user added successfully!")
})

authRouter.post("/login", async(req,res)=>{

    try{
        const{email, password} = req.body
    const user = await User.findOne({email : email});

    if(!user){
        throw new Error("Email ID not found in the Database.");
    }


    }catch(err){
            res.status(400).send(err.message?.data);
    }
    
})

module.exports = {
    authRouter
}
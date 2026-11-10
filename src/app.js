const connectDB = require("./config/database")
const express = require("express")

const app = express()
app.use(express.json());

const {authRouter} = require("./routes/auth")
app.use("/", authRouter)

connectDB().then(()=>{
    console.log("conneted to the database!");

    app.listen(7777, ()=>{
        console.log("Server running successfully on port 7777...");
    })
    
})
.catch((err)=>{
    console.log("some error occured!", err)
})
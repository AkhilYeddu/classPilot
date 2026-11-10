const mongoose = require("mongoose")

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://AkhilYeddu:g5IKWRvqhNTtTCSm@namastenode.qy44lqw.mongodb.net/classPilot")
}

module.exports = connectDB


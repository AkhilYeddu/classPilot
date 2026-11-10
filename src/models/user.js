const mongoose = require("mongoose");

const JWT = require("jsonwebtoken")

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true,
            minlength: 6
        },

        role: {
            type: String,
            enum: ["student", "professor"],
            required: true
        }
    },
    {
        timestamps: true
    }
);
userSchema.methods.getJWT = async()=>{
    const user = this
    const token = await JWT.sign({_id : this._id}, "classPilot@05",{
        expiresIn : "1d"
    })
    return token;

}
module.exports = mongoose.model("User", userSchema);
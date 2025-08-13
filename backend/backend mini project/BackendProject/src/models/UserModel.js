import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        required: [true, "userName required"],
        unique:true
    },
    email: {
        type:String,
        required: [true, "email required"],
        unique:true
    },
    password: {
        type:String,
        required: [true, "password required"],
        unique:true
    },
    refreshToken:{
        type:String,
    }


})



userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()
})

// method to match password body password and breapt password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

// cookie and secrate token

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            userName:this.userName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }

    )

}




const User = mongoose.model("User",userSchema)

export default User



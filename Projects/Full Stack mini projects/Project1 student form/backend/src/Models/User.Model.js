import mongoose from "mongoose";


// An implementation of JSON Web Tokens.
// This was developed against draft-ietf-oauth-json-web-token-08. It makes use of node-jws
import jwt from "jsonwebtoken"


// A library to help you hash passwords.
// You can read about bcrypt in Wikipedia as well as in the following article: How To Safely Store A Password
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    fullname:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required: [true ,"password is requird"]
    },
    refreshToken:{
        type:String,
    }
    

},{timestamps:true})

middelwere
userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next();
})

// methods
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

// method 
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
        
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

// methods token expri
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
    
}



export const User = mongoose.model("User" ,userSchema)
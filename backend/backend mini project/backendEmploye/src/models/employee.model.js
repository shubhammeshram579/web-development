import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const employeeSchema = new mongoose.Schema(
    {
        employeeName: {
            type:String,
            required:true,
            trim:true,
        },
        email: {
            type:String,
            required:true
        },
        password: {
            type:String,
            required:[true, "password is required"]
        },
        occupation: {
            type:String,
        },
        refreshToken:{
            type: String,
        }

},{timestamps:true}
)



// midleware
employeeSchema.pre("save", async function() { 
  // If the password didn't change, stop here
  if (!this.isModified("password")) return; 

  // Scramble the password securely before saving
  this.password = await bcrypt.hash(this.password, 10); 
});

// methods
employeeSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}


// methods secret token
employeeSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            employeeName:this.employeeName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )

}



// generateRefreshToken for cookieys
employeeSchema.methods.generateRefreshToken = function(){
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



export const Employees = mongoose.model("Employees", employeeSchema)



const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    
    {
        username:{
            type:String,
            required:true,
            unique: true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique: true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
            // required:[true , "passward is requred"]
            // min: [6, 'Must be at least 6, got {VALUE}'],max: 12
        },
    },{timestamps:true} //time is help to cereate user and update user

)


export const User = mongoose.model("User",UserSchema);
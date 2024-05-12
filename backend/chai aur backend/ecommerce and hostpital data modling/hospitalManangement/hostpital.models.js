const mongoose = require("mongoose")

const hostpitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specializedIn:[
        {
        type:String,
    }
    ],

},{timestamps:true})

export const Hostpital = mongoose.model("Hostpital" ,hostpitalSchema)
const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    experienceINYear:{
        type:Number,
        default: 0
    },
    workInHostpitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Hostpital"
        }
    ]

},{timestamps:true})

export const Doctor = mongoose.model("Doctor" ,doctorSchema)
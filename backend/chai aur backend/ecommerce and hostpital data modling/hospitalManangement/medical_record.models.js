const mongoose = require("mongoose")

const medicalrecordSchema = new mongoose.Schema({},{timestamps:true})

export const Medical_Record = mongoose.model("Medical_Record" ,medicalrecordSchema)
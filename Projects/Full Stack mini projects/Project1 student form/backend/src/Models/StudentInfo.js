import mongoose from "mongoose"


const StudentSchema = new mongoose.Schema({

    StudentName:{
        type: String,
    },
    Age:{
        type:String,
    },
    gender:{
        type: String
    },
    city:{
        type: String
        
    },
    StdId:{
        type:String,
    },


},{timestamps:true})

export const  StudentInfo =  mongoose.model("StudentInfo", StudentSchema) 
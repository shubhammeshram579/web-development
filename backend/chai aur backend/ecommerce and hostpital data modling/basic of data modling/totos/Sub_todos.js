const mongoose = require("mongoose")

const SubTodoSchema = mongoose.Schema(
    {
        content:{
            type:String,
            required:true
        },
        complete:{
            type:Boolean,
            default:false
        },
        createdby:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",

        }

},{timestamps:true})


export const SubTodo = mongoose.model("SubTodo",SubTodoSchema)
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    productimage:{
        type:String
    },
    price:{
        type:Number,
        default: 0
    },
    stock:{
        type:Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},{timestamps:true})

export const Products = mongoose.model("Products",productSchema)
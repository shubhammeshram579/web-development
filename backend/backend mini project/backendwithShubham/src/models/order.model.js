import mongoose from "mongoose";


const orederSchama = new mongoose.Schema(
    {
        productId:{
            type:mongoose.Schema.ObjectId,
            ref:"Product"
        }

    },{timestamps:true}
)

export const Order = mongoose.model("Order" , orederSchama)
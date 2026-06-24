import mongoose  from "mongoose";


const productSchema = new mongoose.Schema(
    {
        productname:{
            type:String,
            required:[true, "product name is required"]
        },
        price:{
            type:String,
        },
        brands:{
            type:String
        }
    },
    { timestamps:true}
)



export const Product = mongoose.model("Product",productSchema);
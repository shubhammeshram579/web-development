import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asynceHendler.js"
import {Order} from "../models/order.model.js"




const creatOrder = async (req, res) => {
    try {
        const {productId} = req.body;

        if(!productId){
            throw new ApiError(401, "product is not found")
        }


        const exstedOrder = await Order.findById(productId)

        if(exstedOrder){
            throw new ApiError(401, "product is available")
        }


        const creOrder = await Order.create({
            productId:productId
        })

        if(!creOrder){
            throw new ApiError(401, "product not created")
        }


        return res.status(201).json(
            new ApiResponse(200, {creOrder}, "order created succefully")
        )

        
    } catch (error) {
        throw new ApiError(500,"something went wroge",error )
    }

}


const getOrderList = async (req,res) => {
    try {
        const orderlist = await Order.find({}).populate("productId")

        return res.status(201).json(
            new ApiResponse(200, {orderlist} , "succes")
        )
        
    } catch (error) {
        throw new ApiError(500,"something went wrong",error )
        
    }
}


export {
    creatOrder,
    getOrderList

}
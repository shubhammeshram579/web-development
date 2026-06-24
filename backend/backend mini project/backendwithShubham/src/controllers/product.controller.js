import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asynceHendler.js"
import {Product} from "../models/products.model.js"


const createProduct = async (req,res) => {
    try {

        const {productname,price,brands} = req.body;

        // console.log(req.body)

        if(!productname || !price || !brands){
            throw new ApiError(401, "all filed is required")
        }

        const allreadycreate = await Product.findOne({productname:productname});

        if(allreadycreate){
               throw new ApiError(401, "product allready exited")
        }
        
        const createP = await Product.create({
            productname,
            price,
            brands
        })

        if(!createP){
            throw new ApiError(401, "something problem product not created")
        }


        return res.status(201).json(
            new ApiResponse(200,{createP}, "succes")
        )


        
    } catch (error) {
          throw new ApiError(500,"something went wroge",error )
        
    }
}

const getPrdoucts = async (req,res) => {
    try {

        const prouctlist = await Product.find({})

        return res.status(200).json( new ApiResponse(200,{prouctlist}, "succes"))
        
    } catch (error) {
         throw new ApiError(500,"something went wroge",error )
        
    }
} 


const updatePrdoucts = async (req,res) => {
    try {

        const {id} = req.params

        console.log(id)

        const {productname,price,brands} = req.body;

        console.log(req.body)

        if(!productname || !price || !brands){
            throw new ApiError(401, "all filed is required")
        }


        const updateProdut = await Product.findByIdAndUpdate(
            id,
            {$set:{
                productname:productname,
                price:price,
                brands:brands

            }
        },{
            new:true
        }
        )

        return res.status(200).json( new ApiResponse(200,{updateProdut}, "succes"))
        
    } catch (error) {
         throw new ApiError(500,"something went wroge",error )     
    }
} 




const deletePrdoucts = async (req,res) => {
    try {

        const {id}= req.params;
        

        const deleteProduct = await Product.findByIdAndDelete(id);

        return res.status(200).json( new ApiResponse(200,{deleteProduct}, "succes delete"))
        
    } catch (error) {
         throw new ApiError(500,"something went wroge",error )
        
    }
} 




export {createProduct,getPrdoucts,updatePrdoucts,deletePrdoucts}


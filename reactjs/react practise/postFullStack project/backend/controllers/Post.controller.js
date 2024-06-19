import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {AsynceHendler} from "../utils/AsynceHendler.js"
import {Post} from "../models/Post.model.js"
import { User } from "../models/User.model.js"
import {uploadCloudinary} from "../utils/Cloudinary.js"



const publishPost = AsynceHendler(async (req, res) =>{
    try {
        // get body req
        const {title,description,status} = req.body;
        const userId = req.user?._id;
        const postImageLocalpath = req.files?.postImg?.[0].path;

        console.log(req.body)

        if(!postImageLocalpath){
            throw new ApiError(400, "Post file requred")
        }

        const uploadPostOnCloudinary = await uploadCloudinary(postImageLocalpath)


        if(!uploadPostOnCloudinary){
            throw new ApiError(400, "upladed  PostImage error")
        }


        const PostPublish = await Post.create({
            title,
            description,
            postImg: uploadPostOnCloudinary.url,
            status,
            owner: userId,

        })

        if(!PostPublish){
            throw new ApiError(500, "somthing went wrong")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {PostPublish}, "post uploaded successfully")
        )



    } catch (error) {
        throw new ApiError(404, error.message)
        
    }


})


const getAllPost = AsynceHendler(async (req,res) => {
    try {
        const getPosts = await Post.find()

        if(!getPosts){
            throw new ApiError(400, "post not found")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {getPosts} , "All get successfully")
        )
        
    } catch (error) {
        throw new ApiError(404, error.message, "post not found")
        
    }

})




export {
    publishPost,
    getAllPost

}
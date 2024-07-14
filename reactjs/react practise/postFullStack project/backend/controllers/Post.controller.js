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

const getPost = AsynceHendler( async (req, res) => {
    try {

        // const {ownerId} = req.params;
        const userId = req.user?._id;

        if(!userId){
            throw new ApiError(404, "owner id not found")
        }

        
        const getPost = await Post.find({owner: userId})

        console.log(getPost)
        if(!getPost){
            throw new ApiError(404 , "post not found")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200 , {getPost} , "success")
        )

    } catch (error) {
        throw new ApiError(404, error.message , "post not found")
        
    }

})


const getAllPost = AsynceHendler(async (req,res) => {
    try {
        const getPosts = await Post.find()
        console.log(getPosts)

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





const updatePost = AsynceHendler(async (req, res) => {    
        try {
            const {postId} = req.params;
            const {title, description,status} = req.body;
            const localfilpath = req.file?.path;
        
            console.log(localfilpath)
        
            if(!localfilpath){
                throw new ApiError(404, "localfilpath not found")
            }
        
            if(!postId){
                throw new ApiError(404, "post id not found")
            }
        
        
            
            const uploadcloud = await uploadCloudinary(localfilpath);
        
            if(!uploadcloud){
                throw new ApiError(404, "filenot upladted not found")
            }
        
        
            const public_post = await Post.findById(postId)
        
        
        
            const updatePost = await Post.findByIdAndUpdate(
                 postId,
                 {
                    $set: {
                        postImg: uploadcloud.url,
                        title: title,
                        description:description,
                        status:status
                }
            },
            {
                new :true}
            );
    
    
            
            if(!updatePost){
                throw new ApiError(404, "post upladted not found")
            };
            
    
            return res
            .status(200)
            .json(
                new ApiResponse(200,{updatePost}, "succefully updated")
            )
    
        } catch (error) {
            throw new ApiError(500, "file not updated")
            
        }
});




const deletePost = AsynceHendler( async (req, res) => {
   try {
    const {postId} = req.params;
 
 
     const deletePostOnServer = await Post.findByIdAndDelete(postId)
 
     if(!deletePostOnServer){
         throw new ApiError(404, "post not delted")
     }

     return res
     .status(200)
     .json(
        new ApiResponse(200,{deletePostOnServer}, "post deleted succesfully")
     )
   } catch (error) {
    throw new ApiError(500, error.message,"post not delted")
    
   }



});

const getPostById = AsynceHendler( async (req, res) => {
    try {
        const {postId} = req.params;
    
        const getPostbyId = await Post.findById(postId);
    
        if(!getPostbyId){
            throw new ApiError(404, "post not found")
        }
    
        return res
        .status(200)
        .json(
            new ApiResponse(200, {getPostbyId} ,"success" )
        )
    } catch (error) {
        throw new ApiError(404, error.message, "error not found")
        
    }
})





const searchBarByPost = AsynceHendler( async (req,res) => {
    
    try {

        const query = req.query.query;

        if(!query){
        throw new ApiError(400, "query is not working")
    }
        const getPost = await Post.find({
            $or:[
                {title: {$regex: query, $options: "i"}},
                {description: {$regex: query, $options: "i"}}
            ]
        })

        return res
        .status(200)
        .json(
            new ApiResponse(200, {getPost} , "succees")
        )

        
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }

});





export {
    publishPost,
    getAllPost,
    getPost,
    updatePost,
    deletePost,
    getPostById,
    searchBarByPost

}
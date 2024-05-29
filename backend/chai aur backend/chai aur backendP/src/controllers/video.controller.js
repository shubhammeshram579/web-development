import mongoose, {isValidObjectId} from "mongoose"
import {Video} from "../models/video.models.js"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/apiErrors.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asynceHendler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"

// https://github.com/silentkiller6092/chai-backend/blob/featured-branch/src/controllers/video.controller.js


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 3, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination
    const sortOption = {};

    if(sortBy){
        sortOption[sortBy] = sortType == "desc" ? -1 : 1;
    }

    let basequery = {};

    if(query){
        basequery.$or = [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
        ]
    }

    try {


        const result = await Video.aggregate([
            {
                $match: {
                    ...basequery,
                    owner: new mongoose.Types.ObjectId(userId)
                },

            },
            {
                $sort: sortOption,
            },
            {
                $skip: (parseInt(page) -1 ) * parseInt(limit),
            },
            {
                $limit: parseInt(limit),
            }
            

        ])

        return res
        .status(200)
        .json(
            new ApiResponse(200, {result}, "Success")
        )

    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

})

const publishAVideo = asyncHandler(async (req, res) => {
    
    // TODO: get video, upload to cloudinary, create video

    try {
        const { title, description} = req.body;
        const userid = req.user?._id;
        const videoFileLocalPath = req.files?.videoFile?.[0]?.path;
        const thumbnaiFileLocalPath = req.files?.thumbnail?.[0]?.path;


        console.log(req.body)

        if(!videoFileLocalPath){
            throw new ApiError(400, "vido file required");
        }

        if(!thumbnaiFileLocalPath){
            throw new ApiError(400, "thumbnai file is required");
        }


        const uploadVideoOnCloudinary = await uploadOnCloudinary(videoFileLocalPath);

        const uploadThumbnailCloudinary = await uploadOnCloudinary(thumbnaiFileLocalPath);


        if(!(uploadVideoOnCloudinary || uploadThumbnailCloudinary )){
            throw new ApiError(400, "upload video error")
        };



        const videoPublish = await Video.create({
            videoFile: uploadVideoOnCloudinary.url,
            thumbnail: uploadThumbnailCloudinary.url,
            title,
            description,
            duration: uploadVideoOnCloudinary.duration,
            cloundinaryVideoId: uploadVideoOnCloudinary.public_id,
            cloundinaryThumbnailId: uploadThumbnailCloudinary.public_id,
            owner: userid,
        })

        if(!videoPublish){
            throw new ApiError(500, "Someting went wrong while uploading");
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {videoPublish}, "video publish sucesufully")
        )

        
    } catch (error) {
        throw new ApiError(400, error.message);
        
    }
    
})

const getVideoById = asyncHandler(async (req, res) => {
    try {
        const { videoId } = req.params
        //TODO: get video by id

        const videoUrl = await Video.findById(videoId)

        if(!videoUrl){
            throw new ApiError(404, "video not found")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {videoUrl}, "Successfull file access")
        )
        
    } catch (error) {
        throw new ApiError(400, error.message)
        
    }
   

})

const updateVideo = asyncHandler(async (req, res) => {
    try {
        const { videoId } = req.params
    //TODO: update video details like title, description, thumbnail
        const {title, description} = req.body;
        // const localFilePathThumbnail = req.file.path;


        let localFilePathThumbnail;
        if(req.files && Array.isArray(req.files.thumbnail) && req.files.thumbnail.length > 0){
            localFilePathThumbnail = req.files.thumbnail[0].path
        }


        if (!localFilePathThumbnail){
            throw new ApiError(404, "file not found");
        }



        const uploadCloud = await uploadOnCloudinary(localFilePathThumbnail)
        if(!uploadCloud){
            throw new ApiError(500, "unable to upload to cloud");
        }


        const public_id_video = await Video.findById(videoId);
        const deleteFileServer = await deleteFile(public_id_video.cloundinaryThumbnailId);


        const uploadFileOnServer = await Video.findByIdAndUpdate(
            videoId,
            {
                $set: {
                    thumbnail: uploadCloud.url,
                    cloundinaryThumbnailId: uploadCloud.public_id,
                    title: title,
                    description: description
                }
            },
            {
                new: true
            }
        );


        if(!uploadFileOnServer){
            throw new ApiError(500, "Unable to upload video on server");
        }


        return res
        .status(200)
        .json(
            new ApiResponse(200, {uploadFileOnServer}, "succesfully upload on server")
        )

        
    } catch (error) {
        throw new ApiError(500, "error uploding file:" + error.message)
        
    }
    

})

const deleteVideo = asyncHandler(async (req, res) => {
    try {
        const { videoId } = req.params
        //TODO: delete video
        const public_id_video = await Video.findById(
            new mongoose.Types.ObjectId(videoId)
        );


        if(!public_id_video){
            throw new ApiError(404, "Video not found");

        }


        const clouninaryVideoId = public_id_video.get("cloundinaryVideoId");

        const deleteFileServer = await deleteFile(clouninaryVideoId);

        if(!deleteFileServer.result || deleteFileServer.result !== "ok"){
            throw new ApiError(500, "unable to delete fine on Cloudinary")
        }


        const uploadFileOnSever = await Video.findByIdAndDelete(videoId);


        if(!uploadFileOnSever){
            throw new ApiError(500, "unable to delete video on server")
        }

        return  res
        .status(200)
        .json(
            new ApiResponse(200, {uploadFileOnSever}, "success")
        )


    } catch (error) {
        throw new ApiError(500, "unable to delete video on server")
        
    }
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    try {
        const { videoId } = req.params;
        const video = await Video.findById(videoId);

        if(!video){
            return res
            .status(404)
            .json(
                new ApiResponse(404,null, "video not found")
            );
        }



        const newPublishStatus = !video.isPublished;

        const toggle = await Video.findOneAndUpdate(
            {
                _id: videoId,
            },
            {
                $set: {isPublished: newPublishStatus}
            },
            {
                new: true
            }
        );


        return res
        .status(200)
        .json(
            new ApiResponse(200, {toggle}, "updated")
        )


    } catch (error) {
        throw new ApiError(500, error.massege || "unable to upload video")        
    }
})



export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}
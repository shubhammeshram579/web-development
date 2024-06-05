import mongoose, {isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/apiErrors.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asynceHendler.js"


const createPlaylist = asyncHandler(async (req, res) => {
    const {name, description} = req.body
    //TODO: create playlist
    const {videoId} = req.params;
    const userId = req.user._id;
    try {
       
        if(!name){
            throw new ApiError(400, "name is missing")
        }

        const createPlaylist = await Playlist.create({
            name,
            description,
            videos: videoId,
            owner: userId,
        })

        if(!createPlaylist){
            throw new ApiError(400 , "somthing went wrong")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {createPlaylist}, "playlish created succefuly")
        )

    } catch (error) {
        throw new ApiError(404, error.message)
        
    }
})

const getUserPlaylists = asyncHandler(async (req, res) => {
    try {
        const {userId} = req.params
        //TODO: get user playlists

        if(!userId){
            throw new ApiError(404, "userId is missing")
        }

        const getAllplaylistbyuser = await Playlist.find({
            owner: new mongoose.Types.ObjectId(userId)
        })
        
        if(!getAllplaylistbyuser){
            throw new ApiError(404, "user playlist not found")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {getAllplaylistbyuser} , "succesfully")
        )
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }

})

const getPlaylistById = asyncHandler(async (req, res) => {
    try {
        const {playlistId} = req.params
        //TODO: get playlist by id
        if(!playlistId){
            throw new ApiError(404 , "playlist id is missing")
        }

        const getplaylist = await Playlist.find(
            {
                _id: new mongoose.Types.ObjectId(playlistId)
            }
        )

        if(!getplaylist){
            throw new ApiError(404 , "playlist is missing")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {getplaylist}, "sucees")
        )
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }
})

// something issue facing load page
const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    try {

        const addvideolist = await Playlist.updateOne(
            {_id: new mongoose.Types.ObjectId(playlistId)},
            {
                $push: {videoId: videoId}
            }
        )

        if(!addvideolist){
            throw new ApiError(404 , "not found")
        }
        
        return res
        .status(200)
        .json(
            new ApiResponse(200, {addvideolist} , "succesfuly add new video")
        )
    } catch (error) {
        throw new ApiError(404 , error.message)
        
    }
})

// something issue facing load page
const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    // TODO: remove video from playlist
    try {

        const deletevideoFromPlaylistReqvest = await Playlist.updateOne(
            {_id: new mongoose.Types.ObjectId(playlistId)},

            {$pull: {videos: new mongoose.Types.ObjectId(videoId)} }
        )

        if(!deletevideoFromPlaylistReqvest){
            throw new ApiError(404, "not deleted video file")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {deletevideoFromPlaylistReqvest} , "successfully deleted")
        )
        
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }

})


const updatePlaylist = asyncHandler(async (req, res) => {
    try {
        const {playlistId} = req.params
        const {name, description} = req.body
        //TODO: update playlist

        if(!playlistId){
            throw new ApiError(404, "playlist id is missing")
        }

        const updatePlaylist = await Playlist.findByIdAndUpdate(
            playlistId,
            {
                $set:{
                    name: name,
                    description: description,

                }
                
            },
            {
                new: true
            }
        )


        if(!updatePlaylist){
            throw new ApiError(404, "playlist is missing")
        }


        return res
        .status(200)
        .json(
            new ApiResponse(200, {updatePlaylist} , "playlist updated successfully")
        )



    } catch (error) {
        throw new ApiError(404, error.message)
        
    }
})

const deletePlaylist = asyncHandler(async (req, res) => {
   
    try {
        const {playlistId} = req.params
        // TODO: delete playlist

        if(!playlistId){
            throw new ApiError(404, "playlist id is missing")
        }

        const deletedplaylist = await Playlist.findByIdAndDelete(playlistId)

        if(!deletedplaylist){
            throw new ApiError(404, "playlist not deleted")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {deletedplaylist} , "playlist deleted successfully")
        )

        
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }
})



export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}
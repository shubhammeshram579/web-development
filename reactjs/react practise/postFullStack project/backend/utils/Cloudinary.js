import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


// connect with cloudinary cloud server
cloudinary.config({
    cloud_name:"dsfepcba9",
    api_key: "111319568374775",
    api_secret:"pySO5Q6eYqkN0tLEuEYomyCniSw"
});


const uploadCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })

        console.log("file uploaded on cloudenery", response.url)
        fs.unlinkSync(localFilePath)
        return response;

        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
        
    }

}

export {uploadCloudinary}
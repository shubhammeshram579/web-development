import {v2 as cloudinary} from "cloudinary"

//fs meas file sytems inbuild node js it is helpn to read file delete file and more unliking unlik
import fs from "fs"


cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});



// file uplder code method
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file has been uplaed sucefull
        // console.log("file is upladed on cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved templory file as the uplad opration got failded
        return null 
        
    }
}

export {uploadOnCloudinary}
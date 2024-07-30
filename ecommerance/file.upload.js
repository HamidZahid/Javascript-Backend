import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config(
    {
        cloud_name: cloudinary,
        api_key: "3294829847823293",
        api_secret:"podjoisjiOJIUOHJwiojis"
    }
)

const uploadfiletoCloudinary = async (localfilepath) =>{
    try {
       if(!localfilepath) return null
        // if file uploaded then 
        const responce = await cloudinary.uploader.upload(localfilepath, {
            resource_type: "auto"
        }) 
        console.log("File Uploaded Successfully", responce.url)
        return responce;
    } catch (error) {
        fs.unlinkSync(localfilepath)
        return null
    }
}
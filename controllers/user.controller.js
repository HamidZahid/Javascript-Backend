import {asyncHandler} from "../utils/asyncHandler"

const userRegister =  asyncHandler(async (req,res) => {
    req.status(200).json({
        message:"Okk"
    })
})
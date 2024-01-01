import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/APIError.js'
import {User} from '../models/userModel.js'
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from '../utils/ApiResponse.js'

const registerUser=asyncHandler(async(req,res)=>{
    //getting user info from frontend 

    const {fullname,username,email,password}=req.body
    console.log('email',email )
    //validation
            // if(fullname===""){
            //     throw new ApiError(400,"fullname required !")
            // }


    if(
        [fullname,email,username,password].some((field)=>field?.trim==='')
    ){
        throw new ApiError(400,"all fields are required")
    }        

    const existedUser=await User.findOne({
        $or:[{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"username / email already exists")
    }

    const avatarLocalpath=req.files?.avatar[0]?.path
    const coverImageLocalPath=req.files?.coverImage[0]?.path
    if(!avatarLocalpath){
        throw new ApiError(400,'Avatar file required')
    }

    const avatar=await uploadOnCloudinary(avatarLocalpath)
    const coverImage=await uploadOnCloudinary(coverImageLocalPath)
    
    if(!avatar){
        throw new ApiError(400,'Avatar file required')
    }

    const user=await User.create({
        fullname,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })
    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(createdUser){
        throw new ApiError(500,"something wrong")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"user reigsted sucessfully")
    )
    
    //check if user already exists(username ,email)
    //check for img (chech avatar)
    //upload to cloudinary
    //create user object -create entry in db
    //remove password and refresh token field 
    //chechk for user creation 
    //return response


    
})



export {registerUser}
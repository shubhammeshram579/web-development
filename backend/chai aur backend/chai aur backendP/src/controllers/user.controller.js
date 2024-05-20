import asyncHandler from "../utils/asynceHendler.js"
import {ApiError} from "../utils/apiErrors.js"
import {User} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponse.js"


const registerUser = asyncHandler( async (req,res) => {

    // testing postman 
    // res.status(200).json({
    //     massage: "shubham meshram"
    // })


    // register user then need i need this type off error Henlders
    // get user deatail from frontent
    // validation - not empty
    // check if user already exiteds: username, email
    // check for image , check for avatar
    // uload them to cloubderi , avrtar
    // create user object - crete entry in db
    // remove password and refress token from response
    // check for user creation
    //return res




    // 1. get user deatail from frontent
    const {fullname,email,username,password} = req.body
    // console.log("email: ",email)


    // begeneire level  error set code
    // if (fullname === ""){
    //     throw new ApiError(400, "fullname is required")
    // }



    // advance level error hendling 
    if(
        [fullname,email,username,password].some((field)=>
        field?.trim() === "")
    ){
        throw new ApiError(400, "all field are required")
    }




// 2. check if user already exiteds: username, email
    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if (existedUser){
        throw new ApiError(409,"User with email or username allready exists")
    }

    // console.log(req.files)


     //3.  check for image , check for avatar
    const avatarLocalPath = req.files?.avatar[0]?.path;
    // console.log(avatarLocalPath)

    // const coverImageLocalPath = req.files?.coverImage[0]?.path;


    // file length undefind then hedling code
    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if (!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }


    // 4. upload them to cloubderi , avrtar
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Aavatar file is required")

    }


    // 5. create user object - create entry in db
    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })


    // do not show database db
    const createUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )


    if (!createUser){
        throw new ApiError(500, "somting went rwong  while register the user")
    }


     // 6. return res
    return res.status(201).json(
        new ApiResponse(200,createUser,"User registered succesfully")
    )


})

export {registerUser}
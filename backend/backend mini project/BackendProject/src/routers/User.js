import express from "express"
import UserModel from "../models/UserModel.js"
import jwt from "jsonwebtoken"

const router = express.Router()


// get mettod 
router.get("/hello", (req,res) => {

    res.send("hello shubham meshram how are you")

})

// post metthod
router.post("/send", (req,res) => {
    res.json({hello:"my name is bhuabhm"})
})


const genrateAccessAndRefreshToken = async(userId) =>{
    try {
        const user = await UserModel.findById(userId)
        const accessToken =   user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
        
    } catch (error) {
        throw new ApiError(500,"Something went wrong while genrating refresh and access token")
        
    }

}

// create user router
router.post("/createUser" ,async (req,res) => {
    try {
        const {userName,email,password} = req.body

        console.log(req.body)

        if(userName === "" && userName === ""){
            throw new console.error("all field is requird");  
        }

        // 2. check if user already exiteds: username, email
        const userExisted = await UserModel.findOne({
            $or: [{userName,email}]
        })

          if(userExisted){
            throw new console.error("user name and email id all ready exits");  
        }



       const user =  await UserModel.create({
            userName:userName,
            email:email,
            password:password
        })


         // do not save in db
         const createUser = await UserModel.findById(user._id).select("-password")

          if(!createUser){
            throw new console.error("sonthing went wrong");  
        }

        return res.status(200).json(createUser,"user create succefully")

    } catch (error) {
        console.log(`somting is error`, error.message)
        
    }
})


// user login router

router.post("/userlogin", async (req,res) => {
    try {

        const {userName,email,password} = req.body

        if(!userName && !email){
            throw new console.error("username and email not found")
        }

        const user = await UserModel.findOne({
            $or:[{userName},{email}]
        })
        
        if(!user){
            throw new console.error("user not found")
        }

        const isPasswordValid = await user.isPasswordCorrect(password)

          if(!isPasswordValid){
            throw new console.error("password is invaid")
        }

        const  {accessToken,refreshToken} =await genrateAccessAndRefreshToken(user._id)
        const loggedInUser =  await UserModel.findById(user._id).select("-password -refreshToken")
        
        if(!loggedInUser){
            throw new console.error("loggedInUser not found")
        }


        // send cookie
            const options = {
                httpOnly: true,
                secure: true
            }


            return res.status(200)
            .cookie("accessToken",accessToken,options)
            .cookie("refreshToken",refreshToken,options)
            .json(
                {
                    message:"success",
                    user:[loggedInUser,accessToken,refreshToken]
                }
            )



    } catch (error) {
            console.log(`something went wrong`, error.message)
        
    }

})


router.post("/logout", async (req,res) => {
    await UserModel.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json("user logout succesfully")

})



export default router
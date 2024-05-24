import { Router } from "express";
import { loginUser, logoutUser, registerUser,refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updateUsercoverImage, getUserChannelProfile, getWatchHistory } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()


// post routers
// user router 
router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1

        },
        {
            name: "coverImage",
            maxCount:1
        }
    ]),
    registerUser)



// login user router
router.route("/login").post(loginUser)


// logout user roter
router.route("/logout").post(verifyJWT,  logoutUser)

// refresh token
router.route("/refresh-token").post(refreshAccessToken)

//changeCurrentPassword
router.route("/change-password").post(verifyJWT,changeCurrentPassword)


// get routers 
//getCurrentUser
router.route("/current-user").get(verifyJWT,getCurrentUser)


// patch router
//updateAccountDetails
router.route("/update-account").patch(verifyJWT, updateAccountDetails)

//updateUserAvatar
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)


//updateUsercoverImage
router.route("cover-image").patch(verifyJWT,upload.single("coverImage"),updateUsercoverImage)

// get routers 
//getUserChannelProfile
router.route("/c/:username").get(verifyJWT,getUserChannelProfile)

// getWatchHistory
router.route("/history").get(verifyJWT,getWatchHistory)


export default router
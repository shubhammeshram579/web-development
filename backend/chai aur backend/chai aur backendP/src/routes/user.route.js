import { Router } from "express";
import { loginUser, logoutUser, registerUser,refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

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


export default router
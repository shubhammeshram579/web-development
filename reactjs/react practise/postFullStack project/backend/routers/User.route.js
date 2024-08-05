import { Router } from "express";
import {regitsterUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    refreshAccessToken,
    updateUser,
    userSavePost,
    follow,
    unfollow,
    getusetbyId,
    Allusers
} from "../controllers/User.controller.js"
// import cors from "cors"
import {verifyJWT} from "../middlewheres/Auth.middlewere.js"

const router = Router()

// router.use(cors({
//     origin : "http://localhost:5173"

// }  
// ));
// router.use(express.json());

// regirter router
router.route("/users/register").post(regitsterUser)
router.route("/users/login").post(loginUser)
router.route("/users/logout").post(verifyJWT, logoutUser)
router.route("/users/refresh-token").post(refreshAccessToken)
router.route("/users/current-user").get(verifyJWT,getCurrentUser)
router.route("/users/savePosts/:userId").get(verifyJWT,userSavePost)
router.route("/users/updateuser").patch(verifyJWT,updateUser)
router.route("/users/follow").post(verifyJWT, follow)
router.route("/users/unfollow").post(verifyJWT,unfollow)
router.route("/users/getUsersById").get(verifyJWT,getusetbyId)
router.route("/users/getAllUsers/search").get(verifyJWT,Allusers)


export default router



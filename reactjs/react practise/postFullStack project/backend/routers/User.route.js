import { Router } from "express";
import {regitsterUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    refreshAccessToken
} from "../controllers/User.controller.js"
import cors from "cors"
import {verifyJWT} from "../middlewheres/Auth.middlewere.js"

const router = Router()

router.use(cors({
    origin : "http://localhost:5173"

}  
));
// router.use(express.json());

// regirter router
router.route("/users/register").post(regitsterUser)
router.route("/users/login").post(loginUser)
router.route("/users/logout").post(verifyJWT, logoutUser)
router.route("/users/refresh-token").post(refreshAccessToken)
router.route("/users/current-user").get(verifyJWT, getCurrentUser)


export default router



import { Router } from "express";
import {regitsterUser,
    loginUser,
    getCurrentUser,
    logoutUser
} from "../controllers/User.controller.js"

import {verifyJWT} from "../middlewheres/Auth.middlewere.js"

const router = Router()


// regirter router
router.route("/register").post(regitsterUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/current-user").get(verifyJWT, getCurrentUser)


export default router



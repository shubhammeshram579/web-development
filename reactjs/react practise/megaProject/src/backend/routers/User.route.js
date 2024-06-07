import { Router } from "express";
import {regitsterUser,
    loginUser,
    getCurrentUser,
    logoutUser
} from "../controllers/User.controller.js"

import {verifyJWT} from "../middlewheres/Auth.middlewere.js"


// regirter router
Router.route("/register").post(regitsterUser)
Router.route("/login").post(loginUser)
Router.route("/logout").post(verifyJWT, logoutUser)
Router.route("/current-user").get(verifyJWT, getCurrentUser)
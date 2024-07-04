import {Router} from "express"
// import cors from "cors"
import express from "express"

import { publishPost,getAllPost} from "../controllers/Post.controller.js"

import {verifyJWT} from "../middlewheres/Auth.middlewere.js"
import {upload} from "../middlewheres/Multer.js"




const router = Router();
// router.use(cors());
router.use(verifyJWT);
// router.use(express.json())



router.route("/posts/addpost").post(
    upload.fields([
        {
            name: "postImg",
            maxCount: 1,
        }
    ]), publishPost

);

router.route("/posts/getAllpost").get(getAllPost)


export default router
import {Router} from "express"
// import cors from "cors"
import express from "express"

import { publishPost, getAllPost, getPost, updatePost, deletePost ,getPostById,searchBarByPost,savePost} from "../controllers/Post.controller.js"

import {verifyJWT} from "../middlewheres/Auth.middlewere.js"
import {upload} from "../middlewheres/Multer.js"




const router = Router();
router.use(verifyJWT);



router.route("/posts/addpost").post(
    upload.fields([
        {
            name: "postImg",
            maxCount: 1,
        }
    ]), publishPost

);

router.route("/posts/getAllpost").get(getAllPost)
router.route("/posts/getPost/:userId").get(getPost)
// router.route("/posts/getPostUser/:userId").get(getPostUser)
router.route("/posts/savePost").post(savePost)
router.route("/posts/getAllpost/search").get(searchBarByPost)
router.route("/posts/getPostByID/:postId").get(getPostById)
router.route("/posts/EditPost/:postId").patch(upload.single("postImg"),updatePost)
router.route("/posts/deletePost/:postId").delete(deletePost)


// router.route("/posts/notification/:userId").get(notification)


export default router
import { Router } from "express";
import {addComment,getComment,getCommentByOwner} from "../controllers/Comment.controller.js"
import { verifyJWT } from "../middlewheres/Auth.middlewere.js";

const router = Router()

router.use(verifyJWT)

router.route("/comments/addcomment/:_id").post(addComment)
router.route("/comments/getcomment/:postId").get(getCommentByOwner)
router.route("/comments/getcomment/:_id").get(getComment)

export default router
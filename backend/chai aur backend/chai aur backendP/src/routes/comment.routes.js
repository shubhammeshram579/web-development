import { Router } from 'express';
import {
    getVideoComments, 
    addComment, 
    updateComment,
    deleteComment,
    getCommentId
} from "../controllers/comment.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/:videoId").get(getVideoComments)
router.route("/:videoId").post(addComment);

router.route("/c/:commentId").get(getCommentId);

router.route("/c/:commentId").patch(updateComment)
router.route("/c/:commentId").delete(deleteComment)

export default router
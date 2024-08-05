import { Router } from "express";
import {addChatMessage,getchat,fromChatMessage,toUserChatMessage,getChatMessagesToUser} from "../controllers/ChatMessage.controller.js"
import {verifyJWT} from "../middlewheres/Auth.middlewere.js"


const router = Router()
router.use(verifyJWT);

router.route("/chatMessage/send").post(addChatMessage)
router.route("/chatMessage/getchats").get(getchat)
router.route("/chatMessage/fromUserChat").get(fromChatMessage)
router.route("/chatMessage/toUserChat").get(toUserChatMessage)
router.route("/chatMessage/toUser").get(getChatMessagesToUser)

export default router
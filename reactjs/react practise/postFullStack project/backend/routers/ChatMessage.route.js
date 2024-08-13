import { Router } from "express";
import {
    addChatMessage,getchat,fromChatMessage,fromAndTo,chatNotification,readChat,
    // toUserChatMessage,getChatMessagesToUser,
    messagesend} from "../controllers/ChatMessage.controller.js"
import {verifyJWT} from "../middlewheres/Auth.middlewere.js"


const router = Router()
router.use(verifyJWT);

router.route("/chatMessage/send").post(addChatMessage)
router.route("/chatMessage/sendmessage").post(messagesend)
router.route("/chatMessage/getchats").get(getchat)
router.route("/chatMessage/fromUserChat/:to").get(fromChatMessage)
router.route("/chatMessage/:from/:to").get(fromAndTo)
router.route("/chatMessage/chatnotifications").get(chatNotification)
router.route("/chatMessage/readchat/:from/:to").put(readChat)



// router.route("/chatMessage/toUserChat/:userId").get(toUserChatMessage)
// router.route("/chatMessage/toUser").get(getChatMessagesToUser)

export default router
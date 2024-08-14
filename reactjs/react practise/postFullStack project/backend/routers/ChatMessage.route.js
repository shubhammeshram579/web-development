import { Router } from "express";
import {addChatMessage,getchat,fromAndTo,chatNotification,readChat} from "../controllers/ChatMessage.controller.js"
import {verifyJWT} from "../middlewheres/Auth.middlewere.js"


const router = Router()
router.use(verifyJWT);

router.route("/chatMessage/send").post(addChatMessage)
router.route("/chatMessage/getchats").get(getchat)
router.route("/chatMessage/:from/:to").get(fromAndTo)
router.route("/chatMessage/chatnotifications").get(chatNotification)
router.route("/chatMessage/readchat/:from/:to").put(readChat)

export default router
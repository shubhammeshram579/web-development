import { Router } from "express";
import {notification,deleteNotification} from "../controllers/Notification.controller.js"

import {verifyJWT} from "../middlewheres/Auth.middlewere.js"

const router = Router();
router.use(verifyJWT);

router.route("/Notification/:userId").get(notification)
router.route("/Notification/:notificationId").delete(deleteNotification)


export default router

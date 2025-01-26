import { Router } from "express";
import {HomeRoter} from "../controllers/HomeControler.js"

const router = Router()

router.route("/home").get(HomeRoter);

export default router
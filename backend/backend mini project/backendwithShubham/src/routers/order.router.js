import express from "express"
import { creatOrder,getOrderList} from "../controllers/orders.controller.js"


const router = express.Router();

router.post("/", creatOrder)
router.get("/", getOrderList)


export default router
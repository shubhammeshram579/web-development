import express from "express"
import {createProduct,getPrdoucts,updatePrdoucts,deletePrdoucts} from "../controllers/product.controller.js"
const router = express.Router()

router.post("/",createProduct)
router.get("/",getPrdoucts)
router.put("/:id",updatePrdoucts)
router.delete("/:id",deletePrdoucts)

export default router
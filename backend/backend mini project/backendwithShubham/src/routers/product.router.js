import express from "express"
import {createProduct,getPrdoucts,updatePrdoucts,deletePrdoucts,getProductslist} from "../controllers/product.controller.js"
const router = express.Router()

router.post("/",createProduct)
router.get("/",getPrdoucts)
router.get("/getprdouct",getProductslist)
router.put("/:id",updatePrdoucts)
router.delete("/:id",deletePrdoucts)

export default router
import express from "express";
import {empRegister,empLogin,emplogout} from "../controllers/employee.controller.js"

const router = express.Router();

router.post("/register",empRegister)
router.post("/login",empLogin)
router.post("/logout",emplogout)


export default router
import express from "express";
import { addVehicle, getVehicles } from "../controllers/vehicleController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addVehicle);
router.get("/", getVehicles);

export default router;

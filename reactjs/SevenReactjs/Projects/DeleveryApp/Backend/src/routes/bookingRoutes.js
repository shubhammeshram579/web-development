import express from "express";
import { createBooking, getBooking, updateBookingStatus } from "../controllers/bookingController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/:id", protect, getBooking);
router.put("/:id", protect, updateBookingStatus);

export default router;

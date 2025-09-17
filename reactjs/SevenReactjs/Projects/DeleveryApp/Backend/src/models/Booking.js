import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pickupLocation: { type: String, required: true },
    dropLocation: { type: String, required: true },
    status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

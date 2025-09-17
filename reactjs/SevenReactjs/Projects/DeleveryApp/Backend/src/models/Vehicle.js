import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true }, // e.g. Chhota Hathi, Pickup
    availability: { type: Boolean, default: true },
    pricePerKm: { type: Number, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;

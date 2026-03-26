import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  brand: String,
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

productSchema.index({ category: 1, price: 1 }); // compound index

export const Product  = mongoose.model("Product", productSchema);

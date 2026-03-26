import express from "express"
import {Product} from "../models/performance.model.js"

const router = express.Router();

router.get("/productsitem", async (req, res) => {
  try {
    const { category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;

    let filter = {};

    if (category) filter.category = category;
    if (minPrice && maxPrice) {
      filter.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    }

    const products = await Product.find(filter)
      .select("name price category brand rating")
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: products.length,
      data: products
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

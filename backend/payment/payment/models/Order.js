const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  userEmail: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);

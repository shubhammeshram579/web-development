// models/Cart.js
const mongoose = require('mongoose');

const cartSchema =  mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddtoProduct2',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Cart', cartSchema);

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a new order
router.post('/create-order', async (req, res) => {
  const { productId, email } = req.body;
  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).send('Product not found');
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${req.protocol}://${req.get('host')}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.protocol}://${req.get('host')}/`,
    customer_email: email,
  });

  res.json({ id: session.id });
});

// Order success page
router.get('/success', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const product = await Product.findOne({ name: session.display_items[0].custom.name });

  const newOrder = new Order({
    productId: product._id,
    userEmail: session.customer_email,
    amount: session.amount_total / 100,
  });

  await newOrder.save();
  res.render('success', { order: newOrder });
});

module.exports = router;

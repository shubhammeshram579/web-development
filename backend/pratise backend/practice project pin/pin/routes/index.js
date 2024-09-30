var express = require('express');
var router = express.Router();
const userModel = require("./users");
const bespokeModel = require("./BespokeEvent");
const groupOrderModel = require("./groupOrder");
const donateModel = require("./donate");
const Cart = require("./addcard");
const passport = require('passport');
const localStrategy = require("passport-local");
const Afternoon = require("./Afternoon");
const AddtoProduct2 = require(".//../routes/product")
const Razorpay = require('razorpay');

const ProductOrders = require("./ProductOrders")


const axios = require("axios")

require('dotenv').config(); // Load environment variables
// const payment = require("../views/partial/")


// const paymentRoutes = require('./routes/payment');





passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', async function(req, res, next) {
  let productList = await AddtoProduct2.find({});
  // console.log(productList)
  res.render('index',{productList});
});


router.get('/menu', function(req, res, next) {
  res.render('menu');
});





router.get('/products', function(req, res, next) {
  res.render('products');
});


router.get('/lunch', function(req, res, next) {
  res.render('lunch');
});



router.get("/Afternoon", async function(req, res, next){
  let users = await Afternoon.find();
  res.render("Afternoon",{users})
});





// router.get("/productList",async function(req, res){
//   let productList = await AddtoProduct2.find({});
//   res.json({productList})

// })


// router.get('/add-to-card' ,isLoggedIn,  async function(req, res, next) {
//   const user = await userModel
//   .findOne({username:req.session.passport.user})
//   .populate("addcard")
//   res.render('addtocard');
// });


// router.post('/add-to-card', isLoggedIn, async function(req, res, next) {
//   const user = await userModel.findOne({username:req.session.passport.user});
//   const addcard = await addcardModel.create({
//     user: user._id,
//     addcards: req.body.addcards,
//     price:req.body.price,
//   });

//   user.addcard.push(addcard._id);
//   await user.save();
//   res.redirect("/add-to-card");
// });




router.get('/shop', async function(req, res, next) {
  let productList = await AddtoProduct2.find({});
  // console.log(productList)
  res.render('shop',{productList});
});


router.get('/catering', function(req, res, next) {
  res.render('catering');
});

// product details 


router.get('/stories', function(req, res, next) {
  res.render('stories');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});


router.get('/contact', function(req, res, next) {
  res.render('contact');
});







router.get('/donate', function(req, res, next) {
  res.render('donate');
});

router.get('/donate2' ,isLoggedIn,  async function(req, res, next) {
  const user = await userModel
  .findOne({username:req.session.passport.user})
  .populate("donate")
  res.render('donate');
});


router.post('/donate2', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({username:req.session.passport.user});
  const donatem = await donateModel.create({
    user: user._id,
    donate: req.body.donate,
  });

  user.donate.push(donatem._id);
  await user.save();
  res.redirect("/donate");
});


// router.get('/bespoke', function(req, res, next) {
//   res.render('bespoke');
// });

router.get('/bespoke' ,isLoggedIn,  async function(req, res, next) {
  const user = await userModel
  .findOne({username:req.session.passport.user})
  .populate("posts")
  res.render('bespoke');
});



// get create post router for posted file store in multer folder 
router.post('/bespoke', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({username:req.session.passport.user});
  const post = await bespokeModel.create({
    user: user._id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    date: req.body.date,
    numberofgest:req.body.numberofgest,
    address: req.body.address,
    state: req.body.state,
    pastcode: req.body.pastcode,
    massage: req.body.massage,
    checkbox: req.body.checkbox,
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/catering")
});




router.get('/log-register', function(req, res, next) {
  res.render('loregiter');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

// router.get('/group-order', function(req, res, next) {
//   res.render('groupOrder');
// });


router.get('/group-order' ,isLoggedIn,  async function(req, res, next) {
  const user = await userModel
  .findOne({username:req.session.passport.user})
  .populate("gOrder")
  res.render('groupOrder');
});



// get create post router for posted file store in multer folder 
router.post('/group-order', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({username:req.session.passport.user});
  const orderp = await groupOrderModel.create({
    user: user._id,
    groupOrder: req.body.groupOrder,
    email: req.body.email,
  });

  user.gOrder.push(orderp._id);
  await user.save();
  res.redirect("/catering")
});


router.get('/product/:_id',async function(req, res, next) {
  let _id = req.params;
  let getProduct = await AddtoProduct2.findById(_id)
  console.log("getProduct id",getProduct._id)
  res.render('product',{getProduct});
});




// // // Route to handle quantity increment and decrement
// router.post('/update-quantity/:id', isLoggedIn,async (req, res) => {
//   const { id } = req.params;
//   const { action } = req.body;

//   try {
//     // Find the product by ID
//     const product = await AddtoProduct2.findById(id);

//     if (action === 'increase') {
//       product.quantity += 1;
//     } else if (action === 'decrease' && product.quantity > 1) {
//       product.quantity -= 1;
//     }

//     // Save the updated product
//     await product.save();

//     res.redirect(`/product/${id}`)

//     // // / Check the referrer to redirect accordingly
//     // const referrer = req.get('Referrer');

//     // if (referrer.includes('/product')) {
//     //   // If the referrer URL includes '/product', redirect to the product page
//     //   res.redirect(`/product/${id}`);
//     // } else if (referrer.includes('/add-to-cart')) {
//     //   // If the referrer URL includes '/add-to-cart', redirect to the cart page
//     //   res.redirect(`/add-to-cart/${id}`);
//     // } else {
//     //   // Default redirection to cart if referrer doesn't match
//     //   res.redirect('/cart');
//     // }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error updating product quantity');
//   }
// });



// // Route to update product quantity
// router.post('/update-quantity2/:id', isLoggedIn, async (req, res) => {
//   const { id } = req.params;
//   const { action } = req.body;
//   const user = await userModel.findOne({username:req.session.passport.user});

//   try {
//     // Find the product by ID (modify this based on where your product is stored)
//     let productInCart = await Cart.findOne({ userId: user._id, "products.productId": id });

//     if (!productInCart) {
//       return res.status(404).send('Product not found in cart');
//     }

//     const productIndex = productInCart.products.findIndex(p => p.productId.toString() === id);

//     if (action === 'increase') {
//       productInCart.products[productIndex].quantity += 1;
//     } else if (action === 'decrease' && productInCart.products[productIndex].quantity > 1) {
//       productInCart.products[productIndex].quantity -= 1;
//     }

//     // Save the updated cart
//     await productInCart.save();



//     res.redirect(`/add-to-cart/${id}`);

//     // Redirect back to the product or cart page based on the referrer
//     // Check the referrer to redirect accordingly
//     // const referrer = req.get('Referrer');

//     // if (referrer.includes('/product')) {
//     //   // If the referrer URL includes '/product', redirect to the product page
//     //   res.redirect(`/product/${id}`);
//     // } else if (referrer.includes('/add-to-cart')) {
//     //   // If the referrer URL includes '/add-to-cart', redirect to the cart page
//     //   res.redirect(`/add-to-cart/${id}`);
//     // } else {
//     //   // Default redirection to cart if referrer doesn't match
//     //   res.redirect('/cart');
//     // }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error updating product quantity');
//   }
// });


router.post('/update-quantity/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;
  const user = await userModel.findOne({ username: req.session.passport.user });

  try {
    // Update in the product collection
    const product = await AddtoProduct2.findById(id);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    if (action === 'increase') {
      product.quantity += 1;
    } else if (action === 'decrease' && product.quantity > 1) {
      product.quantity -= 1;
    }

    // Save the updated product
    await product.save();

    // Update in the cart collection
    let productInCart = await Cart.findOne({ userId: user._id, "products.productId": id });

    if (productInCart) {
      const productIndex = productInCart.products.findIndex(p => p.productId.toString() === id);

      if (action === 'increase') {
        productInCart.products[productIndex].quantity += 1;
      } else if (action === 'decrease' && productInCart.products[productIndex].quantity > 1) {
        productInCart.products[productIndex].quantity -= 1;
      }

      // Save the updated cart
      await productInCart.save();
    }

    // Redirect back to the appropriate page based on the referrer
    const referrer = req.get('Referrer');
    if (referrer.includes(`/product/${id}`)) {
      res.redirect(`/product/${id}`);
    } else if (referrer.includes(`/add-to-cart`)) {
      res.redirect(`/add-to-cart`);
    } else {
      res.redirect('/cart');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating product quantity');
  }
});

// // Express route to handle quantity updates
// router.post('/update-quantity/:productId', isLoggedIn, async (req, res) => {
//   const { productId } = req.params;
//   const { action } = req.body; // Expecting { action: 'increase' or 'decrease' }
//   // const user = await userModel.findOne({username:req.session.passport.user});

//   // Find the product in the cart and update its quantity
//   Cart.findOne({ userId: req.session.passport.user._id }, (err, cart) => {
//       if (err) return res.status(500).json({ success: false, error: err.message });

//       const cartItem = cart.products.find(item => item.productId.toString() === productId);
//       if (!cartItem) return res.status(404).json({ success: false, error: 'Product not found in cart' });

//       // Update the quantity based on action
//       if (action === 'increase') {
//           cartItem.quantity += 1;
//       } else if (action === 'decrease' && cartItem.quantity > 1) {
//           cartItem.quantity -= 1;
//       }

//       // Save the cart and return the updated quantity
//       cart.save((err, updatedCart) => {
//           if (err) return res.status(500).json({ success: false, error: err.message });

//           // Optionally, calculate the new total amount if needed
//           const newTotalAmount = updatedCart.products.reduce((total, item) => total + item.quantity * item.productId.pPrice, 0);

//           res.json({
//               success: true,
//               newQuantity: cartItem.quantity,
//               newTotalAmount: newTotalAmount // If you want to update the total amount
//           });
//       });
//   });
// });








// router.get('/add-to-card', isLoggedIn, async function(req, res, next) {
//   const user = await userModel.findOne({username:req.session.passport.user});
//   res.render('addtocard');
// });


// // Route to add a product to the cart
// router.post('/add-to-cart/:productId',isLoggedIn, async (req, res) => {
//   const productId = req.params.productId;
//   const user = await userModel.findOne({username:req.session.passport.user});
//   // const userId = req.session.user._id; // Get the current logged-in user ID
//   const userId = user._id

//   console.log("userId",user._id)
//   try {
//     let cart = await Cart.findOne({ userId });

//     // If the cart does not exist for the current user, create a new one
//     if (!cart) {
//       cart = new Cart({
//         userId,
//         products: [{ productId, quantity: 1 }],
//       });
//     } else {
//       // If the cart exists, check if the product is already in the cart
//       const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

//       if (productIndex > -1) {
//         // Product exists in the cart, increment the quantity
//         cart.products[productIndex].quantity += 1;
//       } else {
//         // Product does not exist in the cart, add a new one
//         cart.products.push({ productId, quantity: 1 });
//       }
//     }

//     // Save the cart
//     await cart.save();
//     res.redirect(`/add-to-cart`);
//     // res.render('addtocard');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error adding product to cart');
//   }
// });

// Route to add a product to the cart
router.post('/add-to-cart/:productId', isLoggedIn, async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body; // Get the quantity from the form
  const user = await userModel.findOne({ username: req.session.passport.user });

  try {
    let cart = await Cart.findOne({ userId: user._id });

    // If the cart does not exist for the current user, create a new one
    if (!cart) {
      cart = new Cart({
        userId: user._id,
        products: [{ productId, quantity: parseInt(quantity) }],
      });
    } else {
      // If the cart exists, check if the product is already in the cart
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

      if (productIndex > -1) {
        // Product exists in the cart, increment the quantity
        cart.products[productIndex].quantity += parseInt(quantity);
      } else {
        // Product does not exist in the cart, add a new one
        cart.products.push({ productId, quantity: parseInt(quantity) });
      }
    }

    // Save the cart
    await cart.save();

    // Redirect to the cart page
    res.redirect(`/add-to-cart`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding product to cart');
  }
});



// Route to delete a product from the cart
router.post('/delete-from-cart/:productId', async (req, res) => {
  const { productId } = req.params;
  const user = await userModel.findOne({ username: req.session.passport.user });

  try {
      // Find the user's cart
      let cart = await Cart.findOne({ userId: user._id });

      if (cart) {
          // Filter out the product to be removed
          cart.products = cart.products.filter(product => product.productId.toString() !== productId);

          // Save the updated cart
          await cart.save();
      }

      // Redirect to the cart page after deletion
      res.redirect('/add-to-cart'); // Adjust the redirection URL as needed
  } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting product from cart');
  }
});






router.get('/card', function(req, res, next) {
  res.render('card');
});


// Route to display products and the current user's cart
router.get('/add-to-cart',isLoggedIn, async (req, res) => {

  // const productId = req.params.productId;
  const user = await userModel.findOne({username:req.session.passport.user});
  const userId = user._id; // Get the current logged-in user's ID

  try {
    const products = await AddtoProduct2.find(); // Get all products
    const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart
    console.log("cardsss",cart)
    res.render('addtocard', { products, cart });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving products and cart');
  }
});



// Route to display products and the current user's cart
router.get('/add-to-cart2',isLoggedIn, async (req, res) => {

  // const productId = req.params.productId;
  const user = await userModel.findOne({username:req.session.passport.user});
  const userId = user._id; // Get the current logged-in user's ID

  try {
    const products = await AddtoProduct2.find(); // Get all products
    const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart
    console.log("cardsss",cart)
    res.render('checkout', { products, cart,user});
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving products and cart');
  }
});



// updatedAddress user
router.post("/add-to-cart2", async function (req, res, next) {
  try {
    let { address, country, state, postcode, phone_number } = req.body;

    // Find the user by username stored in the session
    const user = await userModel.findOne({ username: req.session.passport?.user });

    if (!user) {
      alert("user is not exiest")
      
    }

    // Validate required fields
    if ([address, country, state, postcode, phone_number].some(field => !field || field.trim() === "")) {
      alert("All fields are required");
    }

    // Update user address details
    const updatedAddress = await userModel.findByIdAndUpdate(
      user._id,
      {
        $set: {
          address,
          country,
          state,
          postcode,
          phone_number,
        }
      },
      { new: true }
    ).select("-password");

    res.redirect('/add-to-cart2'); // Adjust the redirection URL as needed
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving products and cart');
  }
});


// router.get("/payment", function(req,res,next) {
//   res.render("payment")

// })



// // Render payment page
// router.get('/payment', async (req, res) => {

//    // const productId = req.params.productId;
//    const user = await userModel.findOne({username:req.session.passport.user});
//    const userId = user._id; // Get the current logged-in user's ID


//    const products = await AddtoProduct2.find(); // Get all products
//     const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart

//     console.log("pyament card" , cart)

//   // const cart = req.session.cart; // Assuming you store the cart in session
//   let totalAmount = 0;

//   if (cart && cart.products.length > 0) {
//       totalAmount = cart.products.reduce((total, cartItem) => {
//           return total + (cartItem.quantity * cartItem.productId.pPrice);
//       }, 0);
//   }

//   res.render('payment', { cart, totalAmount });
// });



// // Process payment
// router.post('/process-payment', (req, res) => {
//   const { paymentMethod } = req.body;

//   // Placeholder for order details and payment status
//   const orderDetails = {
//       orderId: Math.floor(Math.random() * 1000000), // Example order ID
//       status: 'pending', // Order status can be updated based on payment status
//       paymentMethod,
//   };

//   // Simulate different payment methods handling
//   switch (paymentMethod) {
//       case 'netBanking':
//           // Simulate a redirect to a bank gateway (in a real-world scenario, you would integrate with a bank API)
//           orderDetails.status = 'redirecting to bank gateway';
//           res.send(`Redirecting to bank gateway for order ID: ${orderDetails.orderId}`);
//           break;

//       case 'upi':
//           // Simulate initiating a UPI transaction (you'd typically use a UPI API here)
//           orderDetails.status = 'UPI transaction initiated';
//           res.send(`UPI transaction initiated for order ID: ${orderDetails.orderId}`);
//           break;

//       case 'cod':
//           // For cash on delivery, you just save the order and mark it as COD
//           orderDetails.status = 'order placed with COD';
//           res.send(`Order placed with cash on delivery. Order ID: ${orderDetails.orderId}`);
//           break;

//       default:
//           // If no valid payment method is provided, return an error
//           res.status(400).send('Invalid payment method selected');
//           break;
//   }

//   // Save the orderDetails to a database if necessary (skipping for this example)
//   // db.save(orderDetails);
// });




// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.YOUR_RAZORPAY_KEY_ID ,// Replace with your key_id
  key_secret: process.env.YOUR_RAZORPAY_KEY_SECRET  // Replace with your key_secret
});


// Route to render payment page
router.get('/payment',async (req, res) => {

  const productId = req.params.productId;
   const user = await userModel.findOne({username:req.session.passport.user});
   const userId = user._id; // Get the current logged-in user's ID


   const products = await AddtoProduct2.find(); // Get all products
    const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart

    // console.log("pyament card" , cart)

  // const cart = req.session.cart; // Assuming you store the cart in session
  let totalAmount = 0;

  if (cart && cart.products.length > 0) {
      totalAmount = cart.products.reduce((total, cartItem) => {
          return total + (cartItem.quantity * cartItem.productId.pPrice);
      }, 0);
  }

  let productDetails = cart.products.map(item => ({
    productName: item.productId.producttitle,
    productPrice: item.productId.pPrice,
    quantity: item.quantity
  }));


  res.render('razorpayPayment', { key: razorpay.key_id ,cart,totalAmount,user,productDetails});
});




// Route to create an order
router.post('/create/order', async (req, res) => {
  const { amount, username, email, contact, address, productDetails } = req.body;


  // Ensure productDetails is a string if it's not already
  const formattedProductDetails = typeof productDetails === 'string' 
  ? productDetails 
  : JSON.stringify(productDetails);


  //  // Parse the productDetails from the string, if necessary
  //  let parsedProductDetails;
  //  try {
  //      parsedProductDetails = JSON.parse(productDetails); // Parse stringified product details
  //  } catch (error) {
  //      console.error("Error parsing product details:", error);
  //      return res.status(400).json({ status: "failed", message: "Invalid product details format" });
  //  }

  const options = {
      amount: amount,  // Amount in paise
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
      notes: {  // Store additional details in notes
          username: username,
          email: email,
          contact: contact,
          address: address,
          products: JSON.stringify(productDetails) // Store product details as a string
          // amount: amount  // Optional: You can store the amount as well
      }
  };

  console.log("createorder option" ,options)

  try {
      const order = await razorpay.orders.create(options);
      console.log("create oder" ,order)
      res.json(order);
  } catch (error) {
      res.status(500).send(error);
  }
});




// // Route for verifying payment
// router.post('/verify', (req, res) => {
//   const crypto = require("crypto");
//   const shasum = crypto.createHmac('sha256', razorpay.key_secret);
//   shasum.update(req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id);
//   const digest = shasum.digest('hex');

//   if (digest === req.body.razorpay_signature) {
//       // Payment successful, do further actions like storing in database
//       res.json({ status: "success" });
//   } else {
//       // Payment failed
//       res.json({ status: "failed" });
//   }
// });

// Route for verifying payment and saving order to the database
router.post('/verify', async (req, res) => {
  const crypto = require("crypto");
  const shasum = crypto.createHmac('sha256', razorpay.key_secret);
  shasum.update(req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id);
  const digest = shasum.digest('hex');

  console.log('Received payment verification request:', req.body); // Log the entire request

  const user = await userModel.findOne({username:req.session.passport.user});
  const userId = user._id; // Get the current logged-in user's ID

  if (digest === req.body.razorpay_signature) {
    // Payment is successful, store the order in the database
    console.log('Payment notes:', req.body.notes);  // Log the notes
    try {
      const { razorpay_order_id, razorpay_payment_id, notes } = req.body;

        // Check if the notes are undefined or empty
        if (!notes || !notes.username || !notes.email || !notes.contact) {
          throw new Error("Missing user details in Razorpay notes.");
        }

      // Create a new order with payment details and user info
      const newOrder = new ProductOrders({
        userId: userId,  // Assuming user ID is in session
        username: notes.username,
        email: notes.email,
        contact: notes.contact,
        address: notes.address,
        products: notes.products,  // Convert the products string back to an array
        amount: notes.amount,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        status: 'paid'  // Update status to 'paid'
      });

      // Save the order in MongoDB
      await newOrder.save();

      // Respond to client with success
      res.json({ status: "success", orderId: newOrder._id });
      // Redirect to order confirmation page after saving
      // res.redirect(`/order/confirmation/${newOrder._id}`);
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({ status: "failed", message: "Error saving order to the database." });
    }
  } else {
    // Payment verification failed
    res.json({ status: "failed" });
  }
});



// // Route to display order confirmation page
// router.get('/order/confirmation/:orderId', async (req, res) => {
//   try {
//       const order = await ProductOrders.findById(req.params.orderId).populate('userId');
//       if (!order) {
//           return res.status(404).send('Order not found');
//       }

//       res.render('orderConfirmation', { order });
//   } catch (error) {
//       console.error('Error fetching order:', error);
//       res.status(500).send('Error fetching order details.');
//   }
// });




// // payment router upi payment
// // // // UPI Payment Endpoint
// router.post('/create-upi-payment', async (req, res) => {

//   try {
//       // Get payment details from the request body
//       const { amount, customerEmail, customerPhone } = req.body;

//     const user = await userModel.findOne({username:req.session.passport.user});
//     const userId = user._id; // Get the current logged-in user's ID

//     const products = await AddtoProduct2.find(); // Get all products
//     const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart
//     console.log("card",cart)
//     console.log("products",products)


//      // const cart = req.session.cart; // Assuming you store the cart in session
//   let totalAmount = 0;

//   if (cart && cart.products.length > 0) {
//       totalAmount = cart.products.reduce((total, cartItem) => {
//           return total + (cartItem.quantity * cartItem.productId.pPrice);
//       }, 0);
//   }

//       // Request payload for UPI provider
//       const payload = {
//           amount: totalAmount, // Amount in paise (for example: 100 = ₹1.00)
//           currency: 'INR',
//           customer: {
//               email: user.email,
//               phone: user.phone_number,
//           },
//           method: 'upi',
//           purpose: 'Payment for Order #12345',
//       };

//       // UPI Provider API Endpoint (Example for Razorpay)
//       const upiProviderEndpoint = 'https://api.razorpay.com/v1/payment_links';

//       // Request to create a UPI payment link
//       const response = await axios.post(upiProviderEndpoint, payload, {
//           headers: {
//               'Authorization': `Basic ${Buffer.from(`${process.env.UPI_PROVIDER_API_KEY}:${process.env.UPI_PROVIDER_SECRET}`).toString('base64')}`,
//               'Content-Type': 'application/json'
//           }
//       });

//       // Send the payment link or QR code URL back to the client
//       res.status(200).json({
//           success: true,
//           paymentLink: response.data.short_url,
//           message: 'UPI payment link created successfully'
//       });
//   } catch (error) {
//       console.error('Error creating UPI payment:', error);
//       res.status(500).json({
//           success: false,
//           message: 'Failed to create UPI payment'
//       });
//   }
// });




// router.post('/submitOrder', async (req, res) => {
//   try {
//     const { fullName, email, address, city, postcode, phone, paymentMethod, bankName, accountNumber, upiId } = req.body;

//     // Validation: Check if all required fields are provided
//     if (!fullName || !email || !address || !city || !postcode || !phone || !paymentMethod) {
//       return res.status(400).send('All fields are required.');
//     }

//     // Payment method specific validation
//     if (paymentMethod === 'internet-banking' && (!bankName || !accountNumber)) {
//       return res.status(400).send('Bank name and account number are required for Internet Banking.');
//     }
//     if (paymentMethod === 'upi' && !upiId) {
//       return res.status(400).send('UPI ID is required for UPI payment.');
//     }

//     // Process order (e.g., save to database)
//     // TODO: Implement order processing logic here

//     // Example response
//     res.status(200).send(`Order placed successfully using ${paymentMethod}.`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred while processing the order.');
//   }
// });




// // product order page
// router.get('/checkout', isLoggedIn, async function(req, res, next) {
//   const user = await userModel.findOne({username:req.session.passport.user});
//   const userId = user._id;
//   const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart
//   res.render('checkout',{ products, cart });
// });

// router.get('/product' ,isLoggedIn,  async function(req, res, next) {
//   const user = await userModel
//   .findOne({username:req.session.passport.user})
//   .populate("Addtoproduct")
//   res.render('product');
// });



// get create post router for posted file store in multer folder 
// router.post('/product', isLoggedIn, async function(req, res, next) {
//   const user = await userModel.findOne({username:req.session.passport.user});
//   const orderp = await addtoproduct.create({
//     user: user._id,
//     productname: req.body,
//     price: String,
//     pimags:String,
//   });

//   user.gOrder.push(orderp._id);
//   await user.save();
//   res.redirect("/catering")
// });





// second regiter router for databses post in mongodb databses set
router.post('/register', function(req, res, next) {
  // create user data set up colums 
  const userdata = new userModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    email: req.body.email,
    company: req.body.company,
    address: req.body.address,
    country: req.body.country,
    state: req.body.state,
    pastcode: req.body.pastcode,
    radio: req.body.radio,
    username: req.body.username,

  });

  // set up possport  promises fuction for password is currect then user is login other reject
  userModel.register(userdata,req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res,function(){
      res.redirect("/catering")
    })
  });

});







// get create loging router page
router.post('/login' , passport.authenticate("local",{
  failureRedirect: "/",
  successRedirect: "/"
}));


// get create logout router page and got the passport websit cory the lated code 
router.get("/logout",function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});



var altw = "please login in "
// set function for passport protected purpuse
// function isLoggedIn(req, res, next){
//   if (req.isAuthenticated()){
//     return next();
//   }
//   res.redirect("/");
// };

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  req.flash("error", "Please login first.");
  res.redirect("/");
}




module.exports = router;

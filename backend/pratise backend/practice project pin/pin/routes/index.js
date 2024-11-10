var express = require('express');
var router = express.Router();

// import models
const userModel = require("./users");
const bespokeModel = require("./BespokeEvent");
const groupOrderModel = require("./groupOrder");
const donateModel = require("./donate");
const Cart = require("./addcard");
const Afternoon = require("./Afternoon");
const Eveningproduct = require("./eveningProduct");

// product list
const Products = require("./product");


// order product model
const ProductOrders = require("./ProductOrders")


// import pass genrater
const passport = require('passport');
const localStrategy = require("passport-local");

// razorpay
const Razorpay = require('razorpay');

const axios = require("axios");
const { cpSync, copyFileSync } = require('fs');

require('dotenv').config(); // Load environment variables

passport.use(new localStrategy(userModel.authenticate()));






/* GET home page. */
router.get('/', async function(req, res, next) {
  
  let productList = await Products.find({});
  // console.log(productList)
  res.render('index',{productList});
});



// menu page
router.get('/menu', function(req, res, next) {
  res.render('menu');
});


// catering page router
router.get('/catering', function(req, res, next) {
  res.render('catering');
});


// catering morning product router
router.get('/morningProduct', function(req, res, next) {
  res.render('morningProduct');
});

router.get('/lunch', function(req, res, next) {
  res.render('lunch');
});



// router.get("/Afternoon", async function(req, res, next){
//   let AfternoonProduct = await Afternoon.find();
//   res.render("Afternoon",{AfternoonProduct, query:""})
// });

// router.get("/Afternoon", async function(req, res, next){
//   res.render("Afternoon",{AfternoonProduct:[], query:""})
// });

// // catering product Search router
// router.post('/Afternoon/search', async (req, res) => {
//   const query = req.body.query.toLowerCase();

//   const findProduct = await Afternoon.find({
//     $or:[
//       {name: {$regex: query, $options: "i"}},
//       {qty: {$regex: query, $options: "i"}}
//     ]
//   })

//   // Render the index.ejs file with the filtered products
//   res.render('Afternoon', { AfternoonProduct: findProduct, query });

// });




// facth catering apternoon product data from mongodb
router.get("/Afternoon", async function(req, res) {
  let AfternoonProduct = await Afternoon.find({});
  res.render("Afternoon" ,{AfternoonProduct})
})


// API route for live search
router.get('/Afternoon/search', async (req, res) => {
  const query = req.query.q;
  try {

    let  afternoonProducts;

    if(query){
       // Fetch products from MongoDB matching the search query
       afternoonProducts = await Afternoon.find({
      name: { $regex: query, $options: 'i' }, // 'i' for case-insensitive search
    });

    }else{
      afternoonProducts = await Afternoon.find({});
    }
  
    // Return the search results as JSON
    res.json(afternoonProducts);
    // console.log("eveningproducts",eveningproducts)

    // res.render("eveningProduct" ,{eveningproducts})

  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




// facth catering evening product data from mongodb
router.get("/evining", async function(req, res) {
  let eveningproducts = await Eveningproduct.find({});
  res.render("eveningProduct" ,{eveningproducts})
})


// API route for live search
router.get('/evining/search', async (req, res) => {
  const query = req.query.q;
  try {

    let  eveningproducts;

    if(query){
       // Fetch products from MongoDB matching the search query
    eveningproducts = await Eveningproduct.find({
      name: { $regex: query, $options: 'i' }, // 'i' for case-insensitive search
    });

    }else{
      eveningproducts = await Eveningproduct.find({});
    }
  
    // Return the search results as JSON
    res.json(eveningproducts);
    // console.log("eveningproducts",eveningproducts)

    // res.render("eveningProduct" ,{eveningproducts})

  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





// stories page router
router.get('/stories', function(req, res, next) {
  res.render('stories');
});


// about page router
router.get('/about', function(req, res, next) {
  res.render('about');
});


// contact page router
router.get('/contact', function(req, res, next) {
  res.render('contact');
});




// donation payment roter
router.get('/donate', function(req, res, next) {
  res.render('donate');
});

router.get('/donate2' ,isLoggedIn,  async function(req, res, next) {
  const user = await userModel
  .findOne({username:req.session.passport.user})
  .populate("donate")
  res.render('donate');
});

// donation amout sumbit roter post
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


// bespokeEvent page 
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




// get group order catring page 
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





// product functionlity setup
// shop product list router
router.get('/shop', async function(req, res, next) {
  let productList = await Products.find({});
  // console.log(productList)
  res.render('shop',{productList});
});


// product page 
router.get('/product/:_id',async function(req, res, next) {
  let _id = req.params;
  let getProduct = await Products.findById(_id)
  // console.log("getProduct id",getProduct._id)
  res.render('product',{getProduct});
});



// increate quenty and decrese quentity functionlity
router.post('/update-quantity/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;
  const user = await userModel.findOne({ username: req.session.passport.user });

  try {
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




// Route to display products and the current user's cart
router.get('/add-to-cart',isLoggedIn, async (req, res) => {
  const user = await userModel.findOne({username:req.session.passport.user});
  const userId = user._id; // Get the current logged-in user's ID

  try {
    const products = await Products.find(); // Get all products
    const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart
    // console.log("cardsss",cart)
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
    const products = await Products.find(); // Get all products
    const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart
    // console.log("cardsss",cart)
    res.render('checkout', { products, cart,user});
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving products and cart');
  }
});



// updatedAddress user
router.post("/add-to-cart2", isLoggedIn,async function (req, res, next) {
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







// Razorpay instance payment intergration
const razorpay = new Razorpay({
  key_id: process.env.YOUR_RAZORPAY_KEY_ID ,// Replace with your key_id
  key_secret: process.env.YOUR_RAZORPAY_KEY_SECRET  // Replace with your key_secret
});


// Route to render payment page
router.get('/payment',isLoggedIn ,async (req, res) => {

  const productId = req.params.productId;
   const user = await userModel.findOne({username:req.session.passport.user});
   const userId = user._id; // Get the current logged-in user's ID


   const products = await Products.find(); // Get all products
    const cart = await Cart.findOne({ userId }).populate('products.productId'); // Get the current user's cart

    console.log("pyament card" , cart)

  // const cart = req.session.cart; // Assuming you store the cart in session
  let totalAmount = 0;

  if (cart && cart.products.length > 0) {
      totalAmount = cart.products.reduce((total, cartItem) => {
          return total + (cartItem.quantity * cartItem.productId.pPrice);
      }, 0);
  }



  let productDetails = cart.products.map(item => ({
    productName: item.productId.producttitle,
    pImage: item.productId.pImage,
    price: item.productId.pPrice,
    quantity: item.quantity
  }));


  res.render('razorpayPayment', { key: razorpay.key_id ,cart,totalAmount,user,productDetails});
});




// Route to create an order
router.post('/create/order',isLoggedIn, async (req, res) => {
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
      // console.log("create oder" ,order)
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



router.get("/OwnOrder",isLoggedIn ,async function(req,res){
  try {
    const user = await userModel.findOne({username:req.session.passport.user});
    const userId = user._id; // Get the current logged-in user's ID
  
  
    let orderList = await ProductOrders.find({userId:userId});
  
    if(!orderList){
      console.log("orderList not found")
    }

    res.render("ownOrderList",{orders: orderList })
  } catch (error) {
    console.log(error.message)
    
  }
})



router.get("/OwnOrder/:productId",isLoggedIn ,async function(req,res){
  try {
    const {productId} = req.params;
    const user = await userModel.findOne({username:req.session.passport.user});
    const userId = user._id; // Get the current logged-in user's ID
  
  
    let getproduct = await ProductOrders.findById(productId);
  
    if(!getproduct){
      console.log("orderList not found")
    }



    res.render("orderConfirmation",{getproduct })
  } catch (error) {
    console.log(error.message)
    
  }
})

// Route for verifying payment and saving order to the database
router.post('/verify',isLoggedIn, async (req, res) => {
  const crypto = require("crypto");
  const shasum = crypto.createHmac('sha256', razorpay.key_secret);
  shasum.update(req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id);
  const digest = shasum.digest('hex');

  // console.log('Received payment verification request:', req.body); // Log the entire request

  const user = await userModel.findOne({username:req.session.passport.user});
  const userId = user._id; // Get the current logged-in user's ID

  if (digest === req.body.razorpay_signature) {
    // Payment is successful, store the order in the database
    // console.log('Payment notes:', req.body.notes);  // Log the notes
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

      console.log("save oredr ",newOrder._id)


      // Respond to client with success
      res.json({ status: "success", orderId: newOrder._id });
      // res.redirect(`/OwnOrder/${newOrder._id}`)
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({ status: "failed", message: "Error saving order to the database." });
    }
  } else {
    // Payment verification failed
    res.json({ status: "failed" });
  }
});



// user register page
router.get('/log-register', function(req, res, next) {
  res.render('loregiter');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

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


// user isAuthenticated 
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  req.flash("error", "Please login first.");
  res.redirect("/log-register");
}




module.exports = router;

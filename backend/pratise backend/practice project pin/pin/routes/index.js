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



router.get('/checkout', function(req, res, next) {
  res.render('checkout');
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




// // Route to handle quantity increment and decrement
router.post('/update-quantity/:id', isLoggedIn,async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;

  try {
    // Find the product by ID
    const product = await AddtoProduct2.findById(id);

    if (action === 'increase') {
      product.quantity += 1;
    } else if (action === 'decrease' && product.quantity > 1) {
      product.quantity -= 1;
    }

    // Save the updated product
    await product.save();

    res.redirect(`/product/${id}`)

    // // / Check the referrer to redirect accordingly
    // const referrer = req.get('Referrer');

    // if (referrer.includes('/product')) {
    //   // If the referrer URL includes '/product', redirect to the product page
    //   res.redirect(`/product/${id}`);
    // } else if (referrer.includes('/add-to-cart')) {
    //   // If the referrer URL includes '/add-to-cart', redirect to the cart page
    //   res.redirect(`/add-to-cart/${id}`);
    // } else {
    //   // Default redirection to cart if referrer doesn't match
    //   res.redirect('/cart');
    // }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating product quantity');
  }
});



// Route to update product quantity
router.post('/update-quantity2/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;
  const user = await userModel.findOne({username:req.session.passport.user});

  try {
    // Find the product by ID (modify this based on where your product is stored)
    let productInCart = await Cart.findOne({ userId: user._id, "products.productId": id });

    if (!productInCart) {
      return res.status(404).send('Product not found in cart');
    }

    const productIndex = productInCart.products.findIndex(p => p.productId.toString() === id);

    if (action === 'increase') {
      productInCart.products[productIndex].quantity += 1;
    } else if (action === 'decrease' && productInCart.products[productIndex].quantity > 1) {
      productInCart.products[productIndex].quantity -= 1;
    }

    // Save the updated cart
    await productInCart.save();



    res.redirect(`/add-to-cart/${id}`);

    // Redirect back to the product or cart page based on the referrer
    // Check the referrer to redirect accordingly
    // const referrer = req.get('Referrer');

    // if (referrer.includes('/product')) {
    //   // If the referrer URL includes '/product', redirect to the product page
    //   res.redirect(`/product/${id}`);
    // } else if (referrer.includes('/add-to-cart')) {
    //   // If the referrer URL includes '/add-to-cart', redirect to the cart page
    //   res.redirect(`/add-to-cart/${id}`);
    // } else {
    //   // Default redirection to cart if referrer doesn't match
    //   res.redirect('/cart');
    // }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating product quantity');
  }
});




router.get('/card', function(req, res, next) {
  res.render('card');
});

// router.get('/add-to-card', isLoggedIn, async function(req, res, next) {
//   const user = await userModel.findOne({username:req.session.passport.user});
//   res.render('addtocard');
// });


// Route to add a product to the cart
router.post('/add-to-cart/:productId',isLoggedIn, async (req, res) => {
  const productId = req.params.productId;
  const user = await userModel.findOne({username:req.session.passport.user});
  // const userId = req.session.user._id; // Get the current logged-in user ID
  const userId = user._id

  console.log("userId",user._id)
  try {
    let cart = await Cart.findOne({ userId });

    // If the cart does not exist for the current user, create a new one
    if (!cart) {
      cart = new Cart({
        userId,
        products: [{ productId, quantity: 1 }],
      });
    } else {
      // If the cart exists, check if the product is already in the cart
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

      if (productIndex > -1) {
        // Product exists in the cart, increment the quantity
        cart.products[productIndex].quantity += 1;
      } else {
        // Product does not exist in the cart, add a new one
        cart.products.push({ productId, quantity: 1 });
      }
    }

    // Save the cart
    await cart.save();
    res.redirect(`/add-to-cart/${productId}`);
    // res.render('addtocard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding product to cart');
  }
});


// Route to display products and the current user's cart
router.get('/add-to-cart/:productId',isLoggedIn, async (req, res) => {

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
  successRedirect: "/catering"
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

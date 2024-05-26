var express = require('express');
var router = express.Router();
const userModel = require("./users");
const bespokeModel = require("./BespokeEvent");
const groupOrderModel = require("./groupOrder");
const donateModel = require("./donate");
const addcardModel = require("./addcord");
const passport = require('passport');
const localStrategy = require("passport-local");
const Afternoon = require("./Afternoon");
const AddtoProduct2 = require(".//../routes/product")





passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/menu', function(req, res, next) {
  res.render('menu');
});

router.get('/card', function(req, res, next) {
  res.render('card');
});

router.get('/add-to-card', function(req, res, next) {
  // let users2 = await AddtoProduct2.find({});
  // var data1 = {producttitle:"CHANGE THE COURSE COOK KIT",qty:1,price:"$96",pimags:"https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=2,0,4495,2999&w=640&h=427&auto=format"};
  res.render('addtocard');
  // res.send(users2)
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




router.get('/shop', function(req, res, next) {
  res.render('shop');
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


router.get('/product',async function(req, res, next) {
  res.render('product');
  // res.send(pdata)
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

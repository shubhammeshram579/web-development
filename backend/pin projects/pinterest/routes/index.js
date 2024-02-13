var express = require('express');
var router = express.Router();
// import libries and pages 
const userModel = require("./users");
const postModel = require("./posts");
const passport = require('passport');
const localStrategy = require("passport-local");
const upload = require("./multer");

passport.use(new localStrategy(userModel.authenticate()));




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{nav: false});
});

// get register  router page
router.get('/register', function(req, res, next) {
  res.render('register',{nav: false});
});

// router.get('/login', function(req, res, next) {
//   res.render('login');
// });


// get create profile page router
router.get('/profile' ,isLoggedIn,  async function(req, res, next) {
  const user = await userModel
  .findOne({username:req.session.passport.user})
  .populate("posts")
  res.render('profile' , {user,nav: true});
});

// get create add for post form creation router
router.get('/add', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({username:req.session.passport.user});
  res.render("add" ,{user,nav: true});
});


// get create post router for posted file store in multer folder 
router.post('/createpost', upload.single("postimage"), isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({username:req.session.passport.user});
  const post = await postModel.create({
    user: user._id,
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile")
});

// get create rouster for show all posts in one page
router.get('/showpost' ,isLoggedIn,  async function(req, res, next) {
  const user = await userModel
  .findOne({username:req.session.passport.user})
  .populate("posts")
  res.render('showpost' , {user,nav: true});
});

// get create postdetails router
// router.get('/postdetails' ,isLoggedIn,  async function(req, res, next) {
//   const user = await userModel
//   .findOne({username:req.session.passport.user})
//   .populate("posts")
//   res.render('postdetails' , {user,nav: true});
// });


// get crete feed router page
router.get('/feed' ,isLoggedIn,  async function(req, res, next) {
  const user = await userModel.findOne({username:req.session.passport.user})
  const posts = await postModel.find()
  .populate("user")
  res.render("feed" , {user,posts,nav:true});
});


router.get('/postdetails' ,isLoggedIn,  async function(req, res, next) {
  const posts = await postModel.find()
  res.render("postdetails" , {posts,nav:true});
});



// get create fileupload router 
router.post('/fileupload' ,isLoggedIn, upload.single("image"), async function(req, res, next) {
  // find user data and set up image store 
 const user = await userModel.findOne({username:req.session.passport.user});
//  set colum image save
 user.profileImage = req.file.filename;
 await user.save();
 res.redirect("profile");


});

// second regiter router for databses post in mongodb databses set
router.post('/register', function(req, res, next) {
  // create user data set up colums 
  const userdata = new userModel({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    contact: req.body.contact,
  })
  // set up possport  promises fuction for password is currect then user is login other reject
  userModel.register(userdata,req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res,function(){
      res.redirect("/profile")
    })
  });

});

// get create loging router page
router.post('/login' , passport.authenticate("local",{
  failureRedirect: "/",
  successRedirect: "/profile"
}));



// get create logout router page and got the passport websit cory the lated code 
router.get("/logout",function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// set function for passport protected purpuse
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
};




module.exports = router;

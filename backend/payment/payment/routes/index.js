var express = require('express');
var router = express.Router();
const Product = require('../models/Product');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  console.log(products)
  res.render('index', { products });
});

router.get("/createProduct", (req, res) => {
  res.render("CreatePost")
})


router.post("/createPost", async (req,res) =>{
  const {name,price,description} = req.body;

  const product = await Product.create({
    name: name,
    price: price,
    description: description,
  })

  await product.save()



  if(!product){
    console.log("proudct not created")
  }

  res.status(200).json(200, {product} , "succees")

})

module.exports = router;

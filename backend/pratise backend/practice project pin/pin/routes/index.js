var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/menu', function(req, res, next) {
  res.render('menu');
});

router.get('/card', function(req, res, next) {
  res.render('card');
});

router.get('/shop', function(req, res, next) {
  res.render('shop');
});


router.get('/catering', function(req, res, next) {
  res.render('catering');
});

module.exports = router;

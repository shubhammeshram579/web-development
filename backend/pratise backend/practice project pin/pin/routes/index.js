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

router.get('/donate', function(req, res, next) {
  res.render('donate');
});


router.get('/bespoke', function(req, res, next) {
  res.render('bespoke');
});

router.get('/log-register', function(req, res, next) {
  res.render('loregiter');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/group-order', function(req, res, next) {
  res.render('groupOrder');
});

module.exports = router;

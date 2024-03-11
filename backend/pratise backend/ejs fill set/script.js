const express = require('express')
const app = express()

app.set("view engine","ejs");

app.use(express.static('./public'));


// home page
app.get('/', function (req, res) {
  res.render("index")     //set ejs file and remove file name index.ejs to index
})


// contact page
app.get('/contact', function (req, res) {
  res.render("contact" , {name: "shubham Meshram"})     
})

app.listen(3000)
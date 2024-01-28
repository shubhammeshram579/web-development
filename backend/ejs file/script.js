const express = require('express')
const app = express()

// used ejs line code
app.set("view engine","ejs");

// static file setup path
app.use(express.static('public'));



// 1 router 
app.get('/', function (req, res) {
  res.render("index")
})

// 2 router
app.get('/contact', function (req, res) {
    res.render("contact")
  })

app.listen(3000)



// run brower 
// localhost:3000
// localhost:3000/contact
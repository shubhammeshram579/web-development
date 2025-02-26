import express from "express"

const app = express()
const port = 3000
app.use(express.json())




// app.get("/",  (req, res) =>{
//     res.status(200).send("hello shubham")
// })


// app.get("/ice-tea",  (req, res) =>{
//     res.send("hello ice tea restorent")
// })


// app.get("/youtube",  (req, res) =>{
//     res.send("hello youtube viewvers")
// })


let teaData = []
let nextId = 1



// create  tea data
app.post("/teas", (req, res) => {

    // console.log("req.body",req.body)

    const {name, price} = req.body
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)
    res.status(200).send(newTea)


    // console.log("teadata" ,teaData)
    

})

// get tea data
app.get("/teas", (req, res) => {
    res.status(200).send(teaData)

    // console.log(teaData)

})

// get data by id
// http://localhost:3000/teas/:id and values id number
// http://localhost:3000/teas/1

app.get("/teas/:id", (req, res) => {
    console.log("req.params",req.params)

    console.log("req.params.id",req.params.id)


   const tea =  teaData.find(t => t.id === parseInt(req.params.id))
   console.log(tea)

   if(!tea){
    return res.status(404).send("Tea not found")
   }

   res.status(200).send(tea)

})


// update tea data
app.put("/teas/:id", (req, res) => {
    // console.log(req.query)
    const tea =  teaData.find(t => t.id === parseInt(req.params.id))
    console.log(tea)
 
    if(!tea){
     return res.status(404).send("Tea not found")
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
 
 })

//  delete tea data by id

app.delete("/teas/:id", (req, res) => {
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id))

    if(index === -1){
        return res.status(404).send("tea not found")
    }

    teaData.splice(index, 1)
    return res.status(200).send("deleted")
})






app.listen(port, () =>{
    console.log(`server is running ${port}..`)
})
import express from "express";


const app = express()


app.get("/", (req, res) =>{
    res.send("home page")
})

// dummy data for api creation
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1, 
            title: " a joke",
            content: "this is a joke"
        },
        {
            id: 2, 
            title: " a joke 2",
            content: "this is a joke 2"
        },
        {
            id: 3, 
            title: " a joke 3",
            content: "this is a joke 3"
        },
        {
            id: 4, 
            title: " a joke 4",
            content: "this is a joke 4"
        },
    ];
    res.send(jokes)
})

app.get("/api/about", (req, res) =>{
    const profilename = [
        {
            name: "shubham",
            age: "26"

        },
        {
            name: "labham", 
            age: 20},
        {
            name: "pallavi", 
            age: 21
        },
    ];
    res.send(profilename)

})


const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`server at http://localhost:${port}`)

})
var arr = [
    {name: "petals of rose",image:"https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Animal of town ",image:"https://images.pexels.com/photos/19964831/pexels-photo-19964831/free-photo-of-blue-heron.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
    {name:"the crown of city",image:"https://images.unsplash.com/photo-1515375380578-a0587184cedd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D"},
    {name:"fruits",image:"https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"orage peeled",image:"https://images.unsplash.com/photo-1524721696987-b9527df9e512?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D"},
    {name:"web design",image:"https://images.unsplash.com/photo-1519606247872-0440aae9b827?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"},
    {name:"aeb design",image:"https://images.pexels.com/photos/12680176/pexels-photo-12680176.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
]


// var clutter = ""

function showTheCard(){
    // image card reflect funtion
    var clutters = "";
    arr.forEach(function(val){
        clutters += `<div class="card">
        <img src="${val.image}" alt="">
        <h1>${val.name}</h1>
    </div>,
    <div class="card1">
        <img src="${val.image}" alt="">
        <h1>${val.name}</h1>
    </div>`

    })
    
    document.querySelector(".cantener").innerHTML = clutters;


    // serch bar feature
    function abcd(){
        var sbtn = document.querySelector("#search");
        var lightBlackDisplay = document.querySelector(".box");
        var searbar = document.querySelector(".page2 .card");

        sbtn.addEventListener("focus",function(){
            lightBlackDisplay.style.display = "block"

        })

        sbtn.addEventListener("blur",function(){
            lightBlackDisplay.style.display = "none"
            searbar.style.display = "none"

        })


        
        sbtn.addEventListener("input",function(){
            const filterdata = arr.filter(val => val.name.toLowerCase().startsWith(sbtn.value));
            var clutter = "";
            filterdata.forEach(function(val){
                clutter += `<div class="sertext">
                <h3>></h3>
                <h3>${val.name}</h3>
            </div>`
            })

            searbar.style.display = "block";
            searbar.innerHTML = clutter;

        });

    }


    abcd()

    
};


showTheCard()






        




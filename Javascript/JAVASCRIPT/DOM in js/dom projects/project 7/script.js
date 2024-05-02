let arr = [
    {name:"Fox very gengers",price:"12,000",image:"https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww"},
    {name:"tiger very gengers",price:"1,20,000",image:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fHww"},
    {name:"butterply parete",price:"2,000",image:"https://images.unsplash.com/photo-1475809913362-28a064062ccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"fise very veatiful",price:"42,000",image:"https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"},
 
]

// show all product
function showProduc(){
    let clutter = ""
    arr.forEach(function(val,index){
        clutter += `<div class="card">
        <div class="cards">
            <img src="${val.image}"
                alt="">
        </div>
        <h1>${val.name}<span><i data-index="${index}" class="add fa-solid fa-cart-shopping"></i></span></h1>
        <h1>&#8377 ${val.price}</h1>

    </div>`
    })
    document.querySelector(".main .canterner").innerHTML = clutter;
}

showProduc();



// specificate data selection click add btn then only click addcard not for contaner then also buils index method data-index
var card = [];

function addtocard(){
    document.querySelector(".main .canterner")
    .addEventListener("click",function(deatal){
        if(deatal.target.classList.contains("add")){
            card.push(arr[deatal.target.dataset.index])
            // console.log(card)
        }

    }

)
}

addtocard();


// show addto card products
function showcard(){
    document.querySelector("nav .fa-cart-shopping").addEventListener("click",function(){
        document.querySelector(".main .addcard").style.opacity = 1;

        let clutter = "";
        card.forEach(function(val){
            clutter += `<img src="${val.image}" alt="">
            <h1>${val.name}</h1>
            <h1>${val.price}</h1>`;

        })
        document.querySelector(".addcard").innerHTML = clutter;
    })
}

showcard();
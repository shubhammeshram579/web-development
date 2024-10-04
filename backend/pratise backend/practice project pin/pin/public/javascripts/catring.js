// let orderpage = document.querySelector(".hidden");
// let btn = document.querySelector(".navbar #group");

// let a = 0
// btn.addEventListener("click",function(){
//     if (a === 0){
//         orderpage.style.opacity = 1;
//         orderpage.style.backgroundColor = "red";
//         a = 1 

//     }else{
//         orderpage.style.opacity = 0;
//         a = 0
//     }
    
// });


let sebtn1 = document.querySelector(".navbar .part2 .fa-magnifying-glass");
let sebtn2 = document.querySelector("#searbtn2");
let searbar = document.querySelector(".searbar");
let navbarbtn = document.querySelector(".navbar");




sebtn1.addEventListener("click",function(){
    searbar.style.display = "block";
    navbarbtn.style.display = "none";
    searbar.style.display = "flex";
    searbar.style.alignItems= "center";
    searbar.style.justifyContent = "center";

})


sebtn2.addEventListener("click",function(){
    searbar.style.display = "none"
    navbarbtn.style.display = "block"
    navbarbtn.style.display = "flex";
    navbarbtn.style.alignItems= "center";
    navbarbtn.style.justifyContent = "space-around";

})




// products
var arr = [
    {name:"YOGHURT & CHIA POTS SMALL",qty:"12 pots x 150ml Spoons provided",price:"$84.00 per box (12 prices)",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/e5b6023b7e444c769a09f6adf37a3416_360w.jpg"},
    {name:"YOGHURT & CHIA POTS LARGE",qty:"24 pots x 150ml Spoons provided",price:"$168.00 per box (24 prices)",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/f71eadb95ea24aba82e1d33d5a5fa374_360w.jpg"},
    {name:"SEASONAL FRUIT PLATTER",qty:"A selection of cut, seasonal fruit",price:"From $60.00 per platter",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/0e12a03eb8c845048d70048ad85595bc_360w.jpg"},
    {name:"SEASONAL WHOLE FRUIT BOX",qty:"Whole pieces of local seasonal fruit",price:"From $30.00 per box",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/b4e67d8f41fc447cb84c273a1e33d58f_360w.jpg"},
    {name:"MINI PASTRY BOX REGULAR",qty:"By The Bread & Butter Project",price:"$56.00 per box",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/f20629c8788b4c98984d1f81a6ef78d6_360w.jpg"},
    {name:"SWEET TREATS",qty:"Enjoy the famous two Good dark",price:"from $58.00",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/ff2588d77e6945d4803dc2aefb04861d_360w.jpg"},
    {name:"WHOLESOME BAKED GOODS",qty:"Start the day right with delicious",price:"From $55.00",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/7654518427ef456aa4e2be536645f574_360w.jpg"},
]



// create cluster

function showproduct(){
    var clutters = ""
    arr.forEach(function(val){
        clutters += `<div class="cards">
        <div class="card">
            <h1>${val.name}</h1>
            <h3>${val.qty}</h3>
            <h1 style="font-size: 20px;">${val.price}</h1>


        </div>
        <div class="card2">
            <img src="${val.pimage}"
                alt="">

        </div>

    </div>`

    })

    document.querySelector(".product-page .card2").innerHTML = clutters;

    
}

showproduct();




// i thingh this funcinality for moring product page 
    
var srbtn =  document.querySelector(".searbar input");  

function serchProduct(){

    srbtn.addEventListener("input",function(){
        const filterdata = arr.filter((val) => val.name.toLowerCase().startsWith(srbtn.value));
        var clutter = "";
        if (filterdata.length === 0) {
            clutter = "<p>No items found.</p>";
        } else {
            filterdata.forEach(function(val) {
                clutter += `<div class="cards">
                    <div class="card">
                    <h1>${val.name}</h1>
                    <h3>${val.qty}</h3>
                    <h1 style="font-size: 20px;">${val.price}</h1>
                    </div>
                    <div class="card2">
                        <img src="${val.pimage}" alt="">
                    </div> 
                    </div>`;
            });
        }            
       
        document.querySelector(".product-page .card2").innerHTML = clutter;
    })

    
}

serchProduct();





// srbtn.addEventListener("input", serchProduct);

// srbtn.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         serchProduct();
//     }
// });






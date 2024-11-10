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


// const resultsContainer = document.getElementById('results');
const searchButton = document.querySelector('.searbar #searchButton');


// DOM elements
const searchInput = document.querySelector('.searbar #search');



// Event listener for input field for evening page
searchInput.addEventListener('input', function () {
    const query = searchInput.value;
  
    console.log("query", query)
  
    let apiURL = query.length > 0 ? `/evining/search?q=${query}` : '/evining/search';
  
    // Fetch results from the server
    fetch(apiURL)
      .then(response => response.json())
      .then(eveningproducts => {
        // Clear previous results
        let clutter = "";
        if (eveningproducts.length === 0) {
          clutter = "<p>No items found.</p>";
        } else {
          eveningproducts.forEach(function (val) {
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
  
        document.querySelector(".eveningProduct .card2").innerHTML = clutter;
  
        // // Reset the input field after the search is completed
        // searchInput.value = '';
        
      })
      .catch(error => console.error('Error fetching products:', error));
  });








// Event listener for input field for afternoon page
searchInput.addEventListener('input', function () {
    const query = searchInput.value;
  
    console.log("query", query)
  
    let apiURL = query.length > 0 ? `/Afternoon/search?q=${query}` : '/Afternoon/search';
  
    // Fetch results from the server
    fetch(apiURL)
      .then(response => response.json())
      .then(eveningproducts => {
        // Clear previous results
        let clutter = "";
        if (eveningproducts.length === 0) {
          clutter = "<p>No items found.</p>";
        } else {
          eveningproducts.forEach(function (val) {
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
  
        document.querySelector(".afternoon-product .card2").innerHTML = clutter;
  
        // // Reset the input field after the search is completed
        // searchInput.value = '';
        
      })
      .catch(error => console.error('Error fetching products:', error));
  });



  // remove input search
searchButton.addEventListener("click",function(){
    searchInput.value = '';
})

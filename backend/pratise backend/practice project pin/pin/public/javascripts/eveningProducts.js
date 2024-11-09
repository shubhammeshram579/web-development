

// this is code for evening page funcnality

// DOM elements
const searchInput = document.getElementById('search');


searchInput.style.backgroundColor = "red"
// const resultsContainer = document.getElementById('results');
const searchButton = document.getElementById('searchButton');

searchButton.style.backgroundColor = "green"

// Event listener for input field
searchInput.addEventListener('input', function () {
  const query = searchInput.value;

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

      document.querySelector(".product-page .card2").innerHTML = clutter;

      // // Reset the input field after the search is completed
      // searchInput.value = '';
      
    })
    .catch(error => console.error('Error fetching products:', error));
});


// remove input search
searchButton.addEventListener("click",function(){
  searchInput.value = '';
})





// this well but now used 
// const searchInput = document.getElementById('search');

// searchInput.addEventListener('input', function () {
//   const query = searchInput.value;

//   let apiURL = query.length > 0 ? `/evining/search?q=${query}` : '/evining/search';

//   fetch(apiURL, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'text/html',  // Expect HTML content
//     }
//   })
//   .then(response => response.text())  // Expect the response as text (HTML)
//   .then(html => {
//     // Replace the current HTML with the fetched HTML
//     document.querySelector('.product-page').innerHTML = html;
//   })
//   .catch(error => console.error('Error fetching products:', error));
// });








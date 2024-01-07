document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const mouseArea = document.getElementById("mouseArea");
    const textElement = document.getElementById("textElement");
  
    // Add mouseenter event listener
    mouseArea.addEventListener("mouseenter", function() {
      // Show the text element
      textElement.style.display = "block";
    });
  
    // Add mouseleave event listener
    mouseArea.addEventListener("mouseleave", function() {
      // Hide the text element
      textElement.style.display = "none";
    });
  });
  
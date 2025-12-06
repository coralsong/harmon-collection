document.addEventListener('DOMContentLoaded', function() {

  let randomBtn = document.getElementById("random-btn");
  let allImgs = document.querySelectorAll("img");

  function generateRandomImage() {
    // Hide all images
    allImgs.forEach(img => {
      img.style.display = "none";
    });

    // Pick a random image
    let randomIndex = Math.floor(Math.random() * allImgs.length);

    // Show the chosen image
    allImgs[randomIndex].style.display = "block";
  }

  // Show a random one when page loads
  generateRandomImage();

  // Show new one whenever button is clicked
  randomBtn.addEventListener('click', generateRandomImage);
});

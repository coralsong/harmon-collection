document.addEventListener('DOMContentLoaded', function() {

  let randomBtn = document.getElementById("random-button");
  let allImgs = document.querySelectorAll("img");

  function generateRandomImage() {

    // Hide all images completely
    allImgs.forEach(img => {
      img.style.display = "none";
    });

    // Pick a random one
    let randomIndex = Math.floor(Math.random() * allImgs.length);
    console.log(randomIndex);

    // Show the selected image
    allImgs[randomIndex].style.display = "block";
  }

  // Show a random image at page load
  generateRandomImage();

  // Show a new random image on button click
  randomBtn.addEventListener('click', generateRandomImage);
});

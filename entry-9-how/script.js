// Select all elements that you might want to randomly display
let allImgs = document.querySelectorAll("div");

// Get a random index based on the element length 
let randomIndex = Math.floor(Math.random() * allImgs.length)
console.log(randomIndex)

// Set element with random index to visible 
allImgs[randomIndex].style.visibility = "visible";

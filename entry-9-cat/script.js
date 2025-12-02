const imgEl = document.querySelector("#random-image");
const btn = document.querySelector("#random-btn");

console.log(btn);

const scrArray = ['cat1.png, cat2.png, cat3.png, cat4.png, cat5.png'];

let randomImage = () => {
  const randomIndex = Math.floor(Math.random() * scrArray.length);
  imgEl.src = scrArray[randomIndex];
  console.log(imgEl)

}


randomImage();

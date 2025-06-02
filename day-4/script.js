
const card = document.getElementById("cardCount");
const replaceCount = document.getElementById("count");
const changeImageBtn = document.getElementById("changeImageBtn");
const image = document.querySelector(".image-container img");

const images = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
  "assets/4.jpg",
  "assets/5.jpg",
  "assets/6.jpg",
];

let count = 0;
let currentImage = 0;
changeImageBtn.addEventListener("click", (event) => {
  event.stopPropagation(); 
  currentImage = (currentImage + 1) % images.length;
  image.src = images[currentImage];
});


card.addEventListener("click", () => {
  count++;
  replaceCount.innerHTML = count;
});

const imagesContainer = document.querySelector(".images");
const logo = document.querySelector(".logo");
let scrollAmount = 0;
const scrollStep = 270;

prevBtn.addEventListener("click", () => {
  imagesContainer.scrollBy(-350, 0);
});
nextBtn.addEventListener("click", () => {
  imagesContainer.scrollBy(350, 0);
});

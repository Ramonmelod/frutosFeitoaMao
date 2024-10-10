const imagesContainer = document.querySelector(".images");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const prevBtn = document.getElementById("prevBtn"); //the script works without the declaration of prevBtn and nextBtn, for it uses getElementById
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;
const scrollStep = 270;

prevBtn.addEventListener("click", () => {
  imagesContainer.scrollBy(-321, 0);
});
nextBtn.addEventListener("click", () => {
  imagesContainer.scrollBy(321, 0);
});

//toggling the menu-icon
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

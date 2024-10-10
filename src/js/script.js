const imagesContainer = document.querySelector(".images");
const logo = document.querySelector(".logo");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

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

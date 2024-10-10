const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

//toggling the menu-icon
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

const imagesContainer = document.querySelector(".images");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const prevBtn = document.getElementById("prevBtn"); //the script works without the declaration of prevBtn and nextBtn, for it uses getElementById
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;
const scrollStep = 270;

prevBtn.disabled = false; //declare the prevBtn.disabled for use in disabling feature
nextBtn.disabled = false;

prevBtn.addEventListener("click", () => {
  //left
  imagesContainer.scrollBy(-321, 0);
  prevBtn.disabled = true; //disable the prevBtn for avoiding fast double click to cause the picture scrolling to desalign
  nextBtn.disabled = true;
  setTimeout(() => {
    prevBtn.disabled = false; //reenable the prevBtn after 250ms
    nextBtn.disabled = false;
  }, 250);
});
nextBtn.addEventListener("click", () => {
  //right
  prevBtn.disabled = true;
  nextBtn.disabled = true; //disable the nextBtn for avoiding fast double click to cause the picture scrolling to desalign
  imagesContainer.scrollBy(321, 0);
  setTimeout(() => {
    prevBtn.disabled = false;
    nextBtn.disabled = false; //reenable the nextBtn after 250ms
  }, 250);
});

const products = [
  { name: "Camiseta Bordada", id: 1 },
  { name: "Toalha Bordada", id: 2 },
  { name: "Almofada Personalizada", id: 3 },
  // products here
];

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the default behavior of sending the forms

  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultContainer = document.getElementById("searchResults");
  resultContainer.innerHTML = ""; // Clean the previous results

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.textContent = product.name;
      resultContainer.appendChild(productElement);
    });
  } else {
    resultContainer.textContent = "Nenhum produto encontrado.";
  }
});

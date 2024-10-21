const imagesContainer = document.querySelector(".images");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const prevBtn = document.getElementById("prevBtn"); //the script works without the declaration of prevBtn and nextBtn, for it uses getElementById
const nextBtn = document.getElementById("nextBtn");
let data = null;

const queryJson = async () => {
  try {
    const response = await fetch("../productCards.json");
    if (!response.ok) {
      throw new Error("Erro ao carregar o arquivo JSON");
    }

    data = await response.json();

    //-----------------------------------------------------------------creating the div with apendChild--------------------------------------------------------------
    for (let i = 0; i < data.length; i++) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.id = data[i].id;
      //adding image
      const productImage = document.createElement("img");
      productImage.src = data[i].image_url;
      //creating product-info container
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
      //creating a tag p for use in product-info title
      const productTitle = document.createElement("p");
      productTitle.classList.add("title");
      productTitle.textContent = data[i].title;

      //creating a tag p for use in product-info a-partir-de
      const aPartirDe = document.createElement("p");
      aPartirDe.classList.add("title");
      aPartirDe.textContent = "A partir de";
      //creating a tag p for use in product-info price
      const productPrice = document.createElement("p");
      productPrice.classList.add("price");
      productPrice.textContent = data[i].price;

      //apending the children
      imagesContainer.appendChild(productCard); //here is added the new div to the images contatainer
      productCard.appendChild(productImage);
      productCard.appendChild(productInfo);
      productInfo.appendChild(productTitle);
      productInfo.appendChild(aPartirDe);
      productInfo.appendChild(productPrice);

      //--------------------------beggining of the search logic------------------------------------------------------------------------------------------------------

      document
        .getElementById("searchForm")
        .addEventListener("submit", function (e) {
          e.preventDefault(); // Prevents the default behavior of sending the forms

          const query = document
            .getElementById("searchInput")
            .value.toLowerCase();
          const resultContainer = document.getElementById("searchResults");
          resultContainer.innerHTML = ""; // Clean the previous results

          //-------------------------------------------------------------------------
          const filteredProducts = data.filter((product) =>
            product.title.toLowerCase().includes(query)
          );

          if (filteredProducts.length > 0) {
            filteredProducts.forEach((product) => {
              const productElement = document.createElement("div");
              productElement.textContent = product.title;
              resultContainer.appendChild(productElement);
            });
          } else {
            resultContainer.textContent = "Nenhum produto encontrado.";
          }
        });
    }
  } catch (error) {
    console.error("Erro:", error);
  }
};

queryJson(); //calls the function

//-------begining of the scroll logic

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

//-------end of the scroll logic

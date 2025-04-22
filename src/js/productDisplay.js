import { query } from "./query.js";

const imagesContainer = document.querySelector(".images");
let displayedProducts = [];

export const productDisplay = async (i) => {
  try {
    const data = await query("./productCards.json");

    //-----------creating the div with apendChild-----------------------

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.id = data[i].id;

    const productLink = document.createElement("a");
    productLink.href = `../src/productDetails/index.html?productId=${i}&imageIndex=0`; //http://127.0.0.1:5500/src/productDetails/index.html?productId=0&imageNumber=2
    productLink.target = "_blank"; //opens a new tab

    //adding image
    const productImage = document.createElement("img");
    productImage.src = data[i].image_url[0];
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
    imagesContainer.appendChild(productLink); //here is added the new div to the images contatainer
    productLink.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productTitle);
    productInfo.appendChild(aPartirDe);
    productInfo.appendChild(productPrice);
    displayedProducts.push(productCard.id); // here the displayed elements id are pushed to the displayedProducts array
  } catch (error) {
    console.error("Erro:", error);
  }
};

export const removeProductDisplay = () => {
  displayedProducts.forEach((product) => {
    const productCard = document.getElementById(`${product}`);
    if (productCard) {
      productCard.remove();
      console.log(`Product with id ${product} removed`);
    } else {
      console.log(`Product with id ${product} not found`);
    }
  });
};

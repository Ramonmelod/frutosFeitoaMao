import { query } from "../../js/query.js";
export async function productDisplay() {
  try {
    let displayedProducts = [];
    const path = "../productCards.json";
    const data = await query(path);
    const productId = 0;

    const productDetailContainer = document.querySelector(".productDetail"); //select the div that will receive the created elements
    const productPictures = document.createElement("div"); // create the div that receives the thumbnail
    const productCard = document.createElement("div"); //create the div that receives the productImage element
    const productImage = document.createElement("img");
    const productTitle = document.createElement("p");
    const aPartirDe = document.createElement("p");
    const productPrice = document.createElement("p");
    const productInfo = document.createElement("div");
    const productDescription = document.createElement("div");
    const buyButton = document.createElement("button");
    const productDescriptionText = document.createElement("p");

    productCard.classList.add("product-card");
    productPictures.classList.add("product-pictures");
    productInfo.classList.add("product-info");

    productImage.src = data[0].image_url;

    //Insert elements in the productInfo div
    productTitle.classList.add("title");
    productTitle.textContent = data[0].title;
    aPartirDe.classList.add("a-partir-de");
    aPartirDe.textContent = "A partir de";
    productPrice.classList.add("price");
    productPrice.textContent = data[1].price;

    productDescription.classList.add("product-description");
    productDescriptionText.textContent = data[0].description;

    // 👉 creating the button
    buyButton.textContent = "Solicitar Orçamento"; //button text
    buyButton.classList.add("btn", "btn-success", "rounded-pill", "py-2");
    buyButton.style.backgroundColor = "#a0c568";
    buyButton.style.borderColor = "#a0c568";
    buyButton.style.marginTop = "10px";

    // append children
    productDetailContainer.appendChild(productCard); //here is added the new div to the images contatainer
    productDetailContainer.appendChild(productPictures);
    for (let i = 0; i < 3; i++) {
      const thumbNail = document.createElement("img");
      thumbNail.src = data[i].image_url;
      thumbNail.classList.add("thumbnail-img");
      productPictures.appendChild(thumbNail);
    }
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productTitle);
    productInfo.appendChild(aPartirDe);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(buyButton);
    productCard.appendChild(productDescription);
    productDescription.appendChild(productDescriptionText);
  } catch (error) {
    console.log(error);
  }
}

/*import { query } from "../../js/productDisplay.js";

const productDetailContainer = document.querySelector(".productDetail");
let displayedProducts = [];

export const productDisplay = async (i) => {
  try {
    console.log("ramon");
    const data = await query();

    //-----------creating the div with apendChild-----------------------

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
    productDetailContainer.appendChild(productCard); //here is added the new div to the images contatainer
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
/*
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
*/

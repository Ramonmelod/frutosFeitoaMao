import { query } from "./query.js";

const imagesContainer = document.querySelector(".images");

export const productDisplay = async (i) => {
  try {
    const data = await query();

    //-----------------------------------------------------------------creating the div with apendChild--------------------------------------------------------------

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
    return productCard;
  } catch (error) {
    console.error("Erro:", error);
  }
};

export const removeProductDisplay = (productId) => {
  const productCard = document.getElementById(`${productId}`);
  if (productCard) {
    productCard.remove();
    console.log(`Product with id ${productId} removed`);
  } else {
    console.log(`Product with id ${productId} not found`);
  }
};

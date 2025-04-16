import { query } from "../../js/query.js";
export async function productDisplay(productId) {
  try {
    let displayedProducts = [];
    const path = "../productCards.json";
    const data = await query(path);

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

    productImage.src = data[productId].image_url;
    productTitle.textContent = data[productId].title;
    productPrice.textContent = data[productId].price;
    productDescriptionText.textContent = data[productId].description;

    //Insert elements in the productInfo div
    productTitle.classList.add("title");
    aPartirDe.classList.add("a-partir-de");
    aPartirDe.textContent = "A partir de";
    productPrice.classList.add("price");

    productDescription.classList.add("product-description");

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

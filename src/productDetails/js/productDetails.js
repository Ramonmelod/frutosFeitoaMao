import { query } from "../../js/query.js";
export async function productDisplay(productId, imageIndex) {
  try {
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

    const productLink = document.createElement("a");
    productLink.href = `https://res.cloudinary.com/dhayneykx/image/upload/v1729042398/frutosfeitoamao/fhoft1ppt2cr1vg6vleu.jpg`;
    productLink.target = "_blank"; //opens a new tab

    // 👉 creating the WhatsApp button link
    const whatsappLink = document.createElement("a");
    whatsappLink.href = `https://wa.me/5548991035724?text=Ol%C3%A1%2C+venho+atrav%C3%A9s+do+site+frutosfeitoamao.com.br+e+me+interessei+pelo+produto+${data[productId].title}`;
    whatsappLink.target = "_blank"; // opens in a new tab

    productCard.classList.add("product-card");
    productPictures.classList.add("product-pictures");
    productInfo.classList.add("product-info");

    productImage.src = data[productId].image_url[imageIndex];
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
    buyButton.style.backgroundColor = "#a3a882";
    buyButton.style.borderColor = "#a3a882";
    buyButton.style.marginTop = "10px";

    // appending the children
    productDetailContainer.appendChild(productLink); //here is added the new div to the images container
    productLink.appendChild(productCard);
    productDetailContainer.appendChild(productPictures);

    thumbNailsCreate();
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productTitle);
    productInfo.appendChild(aPartirDe);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(whatsappLink);
    whatsappLink.appendChild(buyButton);
    productCard.appendChild(productDescription);
    productDescription.appendChild(productDescriptionText);

    function thumbNailsCreate() {
      try {
        let productImageIndexes = [];
        for (let i = 0; i < data[productId].image_url.length; i++) {
          productImageIndexes.push(i); // push all the imageNumbers to the array. The image numbers is used to access the right image in the file productCards.json
        }

        const thumbnailImageIndexes = productImageIndexes.filter(
          (item) => item !== Number(imageIndex) // removes only the imageIndex of the image that will be showed in the main card
        );

        thumbnailImageIndexes.forEach((imageIndex) => {
          const productThumbNailLink = document.createElement("a");
          productThumbNailLink.href = `./index.html?productId=${productId}&imageIndex=${imageIndex}`; //http://127.0.0.1:5500/src/productDetails/index.html?productId=0&imageIndex=2
          const thumbNail = document.createElement("img");
          thumbNail.src = data[productId].image_url[imageIndex];
          thumbNail.classList.add("thumbnail-img");
          productPictures.appendChild(productThumbNailLink);
          productThumbNailLink.appendChild(thumbNail);
        });
      } catch (error) {
        console.log("in thumbNailCreate: " + error);
        throw error;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

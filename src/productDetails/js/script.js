import { productDisplay } from "../../js/productDetails.js";

const ProductsPath = "../productCards.json";
const whatsappLink =
  "https://wa.me/5548991035724?text=Ol%C3%A1%2C+venho+atrav%C3%A9s+do+site+frutosfeitoamao.com.br+e+me+interessei+pelo+produto";
const buyButtonText = "Solicitar Orçamento";

document.addEventListener("DOMContentLoaded", () => {
  try {
    //makes this scope waits until the DOM be totally loaded
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");
    const imageIndex = params.get("imageIndex");

    if (productId > 25) {
      /* const productDetailContainer = document.querySelector(".productDetail");
      const notFound = document.createElement("p");
      notFound.textContent = "Page not Found!";
      productDetailContainer.appendChild(notFound);
      productDetailContainer.style.Top = "50%";
      productDetailContainer.style.color = "#000";*/
      throw new Error("Page not Found");
    }
    productDisplay(
      true,
      ProductsPath,
      productId,
      imageIndex,
      whatsappLink,
      buyButtonText
    );
  } catch (error) {
    console.log(error);
  }
});

//http://127.0.0.1:5500/src/productDetails/index.html?productId=9

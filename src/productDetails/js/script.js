import { productDisplay } from "../../js/productDetails.js";

const ProductsPath = "../productCards.json";
const whatsappLink =
  "https://wa.me/5548991035724?text=Ol%C3%A1%2C+venho+atrav%C3%A9s+do+site+frutosfeitoamao.com.br+e+me+interessei+pelo+produto";
const buyButtonText = "Solicitar Orçamento";
const thumbNailLink = "./index.html?productId";

document.addEventListener("DOMContentLoaded", () => {
  try {
    //makes this scope waits until the DOM be totally loaded
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");
    const imageIndex = params.get("imageIndex");

    //NEED TO MAKE A PAGE NOT FOUND WHEN THE PRODUCT ID IS NOT IN THE PRODUCTSCARD.JSON
    productDisplay(
      true,
      ProductsPath,
      productId,
      imageIndex,
      whatsappLink,
      buyButtonText,
      thumbNailLink
    );
  } catch (error) {
    console.log(error);
  }
});

//http://127.0.0.1:5500/src/productDetails/index.html?productId=9

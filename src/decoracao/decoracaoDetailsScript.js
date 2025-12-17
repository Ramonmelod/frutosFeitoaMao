import { productDisplay } from "/js/productDetails.js";

const coursesPath = "/decorationProducts.json";
const buyPageLink =
  "https://wa.me/5548991035724?text=Ol%C3%A1%2C+venho+atrav%C3%A9s+do+site+frutosfeitoamao.com.br+e+me+interessei+pelo+produto"; //"/pagamentos/index.html"; //change for using the api
const buyButtonText = "Comprar";
const thumbNailLink = "./decoracaoDetails.html?productId";

document.addEventListener("DOMContentLoaded", () => {
  try {
    //makes this scope waits until the DOM be totally loaded
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");
    const imageIndex = params.get("imageIndex");

    //NEED TO MAKE A PAGE NOT FOUND WHEN THE PRODUCT ID IS NOT IN THE COURSESCARD.JSON
    productDisplay(
      false, // when the the true option is enabled the buyButton redirects to whatsapp
      coursesPath,
      productId,
      imageIndex,
      buyPageLink,
      buyButtonText,
      thumbNailLink
    );
  } catch (error) {
    console.log(error);
  }
});

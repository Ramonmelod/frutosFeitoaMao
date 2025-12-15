import { productDisplay } from "/js/productDetails.js";

const coursesPath = "/embroideryPatternsCards.json";
const buyPageLink = "/pagamentos/index.html";
const buyButtonText = "Comprar";

document.addEventListener("DOMContentLoaded", () => {
  try {
    //makes this scope waits until the DOM be totally loaded
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");
    const imageIndex = params.get("imageIndex");

    //NEED TO MAKE A PAGE NOT FOUND WHEN THE PRODUCT ID IS NOT IN THE COURSESCARD.JSON
    productDisplay(
      false,
      coursesPath,
      productId,
      imageIndex,
      buyPageLink,
      buyButtonText
    );
  } catch (error) {
    console.log(error);
  }
});

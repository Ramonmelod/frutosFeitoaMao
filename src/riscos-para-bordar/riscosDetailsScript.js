import { productDisplay } from "/js/productDetails.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");
const imageIndex = params.get("imageIndex");
const productSlug = params.get("productSlug");

const coursesPath = "/embroideryPatternsCards.json";
const buyPageLink = `/pagamentos/index.html?productSlug=${productSlug}`;
const buyButtonText = "Comprar";
const thumbNailLink = "./riscosDetails.html?productId";
const rootContainerClass = ".productDetail";

document.addEventListener("DOMContentLoaded", () => {
  try {
    //makes this scope waits until the DOM be totally loaded

    //NEED TO MAKE A PAGE NOT FOUND WHEN THE PRODUCT ID IS NOT IN THE COURSESCARD.JSON
    productDisplay(
      false, // when the the true option is enabled the buyPageLink goes to whatsapp
      rootContainerClass,
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

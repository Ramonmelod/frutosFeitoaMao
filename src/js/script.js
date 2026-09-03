import { productDisplay } from "/components/productShowCase/productShowCase.js";
import { scroll } from "/components/productShowCase/scroll.js";
import { query } from "/js/query.js";

const imagesContainer = document.querySelector(".images");
const prevBtn = document.getElementById("prevBtn"); //the scroll works without the declaration of prevBtn and nextBtn, for it uses getElementById
const nextBtn = document.getElementById("nextBtn");
scroll(prevBtn, nextBtn, imagesContainer);

const featuredProducts = [21, 0, 1, 4, 5, 6, 8, 10, 14, 15, 16, 22]; // here are the products that will be shown in the destaque showcase

(async () => {
  try {
    const data = await query("/productCards.json");
    featuredProducts.forEach((id) => productDisplay(id, data));
  } catch (error) {
    console.error("Erro ao carregar destaques:", error);
  }
})();

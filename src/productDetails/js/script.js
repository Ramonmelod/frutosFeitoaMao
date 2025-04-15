import { productDisplay } from "./productDetails.js";
productDisplay();

/*
import { queryDoc } from "./searchBar.js";
import { scroll } from "./scroll.js";

const imagesContainer = document.querySelector(".images");
const prevBtn = document.getElementById("prevBtn"); //the scroll works without the declaration of prevBtn and nextBtn, for it uses getElementById
const nextBtn = document.getElementById("nextBtn");
let query = null;

scroll(prevBtn, nextBtn, imagesContainer);

//--

document.addEventListener("DOMContentLoaded", () => {
  //makes this scope waits until the DOM be totally loaded

  const params = new URLSearchParams(window.location.search);
  query = params.get("query");
  queryDoc(query);
});
//--

for (let i = 0; i < 10; i++) {
  productDisplay(i); //calls the function that assembly the product card div
}

//console.log(imagesContainer.innerHTML);

*/

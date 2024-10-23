import { productDisplay, removeProductDisplay } from "./productDisplay.js";
import { queryDoc } from "./searchBar.js";
import { scroll } from "./scroll.js";
import { query } from "./query.js";
const imagesContainer = document.querySelector(".images");
const prevBtn = document.getElementById("prevBtn"); //the scroll works without the declaration of prevBtn and nextBtn, for it uses getElementById
const nextBtn = document.getElementById("nextBtn");
const data = null;
scroll(prevBtn, nextBtn, imagesContainer);

//use data.lenth
productDisplay(0); //calls the function
// setTimeout(() => {
//   removeProductDisplay(0);
// }, 1000);

// productDisplay(1);
// productDisplay(2);
// productDisplay(3);
// productDisplay(4);
// productDisplay(5);
// productDisplay(6);
queryDoc();

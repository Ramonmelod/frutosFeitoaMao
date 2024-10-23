import { productDisplay } from "./productDisplay.js";
import { queryDoc } from "./searchBar.js";
import { scroll } from "./scroll.js";
import { query } from "./query.js";
const imagesContainer = document.querySelector(".images");
const prevBtn = document.getElementById("prevBtn"); //the scroll works without the declaration of prevBtn and nextBtn, for it uses getElementById
const nextBtn = document.getElementById("nextBtn");
const data = null;
scroll(prevBtn, nextBtn, imagesContainer);

//use data.lenth
productDisplay(imagesContainer, 0); //calls the function
productDisplay(imagesContainer, 1);
productDisplay(imagesContainer, 2);
productDisplay(imagesContainer, 3);
productDisplay(imagesContainer, 4);
productDisplay(imagesContainer, 5);
productDisplay(imagesContainer, 6);
queryDoc();

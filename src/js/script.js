import { queryJson } from "./query.js";
import { scroll } from "./scroll.js";
const imagesContainer = document.querySelector(".images");
const prevBtn = document.getElementById("prevBtn"); //the scroll works without the declaration of prevBtn and nextBtn, for it uses getElementById
const nextBtn = document.getElementById("nextBtn");
let data = null;

queryJson(imagesContainer, data); //calls the function

scroll(prevBtn, nextBtn, imagesContainer);

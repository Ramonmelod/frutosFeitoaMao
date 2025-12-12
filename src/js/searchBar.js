import { query } from "/js/query.js";
import { productDisplay, removeProductDisplay } from "./productShowCase.js";

const logo = document.querySelector(".logo");
const slogan = document.querySelector(".slogan");
const txtIntro = document.querySelector(".txt_intro");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imagesContainer = document.querySelector(".images");
const notFoundContainer = document.querySelector(".notFoundContainer");
const searchBar = document.getElementById("searchInput"); //declaration of the searchbar
const form = document.getElementById("searchForm");

export const queryDoc = async (urlQuery) => {
  try {
    const path = "./productCards.json";
    const data = await query(path);

    form.addEventListener("submit", function (e) {
      // form is decrared globally in the top of the script
      e.preventDefault(); // Prevents the default behavior of sending the forms
      removeProductDisplay(); //remove the current displayed products

      const query = urlQuery ? urlQuery : searchBar.value.toLowerCase(); // if urlQuery null the variable query gets the value in the home search bar

      //-------------------------------------------------------------------------
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(query)
      );

      if (filteredProducts.length > 0) {
        filteredProducts.forEach((product) => {
          searchBar.value = ""; // erase the value inside the searchbar
          //notFoundContainer.textContent = ""; // erases the sentece "Nenhum produto encontrado."
          logo.insertAdjacentElement("afterend", slogan); //appending slogan if it is not present
          logo.insertAdjacentElement("afterend", txtIntro); //appending txt_intro if it is not present
          productDisplay(product.id); // here the elements reaseached in the bar  are created and shown
        });
      } else {
        searchBar.value = ""; // erase the value inside the searchbar
        slogan.style.display = "none";
        txtIntro.style.display = "none"; //hide the txt_intro
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
        imagesContainer.style.display = "none";
        notFoundContainer.style.display = "block";
      }
    });
    if (urlQuery) {
      // create the required validations

      const submitEvent = new Event("submit", {
        bubbles: true,
        cancelable: true,
      });
      const valid = form.dispatchEvent(submitEvent);
    }
  } catch (error) {
    console.error(error);
  }
};

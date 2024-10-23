import { query } from "./query.js";
import { productDisplay, removeProductDisplay } from "./productDisplay.js";
let lastDisplayed = []; // this will be used to store the id of the last elements displayed

export const queryDoc = async () => {
  //const imagesContainer = document.querySelector(".images");

  try {
    const data = await query();

    document
      .getElementById("searchForm")
      .addEventListener("submit", function (e) {
        lastDisplayed.forEach((product) => {
          // here the elements with the id added to lastDisplayed will be removed from the display
          console.log("produto: " + product);
          removeProductDisplay(product);
        });
        lastDisplayed = []; // here the array lastDisplayed is made empty for the push of the new elements that will be displayed
        console.log(
          "HERE IS THE BEGGINING THE lastDisplayed: " + lastDisplayed
        );
        e.preventDefault(); // Prevents the default behavior of sending the forms

        const query = document // get the value in the bar and change it all to lower case
          .getElementById("searchInput")
          .value.toLowerCase();

        //-------------------------------------------------------------------------
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(query)
        );

        if (filteredProducts.length > 0) {
          filteredProducts.forEach((product) => {
            lastDisplayed.push(product.id); //here are pushed the id of the elements displayed
            productDisplay(product.id); // here the reaseached in the bar elements are created and shown
          });

          console.log("todos os produtos criados");
        } else {
          const resultContainer = document.getElementById("searchResults");
          resultContainer.textContent = "Nenhum produto encontrado.";
        }
        console.log("HERE IS THE END THE lastDisplayed: " + lastDisplayed);
      });
  } catch (error) {
    console.error("Erro:", error);
  }
};

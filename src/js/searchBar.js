import { query } from "./query.js";
import { productDisplay, removeProductDisplay } from "./productDisplay.js";

export const queryDoc = async () => {
  try {
    const data = await query();
    document
      .getElementById("searchForm")
      .addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents the default behavior of sending the forms
        removeProductDisplay(); //remove the current displayed products
        const query = document // get the value in the bar and change it all to lower case
          .getElementById("searchInput")
          .value.toLowerCase();

        //-------------------------------------------------------------------------
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(query)
        );

        if (filteredProducts.length > 0) {
          filteredProducts.forEach((product) => {
            productDisplay(product.id); // here the reaseached in the bar elements are created and shown
          });

          console.log("todos os produtos criados");
        } else {
          const resultContainer = document.getElementById("searchResults");
          resultContainer.textContent = "Nenhum produto encontrado.";
        }
      });
  } catch (error) {
    console.error("Erro:", error);
  }
};

import { query } from "./query.js";
import { productDisplay, removeProductDisplay } from "./productDisplay.js";
export const queryDoc = async () => {
  //const imagesContainer = document.querySelector(".images");

  try {
    const data = await query();

    document
      .getElementById("searchForm")
      .addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents the default behavior of sending the forms

        const query = document
          .getElementById("searchInput")
          .value.toLowerCase();

        //-------------------------------------------------------------------------
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(query)
        );

        if (filteredProducts.length > 0) {
          filteredProducts.forEach((product) => {
            console.log("filteredProducts[i].id: " + product.id);
            removeProductDisplay("image-00"); //here remove the current element
            productDisplay(5); // here display another element
          });
        } else {
          resultContainer.textContent = "Nenhum produto encontrado.";
        }
      });
  } catch (error) {
    console.error("Erro:", error);
  }
};

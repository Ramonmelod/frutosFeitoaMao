export const queryDoc = async (data) => {
  try {
    const response = await fetch("./productCards.json");
    if (!response.ok) {
      throw new Error("Erro ao carregar o arquivo JSON");
    }

    data = await response.json();

    document
      .getElementById("searchForm")
      .addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents the default behavior of sending the forms

        const query = document
          .getElementById("searchInput")
          .value.toLowerCase();
        const resultContainer = document.getElementById("searchResults");
        resultContainer.innerHTML = ""; // Clean the previous results

        //-------------------------------------------------------------------------
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(query)
        );

        if (filteredProducts.length > 0) {
          filteredProducts.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.textContent = product.title;
            resultContainer.appendChild(productElement);
          });
        } else {
          resultContainer.textContent = "Nenhum produto encontrado.";
        }
      });
  } catch (error) {
    console.error("Erro:", error);
  }
};

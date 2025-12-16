import { query } from "/js/query.js";
import { loadProductGrid } from "/components/productGrid/productGrid.js";

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const term = params.get("q");

  const title = document.getElementById("search-title");
  const containerSelector = "#search-results";

  if (!term) {
    title.textContent = "Nenhuma busca realizada";
    return;
  }

  title.textContent = `Resultados para "${term}"`;

  try {
    const data = await query("/productCards.json");

    const results = data.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );

    if (results.length === 0) {
      document.querySelector(containerSelector).innerHTML =
        "<p>Nenhum produto encontrado.</p>";
      return;
    }

    await loadProductGrid({
      containerSelector,
      products: results,
      baseLink: "/destaqueDetails/index.html?productId",
      columns: 4,
    });
  } catch (error) {
    console.error("Busca error:", error);
  }
});

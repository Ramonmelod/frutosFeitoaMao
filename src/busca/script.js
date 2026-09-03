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

  // normalize: lowercase + remove diacritics so "mae" matches "mãe"
  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  const normalizedTerm = normalize(term);

  try {
    const dataProducts = await query("/productCards.json");
    const dataCourses = await query("/coursesCards.json");
    const dataDecor = await query("/decorationProducts.json");
    const dataPatterns = await query("/embroideryPatternsCards.json");

    const unifiedData = [
      ...dataProducts,
      ...dataCourses,
      ...dataDecor,
      ...dataPatterns,
    ];

    const results = unifiedData.filter((product) => {
      const haystack = normalize(`${product.title} ${product.description || ""}`);
      return haystack.includes(normalizedTerm);
    });

    if (results.length === 0) {
      document.querySelector(containerSelector).innerHTML =
        "<p>Nenhum produto encontrado.</p>";
      return;
    }
    await loadProductGrid({
      containerSelector,
      products: results,
      columns: 4,
    });
  } catch (error) {
    console.error("Busca error:", error);
  }
});

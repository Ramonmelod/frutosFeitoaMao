import { loadProductGrid } from "/components/productGrid/productGrid.js";

loadProductGrid({
  containerSelector: "#products-section",
  productsPath: "/productCards.json",
  baseLink: "bordadoDetails.html?productId",
  columns: 3,
});

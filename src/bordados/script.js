import { loadProductGrid } from "/components/productGrid/productGrid.js";

loadProductGrid({
  containerSelector: "#products-section",
  productsPath: "/productCards.json",
  columns: 3,
});

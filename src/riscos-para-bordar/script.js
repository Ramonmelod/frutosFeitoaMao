import { loadProductGrid } from "/components/productGrid/productGrid.js";

loadProductGrid({
  containerSelector: "#products-section",
  productsPath: "/embroideryPatternsCards.json",
  columns: 3,
});

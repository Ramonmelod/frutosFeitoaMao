import { loadProductGrid } from "/components/productGrid/productGrid.js";

loadProductGrid({
  containerSelector: "#products-section",
  productsPath: "/embroideryPatternsCards.json",
  baseLink: "riscosDetails.html?productId",
  columns: 3,
});

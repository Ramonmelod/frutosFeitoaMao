import { loadProductGrid } from "/components/productGrid/productGrid.js";

loadProductGrid({
  containerSelector: "#products-section",
  productsPath: "/embroideryPaternsCards.json",
  baseLink: "riscosDetails.html?productId",
  columns: 3,
});

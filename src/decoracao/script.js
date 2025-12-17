import { loadProductGrid } from "/components/productGrid/productGrid.js";

loadProductGrid({
  containerSelector: "#products-section",
  productsPath: "/decorationProducts.json",
  columns: 3,
});

import { loadProductGrid } from "/components/productGrid/productGrid.js";

loadProductGrid({
  containerSelector: "#products-section",
  productsPath: "/decorationProducts.json",
  baseLink: "decoracaoDetails.html?productId",
  columns: 3,
});

import { query } from "/js/query.js";

export async function loadProductGrid({
  containerSelector,
  productsPath = "/productCards.json",
  products = null, // when defined select the products to be shown
  columns = 4,
}) {
  try {
    const container = document.querySelector(containerSelector);

    if (!container) {
      throw new Error(`Container "${containerSelector}" not found in DOM`);
    }

    // clear previous grid
    container.innerHTML = "";
    const data = products ?? (await query(productsPath));

    const grid = document.createElement("section");
    grid.classList.add("product-grid");
    grid.style.setProperty("--columns", String(columns));

    data.forEach((product, index) => {
      const card = document.createElement("article");
      card.classList.add("product-grid-card");

      const link = document.createElement("a");
      const params = new URLSearchParams({
        productId: product.id,
        imageIndex: 0,
      });
      if (product.productSlug) {
        params.set("productSlug", product.productSlug);
      }
      link.href = `${product.detailsPage}?${params.toString()}`;
      link.style.textDecoration = "none";

      const img = document.createElement("img");
      img.src = product.image_url[0];
      img.alt = product.title;
      img.loading = "lazy";

      const title = document.createElement("p");
      title.classList.add("product-grid-title");
      title.textContent = product.title;

      const price = document.createElement("p");
      price.classList.add("product-grid-price");
      price.textContent = product.price;

      link.appendChild(img);
      card.appendChild(link);
      card.appendChild(title);
      card.appendChild(price);

      grid.appendChild(card);
    });

    container.appendChild(grid);
  } catch (error) {
    console.error("ProductGrid error:", error);
  }
}

import { query } from "../../js/query.js";
export function productDisplay() {
  const productId = 0;
  const productDetailContainer = document.querySelector(".productDetail");
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  //productCard.classList.add("img-fluid"); //from bootstrap
  const productImage = document.createElement("img");
  productImage.src = "https://picsum.photos/seed/luana/720/720";
  // productImage.classList.add("img-fluid");
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productDescription = document.createElement("div");
  productDescription.classList.add("product-description");

  //creating a tag p for use in product-info title
  const productTitle = document.createElement("p");
  productTitle.classList.add("title");
  productTitle.textContent =
    "Jardim Abelhas - Porta Maternidade com Feltragem, Bastidor de Silicone - 20 cm";
  const aPartirDe = document.createElement("p");
  aPartirDe.classList.add("title");
  aPartirDe.textContent = "A partir de";
  const productPrice = document.createElement("p");
  productPrice.classList.add("price");
  productPrice.textContent = "R$260,00";

  // 👉 creating the button
  const buyButton = document.createElement("button");
  buyButton.textContent = "Solicitar Orçamento";
  buyButton.classList.add("btn", "btn-success", "rounded-pill", "py-2"); // se estiver usando Bootstrap
  buyButton.style.backgroundColor = "#a0c568";
  buyButton.style.borderColor = "#a0c568"; // se quiser que a borda combine também
  buyButton.style.marginTop = "10px"; // estilo opcional

  // apend children
  productDetailContainer.appendChild(productCard); //here is added the new div to the images contatainer
  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);
  productInfo.appendChild(productTitle);
  productInfo.appendChild(aPartirDe);
  productInfo.appendChild(productPrice);
  productInfo.appendChild(buyButton);
  productCard.appendChild(productDescription);

  console.log("Ramon");
}

/*import { query } from "../../js/productDisplay.js";

const productDetailContainer = document.querySelector(".productDetail");
let displayedProducts = [];

export const productDisplay = async (i) => {
  try {
    console.log("ramon");
    const data = await query();

    //-----------creating the div with apendChild-----------------------

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.id = data[i].id;
    //adding image
    const productImage = document.createElement("img");
    productImage.src = data[i].image_url;
    //creating product-info container
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    //creating a tag p for use in product-info title
    const productTitle = document.createElement("p");
    productTitle.classList.add("title");
    productTitle.textContent = data[i].title;

    //creating a tag p for use in product-info a-partir-de
    const aPartirDe = document.createElement("p");
    aPartirDe.classList.add("title");
    aPartirDe.textContent = "A partir de";
    //creating a tag p for use in product-info price
    const productPrice = document.createElement("p");
    productPrice.classList.add("price");
    productPrice.textContent = data[i].price;

    //apending the children
    productDetailContainer.appendChild(productCard); //here is added the new div to the images contatainer
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productTitle);
    productInfo.appendChild(aPartirDe);
    productInfo.appendChild(productPrice);
    displayedProducts.push(productCard.id); // here the displayed elements id are pushed to the displayedProducts array
  } catch (error) {
    console.error("Erro:", error);
  }
};
/*
export const removeProductDisplay = () => {
  displayedProducts.forEach((product) => {
    const productCard = document.getElementById(`${product}`);
    if (productCard) {
      productCard.remove();
      console.log(`Product with id ${product} removed`);
    } else {
      console.log(`Product with id ${product} not found`);
    }
  });
};
*/

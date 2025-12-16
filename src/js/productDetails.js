import { query } from "/js/query.js";
export async function productDisplay(
  isPriceRequestNedded,
  itensPath,
  productId,
  imageIndex,
  paymentLink,
  buyButtonText,
  thumbNailLink
) {
  try {
    const path = itensPath;
    const data = await query(path);
    console.log(data);

    const productDetailContainer = document.querySelector(".productDetail"); //select the div that will receive the created elements
    const main = document.createElement("main"); // create the div that receives the thumbnail
    const productPictures = document.createElement("div"); // create the div that receives the thumbnail
    const productCard = document.createElement("div"); //create the div that receives the productImage element
    const productImage = document.createElement("img");
    const productTitle = document.createElement("p");
    const aPartirDe = document.createElement("p");
    const productPrice = document.createElement("p");
    const productInfo = document.createElement("div");
    const productDescription = document.createElement("div");
    const buyButton = document.createElement("button");
    const productDescriptionText = document.createElement("p");

    // 👉 creating the full image link
    const productLink = document.createElement("a");
    const sizeParameterImagelink = data[productId].image_url[imageIndex];
    productLink.href = removeCloudinarySizeParameters(sizeParameterImagelink); //getting the full image link
    productLink.target = "_blank"; //opens a new tab

    // 👉 creating the WhatsApp button link
    const whatsappLink = document.createElement("a");
    whatsappLink.href = isPriceRequestNedded
      ? paymentLink + ": " + data[productId].title
      : paymentLink;
    whatsappLink.target = "_blank"; // opens in a new tab

    main.classList.add("main");
    productCard.classList.add("product-card");
    productPictures.classList.add("product-pictures");
    productInfo.classList.add("product-info");

    productImage.src = data[productId].image_url[imageIndex];
    productTitle.textContent = data[productId].title;
    productPrice.textContent = data[productId].price;
    productDescriptionText.textContent = data[productId].description;

    //Insert elements in the productInfo div
    productTitle.classList.add("title");
    aPartirDe.classList.add("a-partir-de");
    aPartirDe.textContent = "A partir de";
    productPrice.classList.add("price");

    productDescription.classList.add("product-description");

    // 👉 creating the button
    buyButton.textContent = buyButtonText; //button text
    buyButton.classList.add("btn", "btn-success", "rounded-pill", "py-2");
    buyButton.style.backgroundColor = "#a3a882";
    buyButton.style.borderColor = "#a3a882";
    buyButton.style.marginTop = "10px";

    // appending the children

    document.body.appendChild(main);
    main.appendChild(productDetailContainer);
    //main.appendChild(productDescription);
    productDetailContainer.classList.add("productDetailContainer");
    productDetailContainer.appendChild(productPictures);
    productDetailContainer.appendChild(productCard); //here is added the new div to the images container
    productDetailContainer.appendChild(productInfo); //here is added the new div to the images container
    thumbNailsCreate();

    productCard.appendChild(productLink);
    productLink.appendChild(productImage);
    productInfo.appendChild(productTitle);
    productInfo.appendChild(aPartirDe);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(whatsappLink);
    whatsappLink.appendChild(buyButton);
    productInfo.appendChild(productDescription);
    productDescription.appendChild(productDescriptionText);

    function removeCloudinarySizeParameters(url) {
      return url.replace(/\/w_\d+,h_\d+/g, "");
    }

    function thumbNailsCreate() {
      try {
        let productImageIndexes = [];
        for (let i = 0; i < data[productId].image_url.length; i++) {
          productImageIndexes.push(i); // push all the imageNumbers to the array. The image numbers is used to access the right image in the file productCards.json
        }

        const thumbnailImageIndexes = productImageIndexes.filter(
          (item) => item !== Number(imageIndex) // removes only the imageIndex of the image that will be showed in the main card
        );

        thumbnailImageIndexes.forEach((imageIndex) => {
          const productThumbNailLink = document.createElement("a");
          productThumbNailLink.href = `${thumbNailLink}=${productId}&imageIndex=${imageIndex}`;
          const thumbNail = document.createElement("img");
          thumbNail.src = data[productId].image_url[imageIndex];
          thumbNail.classList.add("thumbnail-img");
          productPictures.appendChild(productThumbNailLink);
          productThumbNailLink.appendChild(thumbNail);
        });
      } catch (error) {
        console.log("in thumbNailCreate: " + error);
        throw error;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

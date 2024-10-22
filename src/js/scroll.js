export const scroll = (prevBtn, nextBtn, imagesContainer) => {
  const scrollStep = 321;

  prevBtn.disabled = false; //declare the prevBtn.disabled for use in disabling feature
  nextBtn.disabled = false;

  prevBtn.addEventListener("click", () => {
    //left
    imagesContainer.scrollBy(-scrollStep, 0);
    prevBtn.disabled = true; //disable the prevBtn for avoiding fast double click to cause the picture scrolling to desalign
    nextBtn.disabled = true;
    setTimeout(() => {
      prevBtn.disabled = false; //reenable the prevBtn after 250ms
      nextBtn.disabled = false;
    }, 250);
  });
  nextBtn.addEventListener("click", () => {
    //right
    prevBtn.disabled = true;
    nextBtn.disabled = true; //disable the nextBtn for avoiding fast double click to cause the picture scrolling to desalign
    imagesContainer.scrollBy(scrollStep, 0);
    setTimeout(() => {
      prevBtn.disabled = false;
      nextBtn.disabled = false; //reenable the nextBtn after 250ms
    }, 250);
  });
};

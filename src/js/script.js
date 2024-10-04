
const imagesContainer = document.querySelector('.images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const logo = document.querySelector('.logo');
let scrollAmount = 0;
const scrollStep = 270; 

prevBtn.addEventListener('click', () => {
  //logo.style.left = "500px";
  //scrollAmount = Math.max(scrollAmount - scrollStep, 0);
  imagesContainer.style.transform = `translateX(-50px)`; //${scrollAmount}
});

// nextBtn.addEventListener('click', () => {
//   const maxScroll = imagesContainer.scrollWidth - imagesContainer.clientWidth;
//   scrollAmount = Math.min(scrollAmount + scrollStep, maxScroll);
//   imagesContainer.style.transform = `translateX(-${scrollAmount}px)`;
// });

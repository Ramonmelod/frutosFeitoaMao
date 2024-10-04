
const imagesContainer = document.querySelector('.images');
const image01 = document.querySelector('#image-01');
const image02 = document.querySelector('#image-02');
const image03 = document.querySelector('#image-03');
const image04 = document.querySelector('#image-04');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const logo = document.querySelector('.logo');
let scrollAmount = 0;
const scrollStep = 270; 



prevBtn.addEventListener('click', () => {
  scrollAmount = scrollAmount + scrollStep;
  image01.style.transform = `translateX(${scrollAmount}px)`
  image02.style.transform = `translateX(${scrollAmount}px)`
  image03.style.transform = `translateX(${scrollAmount}px)`
  image04.style.transform = `translateX(${scrollAmount}px)`

  //imagesContainer.scrollBy(500,0)


});
nextBtn.addEventListener('click', () => {
  scrollAmount = scrollAmount - scrollStep;
  image01.style.transform = `translateX(${scrollAmount}px)`
  image02.style.transform = `translateX(${scrollAmount}px)`
  image03.style.transform = `translateX(${scrollAmount}px)`
  image04.style.transform = `translateX(${scrollAmount}px)`
});

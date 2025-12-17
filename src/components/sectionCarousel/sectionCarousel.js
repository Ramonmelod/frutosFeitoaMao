export function loadSectionCarousel({
  containerSelector,
  sections = [],
  interval = 6000,
}) {
  const container = document.querySelector(containerSelector);
  if (!container || sections.length === 0) return;

  let currentIndex = 0;
  let timer;

  container.classList.add("section-carousel");

  const slidesWrapper = document.createElement("div");
  slidesWrapper.classList.add("carousel-slides");

  sections.forEach((section) => {
    const slide = document.createElement("a");
    slide.href = section.link;
    slide.classList.add("carousel-slide");
    slide.style.backgroundImage = `url(${section.image})`;

    slide.innerHTML = `
      <div class="carousel-overlay"></div>
      <h2 class="carousel-title">${section.title}</h2>
    `;

    slidesWrapper.appendChild(slide);
  });

  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-btn prev";
  prevBtn.innerHTML = "‹";

  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-btn next";
  nextBtn.innerHTML = "›";

  container.appendChild(slidesWrapper);
  container.appendChild(prevBtn);
  container.appendChild(nextBtn);

  function updateSlide() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sections.length;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    updateSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer();
  });

  function startAuto() {
    timer = setInterval(nextSlide, interval);
  }

  function resetTimer() {
    clearInterval(timer);
    startAuto();
  }

  updateSlide();
  startAuto();
}

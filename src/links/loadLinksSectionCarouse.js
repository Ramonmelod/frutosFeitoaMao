import { loadSectionCarousel } from "/components/sectionCarousel/sectionCarousel.js";

loadSectionCarousel({
  containerSelector: "#section-carousel",
  interval: 5000,
  sections: [
    {
      title: "Bordados",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1745411552/IMG-20250422-WA0014_r8tsix.jpg",
      link: "/bordados/index.html",
    },
    {
      title: "Cursos",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1762440042/IMG-20251106-WA0024_lxrrzr.jpg",
      link: "/cursos/index.html?productId=0&imageIndex=0",
    },
    {
      title: "Riscos para Bordar",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1765808731/risco-para-bordar-thumbnail_a8spuo.jpg",
      link: "/riscos-para-bordar/index.html",
    },
    {
      title: "Decoração",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1765809664/IMG-20251203-WA0010_bbyr1s.jpg",
      link: "/decoracao/index.html",
    },
    {
      title: "Materiais",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1762440042/IMG-20251106-WA0028_mjawzm.jpg",
      link: "/materiais/index.html",
    },
  ],
});

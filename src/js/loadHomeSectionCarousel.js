import { loadSectionCarousel } from "/components/sectionCarousel/sectionCarousel.js";

loadSectionCarousel({
  containerSelector: "#section-carousel",
  interval: 5000,
  sections: [
    {
      title: "Bordados",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1745411552/IMG-20250422-WA0014_r8tsix.jpg",
      link: "/index.html",
    },
    {
      title: "Cursos",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1762440042/IMG-20251106-WA0024_lxrrzr.jpg",
      link: "/cursos/index.html",
    },
    {
      title: "Riscos para Bordar",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1765797232/1e21f4f8-ce6e-4b4b-83e0-b382e7c94ed0_tqynjl.jpg",
      link: "/riscos-para-bordar/index.html",
    },
    {
      title: "Decoração",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1745411552/IMG-20250422-WA0014_r8tsix.jpg",
      link: "/decoracao/index.html",
    },
    {
      title: "Materiais",
      image:
        "https://res.cloudinary.com/dhayneykx/image/upload/v1762440042/IMG-20251106-WA0028_mjawzm.jpg",
      link: "/assets/sections/materiais.jpg",
    },
  ],
});

const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const dots = document.querySelectorAll(".carousel-dot");
const preBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//Define array
let currentIndex = 0;

const updateCarousel = () => {
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
};

const autoAdvance = () => {
  currentIndex = (currentIndex + 1) % images.length;

  updateCarousel();
};
setInterval(autoAdvance, 3000);

preBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;

  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

//responsive navbar

const mobile_nav = document.querySelector(".mobile-navbar-icon");
const navbar = document.querySelector(".nav");
const search = document.querySelector(".google");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  search.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

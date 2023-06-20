const mobileMenu = document.querySelector(".mobile-menu");
const menuHamburger = document.querySelector(".menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("menu-mobile-active");
  menuHamburger.classList.remove("menu-hidden");
});

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("menu-hidden");
  mobileMenu.classList.toggle("menu-mobile-active");
});

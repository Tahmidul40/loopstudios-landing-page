const navbar = document.getElementById("navbar");
const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const navLinks = document.getElementById("nav-links");

const toggle = () => {
  openNav.classList.toggle("navbar__hamburger--inactive");
  closeNav.classList.toggle("navbar__close--active");
  navbar.classList.toggle("navbar--active");
  navLinks.classList.toggle("navbar__links--active");
};

openNav.addEventListener("click", () => {
  toggle();
});

closeNav.addEventListener("click", () => {
  toggle();
});

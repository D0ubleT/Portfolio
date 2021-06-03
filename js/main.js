const hamburger = document.querySelector("#hamburger-button");
const navMenu = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("hamburger-menu-active");
}

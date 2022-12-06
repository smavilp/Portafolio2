const menuIcon = document.getElementById("menu-btn");
const closeIcon = document.getElementById("close-btn");
const menu = document.getElementById("menu-div");
const aboutMeAncore = document.getElementById("about-me-section");

const openMenu = () => {menu.classList.remove("hide-menu")};
const closeMenu = () => {menu.classList.add("hide-menu")};

menuIcon.addEventListener ("click", e => openMenu());
closeIcon.addEventListener ("click", e => closeMenu());
aboutMeAncore.addEventListener ("click", e => closeMenu());
const menuIcon = document.getElementById("menu-btn");
const closeIcon = document.getElementById("close-btn");
const menu = document.getElementById("menu-div");
const aboutMeAncore = document.getElementById("about-me-ancore");
const myHabilitiesAncore = document.getElementById("my-habilities-ancore");
const formationAncore = document.getElementById("formation-ancore");
const projectsAncore = document.getElementById("projects-ancore");
const contactAncore = document.getElementById("contact-ancore");

const openMenu = () => {menu.classList.remove("hide-menu")};
const closeMenu = () => {menu.classList.add("hide-menu")};

menuIcon.addEventListener ("click", e => openMenu());
closeIcon.addEventListener ("click", e => closeMenu());

aboutMeAncore.addEventListener ("click", e => closeMenu());
myHabilitiesAncore.addEventListener ("click", e => closeMenu());
formationAncore.addEventListener ("click", e => closeMenu()); 
projectsAncore.addEventListener ("click", e => closeMenu()); 
contactAncore.addEventListener ("click", e => closeMenu());  
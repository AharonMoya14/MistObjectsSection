/*
 All Rights Reserved
 This software is property information of AKUREY S.A.
 Contact us at contact@akurey.com
 @summary Task 4 Mist Objects Page java script code
*/

let general = document.querySelector(".general");
let menuLogo = document.querySelector(".menu");
let hamburgerMenu = document.querySelector(".hamburgerMenu");
let header = document.querySelector(".header");


const menuLogoClick = () => {
    let displayHamburgerMenu = hamburgerMenu.style.display;
    if (displayHamburgerMenu === "flex") {
        hamburgerMenu.style.display = "none";
        menuLogo.src = "Assets/Menu.png";
        menuLogo.classList.toggle("menu__open");
    } else {
        hamburgerMenu.style.display = "flex";
        menuLogo.src = "Assets/MenuOpen.png";
        menuLogo.classList.toggle("menu__open");
    }
};
const closeHamburgerMenu = (event) => {
    let targetElement = event.target;
    if (general.contains(targetElement) && !hamburgerMenu.contains(targetElement) & !header.contains(targetElement))
    {
        hamburgerMenu.style.display = "none";
        menuLogo.src = "Assets/Menu.png";
        menuLogo.classList.toggle("menu__open");
    }
} 
document.addEventListener('click', closeHamburgerMenu); 
menuLogo.addEventListener("click", menuLogoClick);

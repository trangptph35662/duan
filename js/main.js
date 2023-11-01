const menu = document.querySelector(".nav_links");
const menu_btn = document.querySelector(".nav_icons");

menu_btn.addEventListener('click', () => {
    menu.classList.toggle("nav_open");
    menu_btn.classList.toggle("open");
})
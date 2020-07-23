let menu = document.querySelector(".hamburger-menu");
let nav = document.querySelector("#menu");

menu.addEventListener('click', function (event) {
    // document.querySelector('#menu').setAttribute("class", "menu-toggle");
    // console.log("ok")
    nav.classList.toggle("menu-toggle");
});
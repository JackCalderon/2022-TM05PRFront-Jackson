const menu = document.querySelector(".menu"); /*Constantes JS*/
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const imgEt = document.getElementById("imgEt")

function toggleMenu(){   /*Si el menu esta abierto esta funcion hace que lo cierre*/
    menu.classList.toggle("menu_opened");
    imgEt.classList.toggle("hidden")
}

openMenuBtn.addEventListener("click", toggleMenu); /*Evento que al realizar click ejecute la funcion ToggleMenu*/
closeMenuBtn.addEventListener("click", toggleMenu);
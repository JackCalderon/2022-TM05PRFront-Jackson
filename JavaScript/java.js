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

const menuLinks = document.querySelectorAll(".menu a[href^=\"#\"]");

const observer = new IntersectionObserver((entries)=>{ /*segun rango entra a una seccion*/
  entries.forEach(entry =>{
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.menu a[href="#${id}"]`)

    if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
    }
  });
}, {rootMargin: "-30% 0px -70% 0px"});


menuLinks.forEach(menuLink => { /*recorremos todos los enlaces*/
  menuLink.addEventListener("click", function(){
    menu.classList.remove("menu_opened") /*elimnar menu opened*/
  })

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target){
    observer.observe(target);
  }
})
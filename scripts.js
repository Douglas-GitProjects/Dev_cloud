const menuHamburguer = document.querySelector("#menu-hamburguer"); /* constante que vai guardar o botão */
const navLinks = document.querySelector(".nav-links"); /* constante que guarda o menu */
const links = document.querySelectorAll(".nav-links a");
const icon = menuHamburguer.querySelector("i");

/*Quando o botão for clicado chame a função */
menuHamburguer.addEventListener("click", function() {

    navLinks.classList.toggle("active");
    /*
    classList = permite a manipular as classes do elemento
    toggle() = adiciona a classe se ela não existir
           remove a classe se ela já existir
    */
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});
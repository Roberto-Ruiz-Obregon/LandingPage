console.log("Hello world!");
/* variables e imprimirlas*/
const myname = "Denisse";

const h1 = document.querySelector(".heading-primary");
console.log(myname);

/* reaccionar a un click en header */
//h1.addEventListener("click", function () {
/* cambiar al heading por la variable myName en la impresion */
//  h1.textContent = myname;

/* manipular el css */
/* Cambiar el fondo del titulo por rojo */
//  h1.style.backgroundColor = "red";
//  h1.style.padding = "5rem";
//});

///////////////////////////////////////////////////////////
// Obtener el año actual
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear(); /* obtener el año actual */
yearEL.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation works hacer que el menu aparezca y se quite con click

const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector("header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

//seleccionar todos los links
const allLinks = document.querySelectorAll("a:link");
//console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href"); // obtener los atributos de los links, de la parte de href

    // ir de nuevo al inicio scroll
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll a cada link de cada seccion -> meals, pricing, etc
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // cerrar la navegacion en mobile
    if (link.classList.contains("main-nav-list"))
      headerEL.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

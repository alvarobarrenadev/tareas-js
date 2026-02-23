console.log("Empezando ejercicios");

// 1. Selecciona el primer p de la página y modificarlo para que cambie el texto que lleva dentro y que ponga "hola que tal"
/* let primerParrafo = document.getElementsByTagName('p')[0];
primerParrafo.textContent = 'Hola qué tal' */


// 2. Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
/* const primerParrafo = document.getElementsByTagName("p")[0];
// Busco enlaces dentro del párrafo
const enlaces = primerParrafo.getElementsByTagName('a');
// Segundo enlace (índice 1)
enlaces[1].setAttribute("href", "https://www.google.com"); */


// 3. Selecciona el penúltimo hijo de una etiqueta con el id "milista"
/* const miLista = document.getElementById('milista');
const hijos = miLista.children;
const penultimo = hijos[hijos.length - 2]; */


// 4. Desactiva el atributo class del último p de la página
/* const parrafos = document.getElementsByTagName("p");
const ultimoParrafo = parrafos[parrafos.length - 1];
ultimoParrafo.removeAttribute("class"); */


// 5. Crea un elemento h3 e insertalo al final del body
/* const newH3 = document.createElement('h3');
newH3.textContent = "Soy un nuevo elemento h3";
document.body.appendChild(newH3); */


// 6. Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
/* const newSpan = document.createElement('span');
newSpan.textContent = " Soy un nuevo elemnto span";
newH3.appendChild(newSpan); */


// 7. Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com.
/* const segundoParrafo = document.getElementsByTagName('p')[1];
const newA = document.createElement('a');
newA.setAttribute('href', 'https://google.com');
newA.textContent = ' pulsa aquí';
segundoParrafo.appendChild(newA); */


// 8. Comprueba que todos los  p que estén dentro de un div con clase "hero" tiene clase, en caso de ser verdadero, elimínalo
// let parrafos = document.querySelectorAll("div.hero p");
// for (let p of parrafos) {
//   if (p.hasAttribute("class")) {
//     p.remove();
//   }
// }


// 9. Selecciona el último nodo hijo de body
// let ultimoELemento = document.body.lastElementChild;


// 10. Selecciona el siguiente elemento hermano del primer p
// let primerP = document.getElementsByTagName('p')[0];
// let siguienteHermnano = primerP.nextElementSibling;


// 11. Borra el último elemento de body
// let ultimoElemento = document.body.lastElementChild;
// ultimoElemento.remove();


// 12. Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame <img src="cambiame"> a "cambiado"
// let imagenes = document.getElementsByTagName("img");
// for (let i of imagenes) {
//   if (i.getAttribute('src') === 'cambiame') {
//     i.setAttribute('src', 'cambiado');
//   }
// }


// 13. Dale la clase "claseejemplo" al primer p
/* let primerP = document.getElementsByTagName("p")[0];
// Sobre escribe las clases que haya y añade 'claseejemplo
// primerP.setAttribute("class", "claseejemplo");
//Añade clase sin eliminar las que hay en el HTML
primerP.classList.add("claseejemplo"); */


// 14. Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
// let listas = document.getElementsByTagName("ul");

// for (let lista of listas) {
//   if (lista.children.length === 2) {
//     let newLi = document.createElement('li');
//     newLi.textContent = "Tercer elemento";
//     lista.appendChild(newLi);
//   }
// }


// 15. Selecciona el padre del primer p
// let primerP = document.getElementsByTagName("p")[0];
// let padre = primerP.parentElement;


// 16. Selecciona el hermano anterior del primer p
// let primerP = document.getElementsByTagName("p")[0];
// let hermanoAnterior = primerP.previousElementSibling;


// 17. Selecciona el primer div con clase "container" y modifica su background-color a red
// let primerDivConClase = document.querySelector('div.container');
// primerDivConClase.style.backgroundColor = "red";


// 18. Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
// let pConId = document.getElementById('text');
// pConId.innerHTML = '<a href="https://google.com" target="_blank">Ir a Google</a>';


// 19. Selecciona los div con clase "eustakio"
// let divs = document.querySelectorAll('div.eustakio');


// 20. Selecciona el párrafo con un ID de valor "paisa"
// let parrafo = document.getElementById('paisa');


// 21. Selecciona el primer párrafo hijo de un div
// let primerP = document.querySelector('div > p:first-child');


// 22. Selecciona el penúltimo enlace de las página.
// let enlaces = document.getElementsByTagName('a');
// let penultimoEnlace = enlaces[enlaces.length - 2];
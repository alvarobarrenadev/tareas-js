console.log("Empezando ejercicios");

// 1. Selecciona el primer p de la página y modifícalo para que cambie el texto que lleva dentro y que ponga "hola que tal"
let firstP = document.getElementsByTagName('p')[0];
// firstP.textContent = 'Hola qué tal';


// 2. Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
let linksFirstP = firstP.getElementsByTagName('a');
linksFirstP[1].setAttribute('href', 'https://www.google.com');


// 3. Selecciona el penúltimo hijo de una etiqueta con el id "milista"
let myList = document.getElementById('milista');
let listChildren = myList.children;
let penultimate = listChildren[listChildren.length - 2];

// 4. Desactiva el atributo class del último p de la página
let paragraphs = document.getElementsByTagName('p');
let lastP = paragraphs[paragraphs.length -1];
lastP.removeAttribute("class");


// 5. Crea un elemento h3 e insertalo al final del body
let newH3 = document.createElement("h3");
newH3.textContent = "Elemento H3 nuevo insertado al final del body";
document.body.append(newH3);

// 6. Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
let newSpan = document.createElement("span");
newSpan.textContent = " Soy un nuevo span";
newH3.appendChild(newSpan);


// 7. Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com.
let secondP = document.getElementsByTagName('p')[1];
let newA = document.createElement('a');
newA.setAttribute("href", "https://www.google.com");
newA.textContent = " pulsa aquí";
secondP.appendChild(newA);


// 8. Comprueba que todos los p que estén dentro de un div con clase "hero" tiene clase, en caso de ser verdadero, elimínalo
let paragraphsHero = document.querySelectorAll('div.hero p')
for (let p of paragraphsHero) {
  if (p.hasAttribute) {
    p.remove()
  }
}

// 9. Selecciona el último nodo hijo de body
let lastElementCh = document.body.lastElementChild;


// 10. Selecciona el siguiente elemento hermano del primer p
firstP.nextElementSibling;


// 11. Borra el último elemento de body
let lastElement = document.body.lastElementChild;
lastElement.remove();

// 12. Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame <img src="cambiame"> a "cambiado"
let images = document.getElementsByTagName('img');
for (let img of images) {
  if (img.getAttribute('src') === "cambiame"){
    img.setAttribute('src', 'cambiado');
  }
}


// 13. Dale la clase "claseejemplo" al primer p
firstP.classList.add("claseejemplo")


// 14. Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
let lists = document.getElementsByTagName("ul");
for (let list of lists) {
  if (list.children.length === 2) {
    let newLi = document.createElement('li');
    newLi.textContent = "Elemento 3";
    list.appendChild(newLi);
  }
}


// 15. Selecciona el padre del primer p
firstP.parentElement;


// 16. Selecciona el hermano anterior del primer p
firstP.previousElementSibling;


// 17. Selecciona el primer div con clase "container" y modifica su background-color a red
let firstDivContainer = document.querySelector("div.container");
firstDivContainer.style.backgroundColor = "red"


// 18. Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
let pWithID = document.querySelector("p#text");
let newAForPText = document.createElement('a');
newAForPText.setAttribute("href", "https://www.google.com");
newAForPText.textContent = ": Ir a Google";
pWithID.appendChild(newAForPText);


// 19. Selecciona los div con clase "eustakio"
let eustakioDiv = document.getElementsByClassName("eustakio");


// 20. Selecciona el párrafo con un ID de valor "paisa"
let paisaID = document.getElementById("paisa");

// 21. Selecciona el primer párrafo hijo de un div
let divFirstP = document.querySelector("div > p:first-child");


// 22. Selecciona el penúltimo enlace de las página.
let links = document.getElementsByTagName("a");
let penultimateLink = links[links.length - 2];
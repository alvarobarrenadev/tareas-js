console.log("Empezamos con los ejercicios");

// 1. Selecciona el antepenúltimo párrafo de los div y añádele la clase "portatil" si no la tiene, y en caso de tenerla, que la elimine.
let divs = document.getElementsByTagName("div");
for (let div of divs) {
  let divParagraphs = div.getElementsByTagName("p");
  if (divParagraphs.length >= 3) {
    let thirdTlistastParagraph = divParagraphs[divParagraphs.length - 3];
    thirdTlistastParagraph.classList.toggle("portatil")
  }
}


// 2. Selecciona el padre del primer li de la página
let firstLi = document.getElementsByTagName("li")[0].parentElement;


// 3. Para todas las listas ordenadas que tengan únicamente dos elementos, insertar otro elemento entre los dos elementos
let orderedLists = document.getElementsByTagName("ol");
for (let list of orderedLists) {
  if (list.children.length === 2) {
    let newLi = document.createElement("li");
    newLi.textContent = "Elemento intermedio insertado";
    list.insertBefore(newLi, list.lastElementChild);
  }
}


// 4. Añade el atributo class con valor azul al último elemento p
let paragraphs = document.getElementsByTagName("p");
let lastP = paragraphs[paragraphs.length - 1];
lastP.classList.add("azul");


// 5. Comprueba los elementos div que tengan el atributo class, si lo tiene se debe añadir el valor container, y si no lo tiene no se hace nada.
// Bucle clásico
// for (let div of divs) {
//   if (div.hasAttribute("class")) {
//     div.classList.add("container");
//   }
// }

// Funcional
let exerciseFive = document.querySelectorAll("div[class]").forEach(div => {div.classList.add("container")});


// 6. Obtén el valor del atributo alt de la última imagen
let images = document.getElementsByTagName("img");
if (images.length > 0) {
  let lastImageAlt = images[images.length - 1].alt;
  console.log(lastImageAlt)
} else {
  console.log("No hay imágenes");
}


// 7. Suponiendo que tenemos <span class="textoAzul" id="primerspan2">Hola</span>. Obtén los valores de los atributos y los imprimes por pantalla uno por uno.
let firstSpan = document.getElementById("primerspan2");
for (let attr of firstSpan.attributes) {
  console.log(`El atributo "${attr.name}" contiene "${attr.value}"`);
}


// 8. Si tenemos lo siguiente, modifica el estilo para que el font-size sea de 40px, el color sea naranja y el texto se alinee a la derecha.
// h1{
//   font-size: 20px;
//   color: red;
//   text-align: center;
// }

let h1 = document.querySelector("h1");
h1.style.fontSize = "20px";
h1.style.color = "red";
h1.style.textAlign = "center"

// document.querySelectorAll("h1").forEach(h1 => {
//   h1.style.fontSize = "20px";
//   h1.style.color = "red";
//   h1.style.textAlign = "center";
// });


// 9. Suponiendo que tenemos el siguiente código. Añade debajo un tercer p que diga "soy el tres";
// <div id="parrafos">
//   <p>Hola soy el uno</p>
//   <p>Hola soy el dos</p>
// </div>
let divPs = document.getElementById("parrafos");
let newParagraph = document.createElement("p");
newParagraph.textContent = "Hola soy el tres";
divPs.appendChild(newParagraph)


// 10. Haz lo mismo que el anterior pero en lugar de insertarlo debajo, insertalo en medio, el p tendrá el texto "Hola yo soy el uno y medio".
let newParagraph2 = document.createElement("p");
newParagraph2.textContent = "Hola soy el uno y medio";
divPs.insertBefore(newParagraph2, divPs.lastElementChild)


// 11. Añade un nuevo elemento a una lista de modo que ocupe la primera posición.
let newLi2 = document.createElement("li")
newLi2.textContent = "Hola soy un nuevo li";

let list = document.querySelector("ul");
list.insertBefore(newLi2, list.firstElementChild);


// 12. Obtén el primer elemento de entre todos los que tengan la clase 'class' y bórralo.
let firstElementClass = document.querySelector(".class")?.remove(); // Si existe .class se elimina el elemento si no se no lanza error de que no existe


// 13. Convierte el primer elemento de una lista en un enlace.
let listElement = document.querySelector("ul");
let firstChild = listElement.firstElementChild

let newA = document.createElement("a");
newA.textContent = firstChild.textContent;

listElement.insertBefore(newA, firstChild);
firstChild.remove();


// 14. Borra el atributo title de todas las imágenes con la clase 'img'.
let images2 = document.querySelectorAll("img.img");
for (let img of images2) {
  img.removeAttribute("title");
}


// 15. Añade un punto final al texto contenido por las etiquetas p.
for (let p of paragraphs) {
  let newText = document.createTextNode(".");
  p.append(newText)
}


// 16. De un conjunto de etiquetas article hijos de un section con la clase 'products', selecciona aquellos que tengan la clase 'oferta' y establece el valor de su atributo data-iva a cero
let articles = document.querySelectorAll("section.products > article.oferta");
for (let article of articles) {
  // With setAttribute
  article.setAttribute("data-iva", "0");
  // With dataset
  article.dataset.iva = "0";
}


// 17. Añade el texto "Modificado" al tercer li de todos los ul
let uls = document.getElementsByTagName("ul");
for (let ul of uls) {
  let newTextNode = document.createTextNode(": Modificado");
  if (ul.children.length >= 3) {
    ul.children[2].append(newTextNode);
  }
}


// 18. Incluye la clase porelasterisco en todos los p que tengan la clase preparado
let ps = document.querySelectorAll("p.preparado");
for (let p of ps) {
  p.classList.add("porelasterisco");
}
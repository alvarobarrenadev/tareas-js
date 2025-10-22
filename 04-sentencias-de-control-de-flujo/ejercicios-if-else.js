// Estructuras de control: Condicionales

// Ejercicio 1
let ingresarNumero = Number(prompt("Introduce un número:"));
if (ingresarNumero % 2 === 0) {
  alert(`El número ${ingresarNumero} es par`);
} else {
  alert(`El número ${ingresarNumero} es impar`);
}

// Ejercicio 2
let mesIf = Number(prompt("Introduce un número de mes:"));
if (
  mesIf === 1 ||
  mesIf === 3 ||
  mesIf === 5 ||
  mesIf === 7 ||
  mesIf === 8 ||
  mesIf === 10 ||
  mesIf === 12
) {
  alert(`El mes ${mesIf} tiene 31 días.`);
} else if (mesIf === 4 || mesIf === 6 || mesIf === 11) {
  alert(`El mes ${mesIf} tiene 30 días.`);
} else if (mesIf === 2) {
  alert(`El mes ${mesIf} tiene 28 días.`);
} else {
  alert("Introduce un valor válido.");
}

// Ejercicio 3
let pregunta1 = String(prompt("¿Cómo se llamaba tu perro de la infancia?"));
let pregunta2 = String(
  prompt("¿Cuántos años tenías cuando te caíste de una bicicleta?")
);
let pregunta3 = String(prompt("¿Cuál es tu color favorito?"));

let respuesta1 = "rodolfo";
let respuesta2 = "3";
let respuesta3 = "morado";

let newPassword;

if (
  pregunta1 === respuesta1 &&
  pregunta2 === respuesta2 &&
  pregunta3 === respuesta3
) {
  newPassword = String(prompt("Introduce la nueva contraseña:"));
  alert("Contraseña cambiada correctamente.");
} else {
  alert("No has respondido a todas las preguntas correctamente.");
}

// Ejercicio 4
let ingresarNota = Number(prompt("Introduce la nota de tu examen:"));

if (ingresarNota >= 5 && ingresarNota <= 10) {
  alert("Aprobado. ¡Enhorabuena!");
} else if (ingresarNota <= 4.99) {
  alert("Suspenso. Tienes que recuperar.");
} else {
  alert("Introduce una nota válida entre el 1 y 10.");
}

// Ejercicio 5
let ingresarLetra = String(prompt("Introduce una letra:"));

if (
  ingresarLetra.toLowerCase() === "a" ||
  ingresarLetra.toLowerCase() === "e" ||
  ingresarLetra.toLowerCase() === "i" ||
  ingresarLetra.toLowerCase() === "o" ||
  ingresarLetra.toLowerCase() === "u"
) {
  alert(`La letra ${ingresarLetra} pertenece al grupo A.`);
} else if (
  ingresarLetra.toLowerCase() === "b" ||
  ingresarLetra.toLowerCase() === "c" ||
  ingresarLetra.toLowerCase() === "d" ||
  ingresarLetra.toLowerCase() === "f" ||
  ingresarLetra.toLowerCase() === "g"
) {
  alert(`La letra ${ingresarLetra} pertenece al grupo B.`);
} else if (
  ingresarLetra.toLowerCase() === "h" ||
  ingresarLetra.toLowerCase() === "j" ||
  ingresarLetra.toLowerCase() === "k" ||
  ingresarLetra.toLowerCase() === "l" ||
  ingresarLetra.toLowerCase() === "m"
) {
  alert(`La letra ${ingresarLetra} pertenece al grupo C.`);
} else if (
  ingresarLetra.toLowerCase() === "n" ||
  ingresarLetra.toLowerCase() === "p" ||
  ingresarLetra.toLowerCase() === "q" ||
  ingresarLetra.toLowerCase() === "r"
) {
  alert(`La letra ${ingresarLetra} pertenece al grupo D.`);
} else if (
  ingresarLetra.toLowerCase() === "s" ||
  ingresarLetra.toLowerCase() === "t" ||
  ingresarLetra.toLowerCase() === "v" ||
  ingresarLetra.toLowerCase() === "w" ||
  ingresarLetra.toLowerCase() === "x" ||
  ingresarLetra.toLowerCase() === "y" ||
  ingresarLetra.toLowerCase() === "z"
) {
  alert(`La letra ${ingresarLetra} pertenece al grupo E.`);
} else {
  alert("Introduce una letra válida.")
}

// Ejercicio 6
let tipoDePan = String(prompt("Selecciona el tipo de pan (Blanco, Negro o Integral):"));
let ingrediente1 = String(prompt("Selecciona el primer ingrediente (Tomate, Lechuga o Pimiento):"));
let ingrediente2 = String(prompt("Selecciona el segundo ingrediente (Cebolla, Aceituna o Pepino):"));
let aderezo = String(prompt("Selecciona el aderezo (Mostaza, Mayonesa o Picante):"));
let bebida = String(prompt("Selecciona la bebida (Coca Cola, Pepsi o Sprite):"));

// Pan
if (
  tipoDePan.toLowerCase() === "blanco" ||
  tipoDePan.toLowerCase() === "negro" ||
  tipoDePan.toLowerCase() === "integral") {
    alert(`Pan ${tipoDePan} ha sido seleccionado.`)
} else {
    alert("Ha ocurrido un error, el pedido saldrá incompleto.");
  }
  
// Ingrediente 1
if (
  ingrediente1.toLowerCase() === "tomate" ||
  ingrediente1.toLowerCase() === "lechuga" ||
  ingrediente1.toLowerCase() === "pimiento") {
    alert(`Ingrediente 1 '${ingrediente1}' seleccionado.`);
} else {
    alert("Ha ocurrido un error, el pedido saldrá incompleto.");
}

// Ingrediente 2
if (
  ingrediente2.toLowerCase() === "cebolla" ||
  ingrediente2.toLowerCase() === "aceituna" ||
  ingrediente2.toLowerCase() === "pepino") {
    alert(`Ingrediente 2 '${ingrediente2}' seleccionado.`);
} else {
    alert("Ha ocurrido un error, el pedido saldrá incompleto.");
}

// Aderezo
if (
  aderezo.toLowerCase() === "mostaza" ||
  aderezo.toLowerCase() === "mayonesa" ||
  aderezo.toLowerCase() === "picante") {
    alert(`Aderezo '${aderezo}' seleccionado.`);
} else {
    alert("Ha ocurrido un error, el pedido saldrá incompleto.");
}

// Bebida
if (
  bebida.toLowerCase() === "coca cola" ||
  bebida.toLowerCase() === "pepsi" ||
  bebida.toLowerCase() === "sprite") {
    alert(`Bebida '${bebida}' seleccionada.`);
} else {
    alert("Ha ocurrido un error, el pedido saldrá incompleto.");
}

alert(`Pedido completado:\nTipo de pan: ${tipoDePan}\nIngrediente 1: ${ingrediente1}\nIngrediente 2: ${ingrediente2}\nAderezo ${aderezo}\nBebida: ${bebida}`);


// Ejercicio 7
const opciones = ["piedra", "papel", "tijera"];
let puntosJugador = 0; 
let puntosMaquina = 0; 

for (let i = 0; i <= 4; i++) {
  alert(`Empieza la ronda ${i + 1}`);
  
  const jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();
  const numeroAleatorio = Math.floor(Math.random() * 3);
  const maquina = opciones[numeroAleatorio];

  if (jugador === maquina) {
    alert("Empate");
  } else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "papel" && maquina === "piedra") ||
    (jugador === "tijera" && maquina === "papel")
    ) {
      alert("Humano gana");
      puntosJugador++;
  } else if (
    (maquina === "piedra" && jugador === "tijera") ||
    (maquina === "papel" && jugador === "piedra") ||
    (maquina === "tijera" && jugador === "papel")
  ) {
      alert("Máquina gana");
      puntosMaquina++;
  } else {
    alert("Opción no válida. Escribe piedra, papel o tijera.");
  }
}

alert(`Marcador final:
- Jugador: ${puntosJugador}
- Máquina: ${puntosMaquina}`);

if (puntosJugador > puntosMaquina) {
  alert("Humano gana el juego");
} else if (puntosMaquina > puntosJugador) {
  alert("Máquina gana el juego");
} else {
  alert("Empate");
}


// Ejercicio 7
const colores = ["rojo", "amarillo", "verde", "azul"];
let simonColores = [];
let usuarioColores = [];
let acierto = true;

for (let i = 0; i <= 4; i++) {
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  simonColores.push(colorAleatorio);
}

alert(`Simón dice:\n${simonColores.join("\n")}`);

for (let i = 0; i <= 4; i++) {
  const color = prompt(`Introduce el color número ${i + 1}:`).toLowerCase();
  usuarioColores.push(color);
}
// alert(usuarioColores);

for (let i = 0; i <= 4; i++) {
  if (simonColores[i] !== usuarioColores[i]) {
    acierto = false;
    break;
  }
}

if (acierto) {
  alert("Has acertado toda la secuencia de colores. ¡Enhorabuena!");
} else {
  alert("No has acertado la secuencia, vuelve a intentarlo.")
}
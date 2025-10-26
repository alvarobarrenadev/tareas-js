// Ejercicio 1
let numerosPares;
for (let i = 0; i <= 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Ejercicio 2
const nombrePlaylist = String(prompt("Introduce el nombre de la playlist:"));
const numeroCanciones = Number(prompt("¿Cuántas canciones quieres agregar?"));
let cancionesElegidas = [];

for (let i = 0; i < numeroCanciones; i++) {
  const nuevaCancion = String(prompt(`Introduce la canción número ${i + 1}:`));
  cancionesElegidas.push(nuevaCancion);

  const cancionesRestantes = numeroCanciones - (i + 1);
  alert(`Te quedan ${cancionesRestantes} canciones por añadir.\n
    Playlist con las canciones hasta ahora:\n- ${cancionesElegidas.join("\n- ")}`);
}

alert(`La playlist ${nombrePlaylist} ha sido creada con éxito:\n- ${cancionesElegidas.join("\n- ")}`);


// Ejercicio 3
const buscarNumero = String(prompt("¿Quieres buscar el número mayor, menor o ambos?")).toLowerCase();
const limiteNumeros = Number(prompt("¿Entre cuántos números quieres buscar?"));
let numeroGuardado = [];

for (let i = 0; i < limiteNumeros; i++) {
  const nuevoNumero = Number(prompt(`Introduce el numero ${i + 1}:`));
  numeroGuardado.push(nuevoNumero);  
}

if (buscarNumero === 'mayor') {
  alert(`Números introducidos: ${numeroGuardado.join(", ")}\nNúmero mayor: ${Math.max(... numeroGuardado)}`); // Spread operator (...) para sacar los números uno por uno
} else if (buscarNumero === 'menor') {
  alert(`Números introducidos: ${numeroGuardado.join(", ")}\nNúmero menor: ${Math.min(... numeroGuardado)}`);
} else if (buscarNumero === 'ambos') {
  alert(`Números introducidos: ${numeroGuardado.join(", ")}\nNúmero mayor: ${Math.max(... numeroGuardado)}\nNúmero menor: ${Math.min(... numeroGuardado)}`);
} else {
  alert("Solo puedes buscar el número mayor, menor o ambos.");
}


// Ejercicio 4
const numeroUsuario = Number(prompt("Introduce un número:"));
let factorial = 1;

for (let i = 1; i <= numeroUsuario; i++) {
  factorial *= i;
}
alert(`El factorial de ${numeroUsuario} es ${factorial}`);



// Ejercicio 5
const vueltas = Number(prompt("Introduce el número de vueltas a realizar:"));
let segundosVuelta;
let segundos = [];
let mensaje = "";
let suma = 0;

for (let i = 0; i < vueltas; i++) {
  const segundosVuelta = Number(prompt(`Introduce los segundos de la vuelta ${i + 1}`));
  segundos.push(segundosVuelta);
}

for (let i = 0; i < segundos.length; i++) {
  mensaje += `Vuelta ${i + 1}: ${segundos[i]}s\n`;
}

for (let i = 0; i < segundos.length; i++) {
  suma += segundos[i];
}
const promedio = suma / vueltas;

alert(`${mensaje}Promedio: ${promedio.toFixed(2)}s`);



// Ejercicio 6
const opciones = ["piedra", "papel", "tijera"];
const rondas = Number(prompt("Introduce las rondas que quieres jugar:"));
let puntosJugador = 0;
let puntosMaquina = 0;

for (let i = 0; i < rondas; i++) {
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
// Método repeat()
for (let i = 0; i < 13; i++) {
  console.log('*'.repeat(i));
}

// Forma manual
for (let i = 1; i <= 13; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += "*";
  }
  console.log(fila);
}
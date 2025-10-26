// Condicional switch

// Ejercicio 1
const numeroUser = Number(prompt("Introduce un número de mes"));
const meses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

switch (true) {
  case numeroUser >= 1 && numeroUser <= 12:
    alert(`El mes ${numeroUser} es ${meses[numeroUser - 1].toLowerCase()}.`);
    break;
  default:
    alert(`El número ${numeroUser} no es válido. Debe ser un número entre el 1 y el 12.`);
    break;
}


// Ejercicio 2
const estacionAño = String(prompt("Introduce una estación del año:").toLowerCase());
const estaciones = [
  "Primavera", "Verano",
  "Otoño", "Invierno"
];

switch (true) {
  case estacionAño === "primavera":
    alert(`La estación de ${estacionAño} empieza el 20 de marzo y termina el 21 de junio.`);
    break;
  case estacionAño === "verano":
    alert(`La estación de ${estacionAño} empieza el 21 de junio y termina el 22 de septiembre.`);
    break;
  case estacionAño === "otoño":
    alert(`La estación de ${estacionAño} empieza el 22 septiembre y termina el 21 de diciembre.`);
    break;
  case estacionAño === "invierno":
    alert(`La estación de ${estacionAño} empieza el y 21 de diciembre y termina el 20 de marzo.`);
    break;
  default:
    alert("Introduce una estación del año válida.");
    break;
}


// Ejercicio 3
const primerNumero = Number(prompt("Introduce el primer número:"));
const segundoNumero = Number(prompt("Introduce el segundo número:"));
const operacion = String(prompt("¿Qué operación quieres hacer? (+ | - | * | /)")).toLowerCase();
let resultado;

switch (operacion) {
  case "+":
    resultado = primerNumero + segundoNumero;
    break;
  case "-":
    resultado = primerNumero - segundoNumero;
    break;
  case "*":
    resultado = primerNumero * segundoNumero;
    break;
  case "/":
    resultado = primerNumero / segundoNumero;
    break;
  default:
    alert("Introduce una operación válida.")
    break;
}

alert(`${primerNumero} ${operacion} ${segundoNumero} = ${resultado}`);


// Ejercicio 4
const encenderTV = String(prompt("¿Quieres encender la televisión? (si/no)")).toLowerCase();
let menu = `¿Qué quieres hacer? (0 - 6)
  - 1. Cambiar canal
  - 2. Siguiente canal
  - 3. Anterior canal
  - 4. Subir volumen
  - 5. Bajar volumen
  - 6. Mutear
  - 0. Salir`;
let opcionesMandoTV;
let numeroCanal = 1; // Canal inicial
let nivelVolumen = 10; // Volumen incial (0 - 100)

if (encenderTV === "si") {
  opcionesMandoTV = Number(prompt(menu));
  while (opcionesMandoTV != 0) {
    switch (opcionesMandoTV) {
      case 1:
        numeroCanal = Number(prompt("Introduce un número de canal (0 al 99)"));
        alert(`Cambiando a canal ${numeroCanal}...`);
        break;
      case 2:
        numeroCanal += 1;
        alert(`Cambiando al canal ${numeroCanal}...`);
        break;
      case 3:
        numeroCanal -= 1;
        alert(`Cambiando al canal ${numeroCanal}...`);
        break;
      case 4:
        nivelVolumen += 5;
        alert("Subiendo el volumen...");
        break;
      case 5:
        nivelVolumen -= 5;
        alert("Bajando el volumen...");
        break;
      case 6:
        nivelVolumen = 0;
        alert("Muteado.");
        break;
      default:
        alert("Selecciona una opción correcta");
        break;
    }
    opcionesMandoTV = Number(prompt(menu));
  }
  alert(`Estás en el canal ${numeroCanal} y el volumen actual es ${nivelVolumen}`);
} else if (encenderTV === "no") {
    alert("Programa finalizado.");
} else {
    alert("Introduce una opción correcta.");
}
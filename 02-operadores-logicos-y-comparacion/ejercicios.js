// Ejercicio 1
let num1Ej1 = Number(prompt("Introduce el primer número: "));
let num2Ej1 = Number(prompt("Introduce el segundo número: "));
let num3Ej1 = Number(prompt("Introduce el tercer número: "));
let resultadoEj1 = num1Ej1 > 100 || num2Ej1 > 100 || num3Ej1 > 100;

// if (num1Ej1 > 100 || num2Ej1 > 100 || num3Ej1 > 100) {
//   resultadoEj1 = true;
// }
// else {
//   resultadoEj1 = false;
// }
alert(resultadoEj1);

// Ejercicio 2
let numRangoInferior = Number(prompt("Introduce el límite inferior:"));
let numRangoSuperior = Number(prompt("Introduce el límite superior:"));
let numRandom = Number(prompt("Introduce un número cualquiera"));

let resultadoEj2 =
  numRandom >= numRangoInferior && numRandom <= numRangoSuperior
    ? `El número se encuentra dentro del rango del ${numRangoInferior} al ${numRangoSuperior}`
    : "El número no se encuentra dentro del rango";

// Compara entre dos números: numRandom >= numRangoInferior && numRandom <= numRangoSuperior
// if (numRandom >= numRangoInferior && numRandom <= numRangoSuperior) {
//   resultadoEj2 = `El número se encuentra dentro del rango del ${numRangoInferior} al ${numRangoSuperior}`;
// }
// else {
//   resultadoEj2 = "El número no se encuentra dentro del rango";
// }

alert(resultadoEj2);

// Ejercicio 3
let pregunta1Ej3 = prompt("¿Te has hecho tatuajes recientemente?");
let pregunta2Ej3 = prompt("¿Has tenido o tienes hepatitis?");
let pregunta3Ej3 = prompt("¿Tienes anemia?");
let donaSangre;
if (pregunta1Ej3 === "si" || pregunta2Ej3 === "si" || pregunta3Ej3 === "si") {
  donaSangre = "No puedes donar sangre";
} else {
  donaSangre = "Sí puedes donar sangre";
}

alert(donaSangre.toLowerCase);

// Ejercicio 4
let usuarioGuardado = "admin";
let passwdGuardada = "1234";

let loginUser = prompt("Introduce tu usuario");
let passwdUser = prompt("Introduce tu contraseña");
let accesoAuth =
  loginUser === usuarioGuardado && passwdUser === passwdGuardada
    ? "Has sido autenticado con éxito."
    : "Inténtelo de nuevo, usuario o contraseña incorrectos.";

alert(accesoAuth);

// Ejercicio 5
let aceiteCoche = prompt("¿El coche tiene aceite? (si/no)");
let aguaCoche = prompt("¿El coche tiene agua? (si/no)");
let neumaticosCoche = prompt(
  "¿Los neumáticos del coche tienen presión? (si/no)"
);
let mensajeEj5 =
  aceiteCoche === "si" && aguaCoche === "si" && neumaticosCoche === "si"
    ? "Tu coche no necesita mantenimiento."
    : "Tu coche necesita mantenimiento.";
alert(mensajeEj5.toLowerCase);

// Ejercicio 6
let esMiembro = prompt("¿Eres miembro del club? (si/no)");
let cuotaAlDia = prompt("¿Tienes la cuota al día? (si/no)");
let autorizacion = prompt("¿Tienes autorización? (si/no)");
let accesoPermitido =
  (esMiembro === "si" && cuotaAlDia === "si") ||
  (esMiembro === "no" && autorizacion === "si")
    ? "Acceso permitido"
    : "Acceso denegado";
alert(accesoPermitido);

// Ejercicio 7
let notaTrimestre1 = Number(
  prompt("Introduce la nota final del primer trimestre")
);
let notaTrimestre2 = Number(
  prompt("Introduce la nota final del segundo trimestre")
);
let notaTrimestre3 = Number(
  prompt("Introduce la nota final del tercer trimestre")
);

const numeroMayor = Math.max(notaTrimestre1, notaTrimestre2, notaTrimestre3);
const numerosIguales =
  notaTrimestre1 === notaTrimestre2 ||
  notaTrimestre1 === notaTrimestre3 ||
  notaTrimestre2 === notaTrimestre3
    ? "Hay notas que tienen el mismo resultado"
    : "No hay notas que tienen el mismo resultado";

alert(`El número mayor es el ${numeroMayor}.\n${numerosIguales}.`);

// Ejercicio 8
let num1Ej8 = Number(prompt("Introduce el primer número:"));
let num2Ej8 = Number(prompt("Introduce el segundo número:"));
const esMayorEj8 = Math.max(num1Ej8, num2Ej8);
let esIgualEj8 =
  num1Ej8 === num2Ej8
    ? "Los dos números son iguales"
    : "No hay números iguales";

alert(`El número mayor es el ${esMayorEj8}.\n${esIgualEj8}.`);

// Ejercicio 9
let num1Ej9 = Number(prompt("Introduce el primer número:"));
let num2Ej9 = Number(prompt("Introduce el segundo número:"));
let num3Ej9 = Number(prompt("Introduce el tercer número:"));
const esMayorEj9 = Math.max(num1Ej9, num2Ej9);
let esIgualEj9 =
  num1Ej9 === num2Ej9 || num1Ej9 === num3Ej9 || num2Ej9 === num3Ej9
    ? "Los dos números son iguales"
    : "No hay números iguales";

alert(`El número mayor es el ${esMayorEj9}.\n${esIgualEj9}.`);

// Ejercicio 10
let aceptaTerminosYCondiciones = prompt(
  "¿Aceptas los Términos y Condiciones de Uso? (si/no)"
);
let esAceptado;

while (aceptaTerminosYCondiciones.toLowerCase === "no") {
  if (aceptaTerminosYCondiciones.toLocaleLowerCase === "si") {
    esAceptado = "Continuando con el proceso...";
    alert(esAceptado);
  } else {
    esAceptado =
      "No se puede continuar con el proceso a menos que aceptes los Términos y Condiciones de Uso.";
    alert(esAceptado);
    aceptaTerminosYCondiciones = prompt(
      "¿Aceptas los Términos y Condiciones de Uso? (si/no)"
    );
  }
}

// Ejercicio 11
let pregunta1 = prompt("¿La capital de España es Madrid? (si/no)");
let pregunta2 = prompt("¿Los perros vuelan? (si/no)");
let pregunta3 = prompt("¿Es necesario ir a la universidad para tener un buen trabajo? (si/no)");
let resultadoEj11 =
  pregunta1 === "si" &&
  pregunta2 === "no" &&
  pregunta3 === "no"
    ? "¡Enhorabuena, has contestado bien a todas las preguntas!"
    : "No has respondido bien a todas las preguntas. Vuelve a intentarlo.";

alert(resultadoEj11);


// Ejercicio 12
let opcionNumero = Number(prompt("¿Del 1 al 10 cúanto te gusta entrenar en el gimnasio?"));

while (opcionNumero < 1 || opcionNumero > 10 || isNaN(opcionNumero)) {
  alert("Debes introducir un número del 1 al 10 para poder continuar");
  opcionNumero = Number(prompt("¿Del 1 al 10 cúanto te gusta entrenar en el gimnasio?"));
}

switch (true) {
  case (opcionNumero >= 1 && opcionNumero <= 3):
    alert("¡WOW no te gusta nada entrenar el gimnasio!");
    break;

  case (opcionNumero >= 4 && opcionNumero <= 5):
    alert("Al menos algo te atrae");
    break;

  case (opcionNumero >= 6 && opcionNumero <= 8):
    alert("Te gusta bastante");
    break;

  case (opcionNumero >= 9 && opcionNumero <= 10):
    alert("¡Eres un gym rat!");
    break;

  default:
    alert("Ha ocurrido un error, vuelve a intentarlo.")
    break;
}


// Ejercicio 13
let opcionNota = Number(prompt("Introduce la nota de tu evaluación:"));

switch (true) {
  case opcionNota <= 4.99:
    alert("Suspenso");
    break;
  
  case opcionNota >= 5 && opcionNota <= 6.99:
    alert("Aprobado");
    break;

  case opcionNota >= 7 && opcionNota <= 8.99:
    alert("¡Muy bien!");
    break;

  case opcionNota >= 9 && opcionNota <= 10:
    alert("¡Sobresaliente!");
    break;

  default:
    alert("Ha ocurrido un error, vuelve a intentarlo de nuevo.");
    break;
}
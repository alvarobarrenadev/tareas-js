// Creación de Strings
// Comillas simples
let miCadena = 'Esta es mi cadena';

// Comillas dobles
let otraCadena = "Esta es mi otra cadena";

// Backtips
let cadenaBack = `Esta es mi cadena`;

// Concatenación con +
let firstName = "Álvaro";
let lastName = "Barrena";
let fullName = firstName + ' ' + lastName;

// Concatenación con template literals
fullName = `Mi nombre completo es ${firstName} ${lastName}`;

// Concatenación de array con join()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let frutas = fruits.join(' ');

// Concatenación con concat
let nombre = "Álvaro";
fullName = nombre.concat("", "Barrena");

// Cómo escapar caracteres, por ejemplo ' o ". Alternando comillas o con caracter de escape o template literals
let c = `Esto es una "comilla doble"`;
c = "Esto es una \"comilla doble\""

// Strings largos con saltos de línea
let poema = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Molestias quaerat delectus deleniti,
id soluta quia vero nisi placeat saepe.`;

// strings primitivos vs strings objects, son inmutables
// const stringPrimitivo = 'Soy un string primitivo'
// console.log(typeof stringPrimitivo);
// const stringObjeto = new String('Hola soy un string de tipo objeto')
// console.log(typeof stringObjeto);

// Métodos de string
let pruebas = "Hola qué tal estás";
console.log(pruebas.length);
console.log(pruebas.includes('a'));
console.log(pruebas.indexOf('q')); // Devuelve -1 cuando no está y el número que corresponde cuando SÍ está
console.log(pruebas.slice(0, 12)); // Hola qué tal
console.log('hola caracola'.replace('a', 'e')); // Modifica 1 caracter
console.log('hola caracola'.replaceAll('a', 'e')); // Modifica todos
console.log('hola caracola'.repeat(5)); // Repite 5 veces el string
console.log('   hola caracola    '.trim()); // Quita espacios al principio y al final
console.log('Álvaro;alvaro@gmail.com;Calle Polonia 1;Cracovia'.split(' ')); // Convierte string en array


//If, else , else if
let edad = 18;

if (edad === 18) {
  console.log("Es mayor de edad")
} else if (edad >= 13){
  console.log("Es adolescente")
} else {
  console.log("Es menor de 13 años")
}

// Condicional ternario
let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

// Switch
firstName = 'Álvaro';
switch(firstName.length) {
  case 6:
    console.log("Tu nombre tiene 6 caracteres");
    break;
  case 4:
    console.log("Tu nombre tiene 4 caracteres");
    break;
  default:
    console.log(`Tu nombre no tiene ni 4 ni 6 caracteres, tiene ${firstName.length} caracteres`);
    break;
}

// While (primero pregunta y luego ejecuta)
let contador = 0;
while (contador < 11) {
  console.log(contador);
  contador++;
}

// Do/While (primero ejecuta y luego pregunta)
let count = 0;

do {
  console.log(count);
  contador++;

} while (count < 11)


// For
for (let i = 0; i < 11; i++) { //Inicialización - Condición - Incremento
  console.log(i);
}
// Ejercicio 1
const nombre1 = prompt("Introduce tu nombre: ");
const apellidos1 = prompt("Introduce tus apellidos: ");
const mensaje1 = `Hola ${nombre} ${apellidos}. Bienvenido a Ada`;
alert(mensaje1);


// Ejercicio 2
const sabor1 = prompt("Introduce el primer sabor del helado: ");
const sabor2 = prompt("Introduce el segundo sabor del helado: ");
const sabor3 = prompt("Introduce el tercer sabor del helado: ");
const mensaje2 = `Aquí tiene su helado de ${sabor1}, ${sabor2} y ${sabor3}`;
alert(mensaje2);


// Ejercicio 3
const nombre3 = prompt("Introduce tu nombre: ");
const apellidos3 = prompt("Introduce tus apellidos: ");
const edad3 = prompt("Introduce tu edad: ");
const nacionalidad3 = prompt("Introduce tu nacionalidad: ");
const dni3 = prompt("Introduce tu DNI: ");
const mensaje3 = `Nuevo usuario agregado al sistema: ${nombre3} ${apellidos3}, ${edad3} años, con nacionalidad ${nacionalidad3} y DNI ${dni3}`;
alert(mensaje3);


// Ejercicio 4
const nombrePlaylist = prompt("Introduce el nombre de la nueva playlist: ");
const cancion1 = prompt("Introduce la primera canción: ");
const cancion2 = prompt("Introduce la segunda canción: ");
const cancion3 = prompt("Introduce la tercera canción: ");
const mensaje4 = `Se ha creado la playlist '${nombrePlaylist}' con las canciones '${cancion1}', '${cancion2}' y '${cancion3}'.`;
alert(mensaje4);


// Ejercicio 5
const calle = prompt("Introduce la calle: ");
const numeroCalle = prompt("Introduce el número: ");
const codigoPostal = prompt("Introduce el código postal: ");
const ciudad = prompt("Introduce la ciudad: ");
const pais = prompt("Introduce el país: ");
const mensaje5 = `La dirección que ha ingresado es: '${calle} ${numeroCalle}, ${codigoPostal}, ${ciudad}, ${pais}'`;
alert(mensaje5);


// Ejercicio 6
const meses29 = ["Febrero"];
const meses30 = ["Abril", "Junio", "Septiembre", "Noviembre"];
const meses31 = [
  "Enero",
  "Marzo",
  "Mayo",
  "Julio",
  "Agosto",
  "Octubre",
  "Diciembre",
];
alert(`Mes con 29 días: ${meses29.join(", ")}.`);
alert(`Meses con 30 días: ${meses30.join(", ")}.`);
alert(`Meses con 31 días: ${meses31.join(", ")}.`);


// Ejercicio 7
const integrantesFamilia = ["Juan" , " Pedro", " Marta", " María", " Julia"];
alert(`Los integrantes de la familia son: ${integrantesFamilia.join(", ")}`);


// Ejercicio 8
const movies = ["Divergent", "Gladiator I", "Top Gun"];
const books = ["Psycho-cybernetics", "Can't Hurt Me", "The Surrender Experiment"];
const music = ["Classical", "Pop", "Trap"];
alert(`My favorite movies are: ${movies.join(", ")}.`);
alert(`My favorite books are: ${books.join(", ")}.`);
alert(`My favorite music are: ${music.join(", ")}.`);


// Ejercicio 9
let age = Number(prompt("Enter your age:"));
const equivalent = age * 7;
alert(`If you were a dog you'd be ${equivalent} years.`);


// Ejercicio 10
let minutes = Number(prompt("Enter an amount of time in minutes:"));
const seconds = minutes * 60;
alert(`${minutes} minutes are ${seconds} seconds.`);


// Ejercicio 11
let days = Number(prompt("Enter an amount of days:"));
const dayToSeconds = 24 * 60 * 60;
const seconds1 = days * dayToSeconds;
alert(`${days} days are ${seconds1} seconds.`);


// Ejercicio 12
let kilometers = Number(prompt("Enter an amount of kilometers: "));
const miles = kilometers * 0.621371;
alert(`${kilometers} km are ${parseFloat(miles.toFixed(2))} miles`);


// Ejercicio 13
let base = Number(prompt("Enter the base of the triangle:"));
let heightTriangle = Number(prompt("Enter the height of the triangle:"));
const area = (base * heightTriangle) / 2;
alert(`The area of the triangle is ${area} cm²`);


// Ejercicio 14
let heightRectangle = Number(prompt("Enter the height of the rectangle:"));
let widthRectangle = Number(prompt("Enter the width of the rectangle:"));
const perimeter = 2 *(heightRectangle + widthRectangle);
alert(`The perimeter of the rectangle is ${perimeter} cm`);


// Ejercicio 15
let numberPercentage = Number(prompt("Enter a number:"))
let percentage = Number(prompt("Enter a percentage:"));
const finalPercentage = numberPercentage * (percentage / 100);
alert(`${percentage}% of ${numberPercentage} is ${finalPercentage}`);


// Ejercicio 16
const distance = Number(prompt("Enter distance (km):"));
let walkTime = distance / 5;
let bikeTime = distance / 10;
let carTime = distance / 90;
alert(`By walking: ${walkTime} hours`);
alert(`By bike: ${bikeTime} hours`);
alert(`By car: ${carTime.toFixed(2)} hours`);


// Ejercicio 17
const destination1 = prompt("Enter your first layover:");
const destination2 = prompt("Enter your second layover:");
const destination3 = prompt("Enter your third layover:");
const timeDestination1 = 4;
const timeDestination2 = 3;
const timeDestination3 = 5;
const finalDuration = timeDestination1 + timeDestination2 + timeDestination3;
alert(`First layover: ${destination1} - Duration: ${timeDestination1} hours`);
alert(`Second layover: ${destination2} - Duration: ${timeDestination2} hours`);
alert(`Third layover: ${destination3} - Duration: ${timeDestination3} hours`);
alert(`Total duration of the flight: ${finalDuration} hours`);


// Ejercicio 18
let gameNumber = Number(prompt("Enter an game number to continue"));
let amount = Number(prompt("Enter the increment amount:"));
let total = gameNumber;

for (let i = 1; i <= 5; i++) {
  alert(`Increment ${i} - Total: ${total += amount}`);
}


// Ejercicio 19
const celsius = Number(prompt("Enter a temperature in degrees Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
alert(`${celsius} degrees Celsius --> ${fahrenheit} degrees Fahrenheit`);


// Ejercicio 20
const firstNumber = Number(prompt("Enter the first number:"));
const secondNumber = Number(prompt("Enter the second number:"));
let isMultiple = firstNumber % secondNumber === 0;
let result =
  isMultiple
    ? `El número ${firstNumber} es múltiplo de ${secondNumber}`
    : `El número ${firstNumber} no es múltiplo de ${secondNumber}`;

alert(result);


// Ejercicio 21
let secondsInput = Number(prompt("Enter an amount (seconds):"));
let hours2 = Math.floor(secondsInput/ 3600); // calculate hours
let rest = secondsInput % 3600; // seconds left after removing hours
let minutes2 = Math.floor(rest / 60); // calculate minutes
let seconds2 = rest % 60; // seconds left after removing minutes

alert(`${secondsInput} seconds = ${hours2} hour, ${minutes2} minutes and ${seconds2} seconds.`)


// Ejercicio 22
let text = String(prompt("Enter a text:"));
let characters = text.length;
alert(`"${text}" has ${characters} characters.`);


// Ejercicio 23
let workYears = Number(prompt("Enter the number of years you've been working:"));
let vacancies;

if (workYears <= 3) {
  vacancies = 15
}
else {
  vacancies = 15 + (workYears - 3) * 2;
}

alert(`${workYears} years correspond to ${vacancies} days of vacation.`);


// Ejercicio 24
let roomsOf2 = Number(prompt("How many rooms of 2 people?"));
let roomsOf3 = Number(prompt("How many rooms of 3 people?"));
let roomsOf4 = Number(prompt("How many rooms of 4 people?"));
let totalRoomsOf2 = roomsOf2 *  2;
let totalRoomsOf3 = roomsOf3 * 3;
let totalRoomsOf4 = roomsOf4 * 4;
let maxGuests = totalRoomsOf2 + totalRoomsOf3 + totalRoomsOf4;
alert(`
  Capacity of the 2-person rooms: ${totalRoomsOf2} people\n
  Capacity of the 3-person rooms: ${totalRoomsOf3} people\n
  Capacity of the 4-person rooms: ${totalRoomsOf4} people\n
  Maximum number of guests: ${maxGuests} people
`);

// Ejercicio 25
let availableMoney = Number(prompt("How much money available do you have?"));

let service1Name = prompt("Enter the name of service 1:");
let service1Cost = Number(prompt(`Enter the cost of ${service1Name}:`));
availableMoney -= service1Cost;

let service2Name = prompt("Enter the name of service 2:");
let service2Cost = Number(prompt(`Enter the cost of ${service2Name}:`));
availableMoney -= service2Cost;

let service3Name = prompt("Enter the name of service 3:");
let service3Cost = Number(prompt(`Enter the cost of ${service3Name}:`));
availableMoney -= service3Cost;

alert(`
  - Service: ${service1Name} | Cost: ${service1Cost}€\n
  - Service: ${service2Name} - Cost: ${service2Cost}€\n
  - Service: ${service3Name} - Cost: ${service3Cost}€\n
  - Money left: ${availableMoney}€
`);

// Ejercicio 26
const product1 = 100;
let unitsP1 = Number(prompt("How many units of Product1?"))
let subtotalP1 = product1 * unitsP1;

const product2 = 200;
let unitsP2 = Number(prompt("How many units of Product2?"))
let subtotalP2 = product2 * unitsP2;

const product3 = 300;
let unitsP3 = Number(prompt("How many units of Product3?"))
let subtotalP3 = product3 * unitsP3;

let totalProducts = subtotalP1 + subtotalP2 + subtotalP3;
let installments = Number(prompt("How many installments would you like to pay?"));
let totalInstallments = totalProducts / installments;

alert(`
  - Product 1: ${unitsP1} units x ${product1}€ = ${subtotalP1}\n
  - Product 2: ${unitsP2} units x ${product2}€ = ${subtotalP2}\n
  - Product 3: ${unitsP3} units x ${product3}€ = ${subtotalP3}\n
  - TOTAL: ${totalProducts}€\n
  - Installments: ${installments} x ${totalInstallments.toFixed(2)}€
`)
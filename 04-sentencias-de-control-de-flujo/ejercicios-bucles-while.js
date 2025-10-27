// Ejercicio 1
const userBD = {usuario: "admin", passwd: "123"};
const intentos = 3;
let contador = 0;

while (contador < intentos) {
  const user = String(prompt("Introduce tu usuario:"));
  const pass = String(prompt("Introduce tu contraseña:"));

  if (user === userBD.usuario && pass === userBD.passwd) {
    alert(`Bienvenido ${user}`);
    break;
  } else {
    contador++;
    let accesoBloqueado =
      contador < intentos
        ? `Usuario o contraseña incorrectos, te quedan ${intentos - contador} intentos.`
        : "Cuenta bloqueada. Contacta con el administrador.";
    alert(accesoBloqueado);
    if (contador >= intentos) break; // se detiene tras 3 intentos
  }
}


// Ejercicio 2
let elegir = String(prompt("Escoge: Cara, Cruz o Salir")).toLowerCase();
const opciones = ["cara", "cruz"];
let rachaActual = 0;
let rachaMaxima = 0;

while (elegir != "salir") {
  const numeroAleatorio = Math.floor(Math.random() * 2);
  const resultadoAleatorio = opciones[numeroAleatorio];

  if (elegir === resultadoAleatorio) {
    rachaActual++;
    alert(`¡Has acertado! Ha salido ${resultadoAleatorio}\nRacha actual: ${rachaActual}`);
    if (rachaActual > rachaMaxima) rachaMaxima = rachaActual;
  } else if (elegir === "cara" || elegir === "cruz") {
    alert(`Fallaste. Ha salido ${resultadoAleatorio}\nRacha reiniciada`)
  } else {
    alert("Opción no válida. Escribe 'cara', 'cruz' o 'salir'.")
  }
  
  elegir = String(prompt("Escoge: Cara, Cruz o Salir")).toLowerCase();
}

alert(`Racha máxima conseguida: ${rachaMaxima}\n¡Hasta la próxima!`);


// Ejercicio 3
let adivinarNumero = Number(prompt("Adivina el número:"));
const randomNumber = Math.floor(Math.random() * 10) + 1;
let intentosNumero = 0;

while (adivinarNumero != randomNumber) {
  if (adivinarNumero > randomNumber) {
    intentosNumero++;
    alert(`El número que tienes que adivinar es menor que ${adivinarNumero}.`);
  } else if (adivinarNumero < randomNumber) {
    intentosNumero++;
    alert(`El número que tienes que adivinar es mayor que ${adivinarNumero}.`)
  }

  adivinarNumero = Number(prompt("Adivina el número:"));
}

alert(`Has acertado en ${intentosNumero} intentos.`);
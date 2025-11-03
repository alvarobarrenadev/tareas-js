// Para cada una de las funciones que tenemos aquí, pásalas a Arrow Functions

// Función 1
function sumar(a, b) {
  return a + b;
}

// Arrow function - Ejercicio 1
const sumar = (a, b) => a + b;


// Función 2
function cuadrado(numero) {
  return numero * numero;
}

// Arrow function - Ejercicio 2
const cuadrado = numero => numero * numero;


// Función 3
function obtenerUsuario(id) {
  return { id: id, nombre: "Usuario" + id };
}

// Arrow function - Ejercicio 3
const obtenerUsuario = id => ({ id, nombre: "Usuario" + id });


// Función 4
function procesarLista(lista) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
  }
  return resultado;
}

// Arrow function - Ejercicio 4
const procesarLista = lista => {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
  }
  return resultado;
};


//Función 5
(function() {
  console.log("Ejecutando una IIFE");
})();

// Arrow function - Ejercicio 5
(() => {
  console.log("Ejecutando una IIFE")
})();


// Función 6
const objeto = {
  id: 10,
  obtenerId: function() {
    return this.id;
  }
};

// Arrow function - Ejercicio 6
const objeto2 = {
  id: 10,
  obtenerId: () => objeto2.id
};


// Función 7
const temporizador = {
  mensaje: "Listo!",
  iniciar: function() {
    setTimeout(function() {
      console.log(this.mensaje);
    }, 1000);
  }
};

// Arrow function - Ejercicio 7
const temporizador2 = {
  mensaje: "Listo!",
  iniciar: function() {
    setTimeout(() => console.log(this.mensaje), 1000);
}};
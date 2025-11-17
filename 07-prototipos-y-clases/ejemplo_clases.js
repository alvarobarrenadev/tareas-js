// Primer ejemplo con funciones constructoras
function Usuario1(nombre, apellidos) {
  this.nombre = nombre;
  this.apellidos = apellidos;

  // this.saludar = function () {
  //   console.log(`Hola, que tal, soy ${this.nombre} ${this.apellidos}`);
  // }
}

Usuario.prototype.saludar = function () {
  console.log(`Hola, que tal, soy ${this.nombre} ${this.apellidos}`);
}

// const u1 = new Usuario1('Bienve', 'Sáez');
// const u2 = new Usuario1('Felipe', 'Pérez');
// u1.saludar()


// La convertimos en clase
class Usuario2 {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    
    // this.saludar = function () {
    //   console.log(`Hola, que tal, soy ${this.nombre} ${this.apellidos}`);
    // }
  }

  saludar() {
    console.log(`Hola, que tal, soy ${this.nombre} ${this.apellido}`)
  }
}

// let u1 = new Usuario2('Bienvenido', 'Sáez');


// Métodos y atributos privados en funciones constructoras
function Usuario3(nombre, apellidos, edad) {
  let edadPrivada;

  this.nombre = nombre;
  this.apellidos = apellidos;
  edadPrivada = edad

  this.getEdad = function () {
    return edadPrivada;
  }

  this.cambiarEdad = function (nuevaEdad) {
    edadPrivada = nuevaEdad;
  }
}

// const u1 = new Usuario3('Pepe', 'Martínez', 50);


// Métodos y atributos privados en Clases
class Usuario4 {
  #edad;

  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#edad = edad;
  }

  saludar() {
    console.log(`Hola, que tal, soy ${this.nombre} ${this.apellido} y tengo ${this.#edad} años`)
  }

  salir() {
    this.#cerrarsesion();
  }

  #cerrarsesion() {
    console.log('He cerrado la sesión');
  }
}

// const u1 = new Usuario4('Bienvenido', 'Sáez', 40);
// u1.saludar();


// Métodos estáticos
class Usuario5 {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola, que tal, soy ${this.nombre} ${this.apellido}`)
  }

  static getUsuario(id) {
    console.log('Estoy buscando el usuario' + id);
    return new Usuario('Bienve', 'Sáez');
  }
}

let newUser = Usuario5.getUsuario(5);
let newArray = [];

console.log(Array.isArray(newUser));
console.log(Array.isArray(newArray));


// Getters y setters
class Usuario6 {
  #edad;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  get edad() {
    console.log('Ejecutando el getter');
    return this.#edad;
  }

  set edad(newEdad) {
    console.log('Ejecutando el set de edad');
    if (newEdad < 0) {
      throw Error('La edad no puede ser menor que 0')
    }
    this.#edad = newEdad;
  }
}

// const u1 = new Usuario6('Bienvenido', 'Sáez');


// Herencia
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola, que tal, soy ${this.nombre} ${this.apellido}`)
  }
}

const p1 = new Persona('Bienvenido', 'Sáez');


class Alumno extends Persona {
  #curso;

  constructor(nombre, apellido, curso) {
    super(nombre, apellido);
    this.#curso = curso;
  }

  get curso() {
    return this.#curso;
  }

  estudiar() {
    console.log('Estoy estudiando');
  }

  saludar() {
    console.log(`Hola, que tal, soy ${this.nombre} ${this.apellido} y soy un alumno`)
  }
}

const a1 = new Alumno('Juan', 'García', '1º BTO');

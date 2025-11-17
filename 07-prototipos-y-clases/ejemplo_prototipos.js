const persona = {
  profesion: "Sin profesión",
  saludar: function (nombre) {
    console.log(`Hola ${nombre} ¿qué tal estás?`);
  },
};

const alumno = {
  id: 1,
  nombre: "Bienve",
  edad: 39,
  master: "FullStack",
  profesion: "Estudiante",
  toString: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  },
};

// alumno.__proto__ = persona; // cambia la propiedad del prototipo de alumno a persona. NO RECOMENDABLE (deprecated)
// Object.setPrototypeOf(alumno, persona); // hace lo mismo y esta deprecated también

// persona.despedirse = function () {
//   console.log('Adiós');
// }

// console.log(persona.isPrototypeOf(alumno));

// let a = Object.create(persona);
// let alumno1 = new Object(alumno);

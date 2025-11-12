const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack'
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22,
    master: 'BlockChain'
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19,
    master: 'IA'
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49,
    master: 'FullStack'
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17,
    master: 'IA'
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16,
    master: 'FullStack'
  },
  {
    id: 7,
    nombre: 'Cecilia',
    edad: 16,
    master: 'BlockChain'
  }
];

const datosAleatorios = [
  "Paisa",
  66,
  "Qué tal estás",
  {},
  { name: 'Bienve' },
  [1, 2, 3],
  ['Hola que tal'],
  true
]


/* Ejercicio 1

Dado un array de números, crear una función vAbsoluto que reciba un array y que devuelve un array con los valores absolutos de los números del array que se pasa como parámetro.

Pista: usar Math.abs

*/

// Opción 1: Tradicional
// function vAbsoluto(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push (Math.abs(arr[i]));
//   }

//   return newArray;
// }

function vAbsoluto(arr) {
  return arr.map(e => {
   return Math.abs(e) ;
  })
}

const numbers = [1, 4, -5, -20, 8, 9, 3];
console.log(numbers);
console.log(vAbsoluto(numbers));


/* Ejercicio 2

Dado un array de datos aleatorios, crear una función llamada porTipos que devuelve un objeto con claves por tipo de dato y clasifique los valores del array pasado como parámetro segun su tipo.

Pista: usar typeof para determinar el tipo

{
  string: ['Hola que tal', 'Paisa'],
  number: [66],
  object: [{}, { name: 'Bienve' }, [1, 2, 3], ['Hola que tal']]
}

*/

function porTipos(arr) {
  return {
    number: arr.filter(e => typeof e === 'number'),
    string: arr.filter(e => typeof e === 'string'),
    object: arr.filter(e => typeof e === 'object')
  }
}

console.log(porTipos(datosAleatorios));


/* Ejercicio 3

Dado el array de alumnos, crear una función getFullStackStudents a la que se lo pasamos como parámetro y nos devuelva únicamente a los alumnos que pertenezcan a la formación Full Stack.

Pista: usar filter

*/

function getFullStackStudents(arr) {
  return arr.filter(student => student.master === 'FullStack')
}

function getIAStudents(arr) {
  return arr.filter(student => student.master === 'IA')
}

function getBlockChainStudents(arr) {
  return arr.filter((student) => student.master === "BlockChain")
}

console.log(getFullStackStudents(alumnos));
console.log(getIAStudents(alumnos));
console.log(getBlockChainStudents(alumnos));


/* Ejercicio 4

Dado el array de alumnos, crear una función llamada nStudentFullStack que nos devuelva el número de usuarios que pertenecen a dicha formación. De igual manera para el resto de las formaciones.

Pista: usar reduce o filter (más eficiente reduce)

*/

// Usando filter
// function nStudentFullStack(arr) {
//   return {
//     FullStack: arr.filter((student) => student.master === "FullStack"),
//     IA: arr.filter((student) => student.master === "IA"),
//     BlockChain: arr.filter((student) => student.master === "BlockChain"),
//   };
// }

// Usando reduce
function nStudentFullStackReduce(arr) {
  return arr.reduce((acumulador, student) => {
    let master = student.master;

    // Usando if
    // if (acumulador[master] != undefined) {
    //   acumulador[master]++;
    // } else {
    //   acumulador[master] = 1
    // }

    // Usando el operador ternario
    acumulador[master] = acumulador[master] != undefined ? acumulador[master] + 1 : 1;
    return acumulador;
  }, {}); // el valor inicial del acumulador es un objeto vacío {}
}

// console.log(nStudentFullStack(alumnos));
console.log(nStudentFullStackReduce(alumnos));


/* Ejercicio 5

Dado el array de alumnos, crear una función llamada getAdultStudents que reciba el array por parámetro y devuelva un array únicamente de los mayores de edad.

*/

function getAdultStudents(arr) {
  return arr.filter(students => students.edad >= 18);
}

console.log(getAdultStudents(alumnos));


/* Ejercicio 6

Dado el array de alumnos, crear una función llamada mayor que reciba el array como parámetro y que devuelva el alumno mayor de toda la lista de alumnos.

Pista: usa reduce o for.

*/

function mayor(arr) {
  return arr.reduce((acumulador, alumno) => {
    if (alumno.edad > acumulador.edad) {
      acumulador = alumno;
    }
    return acumulador; // siempre hay que devolver algo en el reduce
  }, arr[0])
}

console.log(mayor(alumnos));


/* Ejercicio 7

Haz el ejercicio 2 usando "reduce"

function porTipos(arr) {
  return {
    number: arr.filter(e => typeof e === 'number'),
    string: arr.filter(e => typeof e === 'string'),
    object: arr.filter(e => typeof e === 'object')
  }
}

*/

/*
Explicación paso a paso de cómo actúa el reduce con datosAleatorios:

1. "Paisa" → typeof = "string"
   - No existe acumulador["string"], se crea: { string: ["Paisa"] }

2. 66 → typeof = "number"
   - No existe acumulador["number"], se crea: { string: ["Paisa"], number: [66] }

3. "Qué tal estás" → typeof = "string"
   - Ya existe "string", se agrega al mismo array:
     { string: ["Paisa", "Qué tal estás"], number: [66] }

4. {} → typeof = "object"
   - No existe "object", se crea: { object: [{}], ... }

5. { name: "Bienve" } → typeof = "object"
   - Ya existe "object", se agrega al mismo array:
     { object: [{}, { name: "Bienve" }], ... }

6. [1, 2, 3] → typeof = "object"
   - Los arrays también son tipo "object" en JS,
     se agrega a ese mismo array de objetos:
     { object: [{}, { name: "Bienve" }, [1, 2, 3]], ... }

7. ["Hola que tal"] → typeof = "object"
   - Otro array, se agrega igual:
     { object: [{}, { name: "Bienve" }, [1, 2, 3], ["Hola que tal"]], ... }

8. true → typeof = "boolean"
   - No existe "boolean", se crea:
     { boolean: [true], ... }

Resultado final:
{
  string: ["Paisa", "Qué tal estás"],
  number: [66],
  object: [{}, { name: "Bienve" }, [1, 2, 3], ["Hola que tal"]],
  boolean: [true]
}
*/

function porTipos2(arr) {
  return arr.reduce((acumulador, elemento) => {
    let tipo = typeof elemento;

    acumulador[tipo] = acumulador[tipo] ? acumulador[tipo] : [];
    acumulador[tipo].push(elemento);
    return acumulador
  }, {});
}

console.log(porTipos2(datosAleatorios));

/* Ejercicio 8

Dado el array de alumnos, crear una función llamada agruparPor que reciba dos parámetros, primero el array y luego un string con la propiedad por la que queremos agrupar de las posibles de los alumnos.

La función devolverá un objeto con una propiedad por cada uno de los valores posibles de la propiedad pasada como parámetro. Te lo explico con un ejemplo mejor.

*/

function agruparPor(arr, clave) {
  return arr.reduce((acu, alumno) => {
    let clasificacion = alumno[clave];

    acu[clasificacion] = acu[clasificacion] ? acu[clasificacion] : [];
    acu[clasificacion].push(alumno);
    
    return acu;
  }, {});
}

console.log(agruparPor(alumnos, 'edad'));
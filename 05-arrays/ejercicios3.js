// DATASET
const users = [
  {
    id: 1,
    name: "Ana",
    age: 22,
    active: true,
    score: 78,
    hobbies: ["leer", "yoga"],
  },
  {
    id: 2,
    name: "Luis",
    age: 30,
    active: false,
    score: 92,
    hobbies: ["fútbol"],
  },
  {
    id: 3,
    name: "María",
    age: 27,
    active: true,
    score: 85,
    hobbies: ["cine", "viajar"],
  },
  {
    id: 4,
    name: "Carlos",
    age: 35,
    active: true,
    score: 60,
    hobbies: ["ajedrez", "leer"],
  },
  { 
    id: 5,
    name: "Sofía",
    age: 16,
    active: false,
    score: 47,
    hobbies: [] },
];


// EJERCICIOS
// 1. Usa map para obtener solo los nombres (array de strings).
const getNames = users.map(nombre => nombre.name);
console.log(getNames);

// 2. Usa map para obtener un array de edades +5.
const getEdades5 = users.map(edad => edad.age + 5);
console.log(getEdades5);

// 3. Usa filter para obtener solo los usuarios activos.
const usuariosActivos = users.filter(usuario => usuario.active === true);
console.log(usuariosActivos);

// 4. Usa filter para obtener usuarios mayores de 25.
const mayores25 = users.filter(user => user.age > 25);
console.log(mayores25);

// 5. Usa reduce para obtener la suma total de las edades.
const sumaTotalEdades = users.reduce((suma, user) => {
  return user.age + suma;
}, 0);
console.log(sumaTotalEdades);

// 6. Usa reduce para obtener la puntuación media (score promedio).
const puntuacionMedia = users.reduce((suma, usuario) => suma + usuario.score, 0) / users.length;
console.log(puntuacionMedia);

// 7. Crea un array con objetos del tipo { name, isAdult } (age >= 18).
const mayorDeEdad = users.map(usuario => {
  return{
    name: usuario.name,
    isAdult: usuario.age >= 18
  }
});
console.log(mayorDeEdad);

// 8. Filtra usuarios con score > 80 y devuelve solo sus nombres (filter + map).
const usuariosScore80 = users.
  filter(user => user.score >= 80)
  .map(user => user.name);
console.log(usuariosScore80);

// 9. Saca un array con todos los hobbies en un solo array plano.
const onlyHobbies = users
  .map(user => user.hobbies)
  .flat()
console.log(onlyHobbies);
// flat() devuelve un nuevo array donde concatena (aplana) los subarrays un nivel hacia afuera, quedándote con una sola lista continua de elementos.

// 10. Saca cuántos usuarios están activos (reduce).
const activeUsers = users.reduce((suma, user) => suma + user.active, 0);
console.log(activeUsers);

// 11. Usa reduce para devolver:
//     {
//       active: [...usuariosActivos],
//       inactive: [...usuariosInactivos]
//     }
const estadoUsuarios = users.reduce((accumulator, user) => {
  user.active ? accumulator.active.push(user) : accumulator.inactive.push(user);
  return accumulator;
}, {active: [], inactive: []});
console.log(estadoUsuarios);

// 12. Devuelve el usuario con el score más alto usando reduce.
const higherScoreUser = users.reduce((acc, user) => {
  return user.score > acc.score ? user : acc;
}, users[0]);
console.log(higherScoreUser);

// 13. Devuelve un array de nombres ordenados por edad ascendente.
const nombresOrdenados = users.sort((a, b) => a.age - b.age);
console.log(nombresOrdenados);

// 14. Devuelve un array con objetos { name, totalHobbies }.
const arrayObjetos = users
  .map(user => {
    return {
      name: user.name,
      totalHobbies: user.hobbies.length
    }
  })
  .sort((a, b) => a.name .localeCompare(b.name)); // localeCompare() compara strings alfabéticamente según el idioma, ideal para ordenar nombres
console.log(arrayObjetos);

// 15. Devuelve usuarios cuyo nombre empieza por vocal (filter).
const vowelUsers = users.filter(user => {
  const inicialNombre = user.name[0];
  return ["A", "E", "I", "O", "U"].includes(inicialNombre);
});
console.log(vowelUsers);

// 16. Devuelve el total de hobbies entre todos los usuarios (reduce).
const totalHobbiesNumber = users.reduce((suma, user) => suma + user.hobbies.length, 0);
console.log(totalHobbiesNumber);

// 17. Crea un ranking: array de nombres ordenado por score descendente.
const namesRanking = [...users] // clona el array antes de ordenar para no mutar users.
  .sort((a, b) => b.score - a.score)
  .map((user) => {
    return {
      name: user.name,
      score: user.score,
    };
  });
console.log(namesRanking);

// 18. Normaliza cada usuario para que tenga:
//     { id, name, age, active, score, hobbies, hasHobbies: true/false }
const userHasHobbies = users.map(user => {
  return {
    ...user,
    hasHobbies: user.hobbies.length > 0
  }
});
console.log(userHasHobbies);

// 19. Agrupa usuarios por si tienen menos de 30 o 30+ usando reduce:
//     {
//       under30: [...],
//       overOrEqual30: [...]
//     }
const agruparUsuarios = users.reduce((acc, user) => {
  user.age >= 30 ? acc.overOrEqual30.push(user) : acc.under30.push(user);
  return acc;
}, {under30: [], overOrEqual30: []});
console.log(agruparUsuarios);

// 20. Devuelve un objeto con:
//     {
//       avgScoreActive: ...,
//       avgScoreInactive: ...
//     }
const totals = users.reduce((acc, user) => {
  if (user.active) {
    acc.activeSum += user.score;
    acc.activeCount += 1;
  } else {
    acc.inactiveSum += user.score;
    acc.inactiveCount += 1;
  }
  return acc;
}, {activeSum: 0, activeCount: 0, inactiveSum: 0, inactiveCount: 0});

const avgScore = {
  avgScoreActive: totals.activeSum / totals.activeCount || 0,
  avgScoreInactive: totals.inactiveSum / totals.inactiveCount || 0,
}; // promedio por grupo (suma / cantidad) y cae a 0 si no hay usuarios en ese grupo

console.log(avgScore);
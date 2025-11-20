const MICONSTANTE = 5;
let pruebaVariable = "Esto es una prueba";
let pruebaFuncion = () => console.log("Desde pruebaFuncion");

// export {
//   MICONSTANTE,
//   pruebaVariable,
//   pruebaFuncion,
// }

// export default pruebaFuncion;
// export {
//   MICONSTANTE
// }

let paraExportar = {
  miFuncion: pruebaFuncion,
  miConstante: MICONSTANTE
}
export default paraExportar;
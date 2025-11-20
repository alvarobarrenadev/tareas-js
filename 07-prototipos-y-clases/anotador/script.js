console.log("Ejercicio Anotador");

class Anotador {
  #titulo;
  #notas;

  constructor(titulo) {
    this.#titulo = titulo;
    this.#notas = []
  }

  agregarNota(nota) {
    this.#notas.push(nota);
  }
  
  actualizarNota(id, nota) {
    this.#notas[id] = nota
  }
  
  obtenerNota(id) {
    return this.#notas[id];
  }

  eliminarNota(id) {
    this.#notas.splice(id, 1)
  }

  eliminarNotas() {
    this.#notas = [];
  }

  listarNotas() {
    return this.#notas.reduce(
      (
        salida, // Acumulador: va guardando el texto ya construido
        nota, // Elemento actual del array: la nota que se está procesando
        index // Índice de la nota dentro del array: sirve para numerarla
      ) => {
        // Agrega una nueva línea con el índice y el contenido de la nota
        return `${salida}\n ${index + 1}. ${nota}`;
      },
      `${this.#titulo}\n-------------------------` // Valor inicial del acumulador: arranca con el título de la nota
    );
  }
}

const nota = new Anotador("Lista de la compra");
nota.agregarNota("Huevos");
nota.agregarNota("Pasta");
nota.agregarNota("Salmón");
nota.actualizarNota(2, "Lubina");
console.log(nota.listarNotas());
console.log(nota.obtenerNota(1));
nota.eliminarNota(2);
nota.agregarNota("Avena");
nota.agregarNota("Mermelada");
console.log(nota.listarNotas());
console.log(nota.obtenerNota(2));
nota.eliminarNotas();
console.log(nota.listarNotas());
console.log("Ejercicio coche");

class Coche {
  #encendido;
  #velocidad;
  #marca;
  #modelo;
  #matricula;

  constructor(marca, modelo, matricula) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#matricula = matricula;
    this.#encendido = false;
    this.#velocidad = 0;
  }

  arrancar() {
    this.#encendido = true;
    console.log("Coche arrancado.");
  }
  
  apagar() {
    if (this.#velocidad === 0) {
      this.#encendido = false;
    } else {
      console.info(`El vehículo va a ${this.#velocidad} km/h, pon la velocidad a 0 km/h`);
    }
  }
  
  acelerar() {
    if (this.#encendido) {
      this.#velocidad += 10;
      console.log(`Velocidad actual ${this.#velocidad} km/h.`);
    } else {
      console.info("El coche no está encendido");
    }
  }
  
  desacelerar() {
    if (this.#encendido) {
      if (this.#velocidad > 0) {
        this.#velocidad -= 10;
        console.log(`Velocidad actual ${this.#velocidad} km/h.`);
        if (this.#velocidad < 0) {
          this.#velocidad = 0;
        }
      } else {
        console.info("El coche no puede desacelerar porque no está andando.");
      }
    } else {
      console.log("El coche no puede acelerar porque no está arrancado");
    }
  }

  toString() {
    console.log(`${this.#marca} ${this.#modelo} - Matrícula ${this.#matricula}`);
  }
}

const coche = new Coche("BMW", "M4", "1234ALV");
console.log(coche.toString());

coche.arrancar();
coche.acelerar();
coche.apagar();
coche.desacelerar();
console.log(coche);
coche.desacelerar();
console.log(coche);
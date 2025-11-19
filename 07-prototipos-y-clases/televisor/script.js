console.log("Ejercicio televisor");

class Televisor {
  #encendido;
  #canal;
  #volumen;
  #marca;
  #canales;

  constructor(marca, canales) {
    this.#marca = marca;
    this.#canales = canales;
    this.#encendido = false;
    this.#canal = 0;
    this.#volumen = 0;
  }

  encender() {
    this.#encendido = true;
    console.log("Televisor encendido");
  }

  apagar() {
    this.#encendido = false;
    console.log("Televisor apagado");
  }

  verSiguienteCanal() {
    if (this.#encendido) {
      if (this.#canal === 100) {
        this.#canal = 0;
      } else {
        this.#canal += 1;
      }
      console.log(`Siguiente canal: ${this.#canal}`);
    } else {
      console.log("El televisor está apagado, enciéndelo para cambiar al siguiente canal");
    }
  }

  verAnteriorCanal() {
    if (this.#encendido) {
      if (this.#canal === 0) {
        this.#canal = 100;
      } else {
        this.#canal -= 1;
      }
      console.log(`Anterior canal: ${this.#canal}`);
    } else {
      console.log("El televisor está apagado, enciéndelo para cambiar al anterior canal");
    }
  }
  
  cambiarCanal(canal) {
    if (this.#encendido) {
      if (canal <= 100 && canal >= 0) {
        this.#canal = canal;
        console.log(`Cambiado al canal: ${this.#canal}`);
      } else {
        console.log(`El canal ${canal} no existe`)
      }
    } else {
      console.log(`El televisor está apagado, enciéndelo para cambiar al canal ${canal}`);
    }
  }

  subirVolumen() {
    if (this.#encendido) {
      if (this.#volumen === 100) {
        console.log("El volumen está al máximo")
      } else {
        this.#volumen += 1;
        console.log(`Volumen subido a ${this.#volumen}`);
      }
    } else {
      console.log("El televisor está apagado, enciéndelo para subir el volumen");
    }
  }

  bajarVolumen() {
    if (this.#encendido) {
      if (this.#volumen === 100) {
        console.log("El volumen está al máximo")
      } else {
        this.#volumen -= 1;
        console.log(`Volumen bajado a ${this.#volumen}`);
      }
    } else {
      console.log("El televisor está apagado, enciéndelo para bajar el volumen");
    }
  }

  toString() {
    console.log(`Televisor ${this.#marca}\n - Canales: ${this.#canales}\n - Canal actual: ${this.#canal}\n - Volumen actual: ${this.#volumen}`);
  }
}

const televisor = new Televisor("Samsung", 100);

televisor.toString();
televisor.encender();
televisor.verSiguienteCanal();
televisor.verAnteriorCanal();
televisor.verAnteriorCanal();
televisor.subirVolumen();
televisor.subirVolumen();
televisor.subirVolumen();
televisor.cambiarCanal(34);
televisor.verAnteriorCanal()
televisor.apagar()
televisor.toString();
console.log("Ejercicio calculadora");
class Calculadora {
  #resultado;

  constructor(){
    this.#resultado = 0;
  }

  obtenerResultado() {
    return this.#resultado
  }

  reiniciar() {
    this.#resultado = 0;
  }

  // Operaciones
  sumar(numero) {
    try {
      if (isNaN(numero)) {
        throw Error("No se ha introducido un número válido");
      } else {
        this.#resultado = this.#resultado + numero;
      }
    } catch (error) {
        // console.log(error.message);
        console.error(error.message);
    }
  }
  
  restar(numero) {
    try {
      if (isNaN(numero)) {
        throw Error("No se ha introducido un número válido");
      } else {
        this.#resultado = this.#resultado - numero;
      }
    } catch (error) {
        console.error(error.message);
    }
  }
  
  multiplicar(numero) {
    try {
      if(isNaN(numero)) {
        throw Error("No se ha introducido un número válido");
      } else {
          this.#resultado = this.#resultado * numero;
      }
    } catch (error) {
        console.error(error.message);
    }
  }
  
  dividir(numero) {
    try {
      if (numero === 0) {
        throw Error("No es posible dividir por 0");
      } else if (isNaN(numero)){
          throw Error("No se ha introducido un número válido");
      } else {
          this.#resultado = this.#resultado / numero;
      }
    } catch (error) {
        console.error(error.message);
    }
  }
}

const calc = new Calculadora(1);
console.log(calc.obtenerResultado());
calc.sumar(5);
console.log(calc.obtenerResultado());
calc.restar(2);
console.log(calc.obtenerResultado());
calc.multiplicar(5)
console.log(calc.obtenerResultado());
calc.dividir("d")
console.log(calc.obtenerResultado());
calc.sumar("Hola");
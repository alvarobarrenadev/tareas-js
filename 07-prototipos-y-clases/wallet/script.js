console.log("Ejercicio Wallet");

class Movimiento {
  descripcion;
  cantidad;
  fecha;
  categoria;
  tipo;

  constructor(descripcion, cantidad, fecha, tipo, categoria) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.tipo = tipo;
    this.categoria = categoria;
  }
}

class Wallet {
  #monto;
  #operaciones;

  constructor(montoInicial = 0) {
    this.#monto = montoInicial;
    this.#operaciones = [];
  }

  agregarMovimiento(movimiento) {
    this.#operaciones.push(movimiento);
    if (movimiento.tipo === 'GASTO') {
      this.#monto -= movimiento.cantidad;
    } else {
      this.#monto += movimiento.cantidad;
    }
  }

  obtenerGastosPorMes(mes) {
    return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === "GASTO");
  }
  
  obtenerGananciasPorMes(mes) {
    return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === "GANANCIA");

  }

  obtenerGastosPorCategoria(cat) {
    return this.#operaciones.filter(movimiento => movimiento.tipo === "GASTO" && movimiento.categoria === cat);
  }
  
  obtenerGananciasPorCategoria(cat) {
    return this.#operaciones.filter(movimiento => movimiento.tipo === "GANANCIAS" && movimiento.categoria === cat);
  }

  calcularTotalPorMes(mes) {
    return this.#operaciones
      .filter(movimiento => movimiento.fecha.getMonth() === mes)
      .reduce((total, movimiento) => {
        if (movimiento.tipo === "GASTO") {
          total -= movimiento.cantidad;
        } else {
          total += movimiento.cantidad;
        }
        return total;
      }, 0);
  }
  
  calcularTotalPorCategoria(cat) {
    return this.#operaciones
      .filter((movimiento) => movimiento.categoria === cat)
      .reduce((total, movimiento) => {
        if (movimiento.tipo === "GASTO") {
          total -= movimiento.cantidad;
        } else {
          total += movimiento.cantidad;
        }
        return total;
      }, 0);
  }

  obtenerMonto(monto) {
    return this.#monto;
  }
}


let cartera = new Wallet();
let m0 = new Movimiento(
  "Ingreso de nómina",
  3000,
  new Date(2025, 1, 1, 0, 0, 0, 0), // year, month, day, hours, minutes, secodns, miliseconds
  "GANANCIA",
  "Nómina"
);
cartera.agregarMovimiento(m0);

let m1 = new Movimiento(
  "Compra de comida",
  150,
  new Date(2025, 1, 5, 0, 0, 0, 0),
  "GASTO",
  "Comida"
);
cartera.agregarMovimiento(m1);

let m2 = new Movimiento(
  "Compra de gasolina",
  120,
  new Date(2025, 1, 6, 0, 0, 0, 0),
  "GASTO",
  "Gasolina"
);

cartera.agregarMovimiento(m2);
console.log(cartera);
console.log(cartera.obtenerGastosPorMes(1));
console.log(cartera.obtenerGananciasPorMes(1));
console.log(cartera.obtenerGastosPorCategoria("Gasolina"));
console.log(cartera.calcularTotalPorMes(1));
console.log(cartera.calcularTotalPorCategoria("Gasolina"));
console.log(cartera.obtenerMonto());
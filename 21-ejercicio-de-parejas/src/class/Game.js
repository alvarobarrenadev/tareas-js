import { shuffleArray } from "../utils/utils";
import Box from "./Box";

class Game {
  static STORAGE_KEYS = {
    rows: "pairs_rows",
    cols: "pairs_cols",
    boxes: "pairs_boxes",
    startedAt: "pairs_started_at",
    elapsed: "pairs_elapsed",
    finished: "pairs_finished",
  };

  #rows;
  #cols;
  #idElement;
  #boxes;
  #statusElement;
  #timerElement;
  #timerInterval;
  element;

  constructor(rows, cols, idElement = "game") {
    this.#rows = rows;
    this.#cols = cols;
    this.#idElement = idElement;
    this.element = document.getElementById(idElement);
    this.#statusElement = document.getElementById("status");
    this.#timerElement = document.getElementById("timer");
    this.#boxes = [];
    this.createBoxes();
    this.renderBoxes();
    this.restoreTimer();
    this.updateStatus("Haz clic en una caja para empezar.");
    this.refreshGameStatus();

    this.element.addEventListener("click", () => {
      this.checkOpenBoxes();
    });
  }

  checkOpenBoxes() {
    let openBoxes = this.#boxes.filter((box) => box.open && box.free);

    if (openBoxes.length === 1 && !Game.hasStarted()) {
      this.startTimer();
      this.updateStatus("Busca la carta gemela.");
      this.saveState();
    }

    if (openBoxes.length === 2) {
      if (openBoxes[0].color === openBoxes[1].color) {
        openBoxes.forEach((box) => {
          box.free = false;
        });
        this.updateStatus("Pareja encontrada.");
        this.saveState();
        this.refreshGameStatus();
      } else {
        this.updateStatus("No coinciden. Inténtalo otra vez.");
        window.setTimeout(() => {
          openBoxes.forEach((box) => {
            box.resetColor();
          });
          this.saveState();
          this.refreshGameStatus();
        }, 500);
      }
    }
  }

  createRandomColors() {
    let randomColors = [];
    for (let index = 0; index < (this.#cols * this.#rows) / 2; index++) {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let color = `rgb(${red}, ${green}, ${blue})`;
      randomColors.push(color);
    }
    randomColors = [...randomColors, ...randomColors];
    shuffleArray(randomColors);
    return randomColors;
  }

  createBoxes() {
    this.#boxes = [];
    let storedBoxes = this.getStoredBoxes();

    if (storedBoxes.length > 0) {
      storedBoxes.forEach((box) => {
        let newBox = new Box(box.row, box.col, box.color);
        newBox.free = box.free;
        newBox.open = box.open;
        this.#boxes.push(newBox);
      });
    } else {
      let randomColors = this.createRandomColors();
      for (let row = 0; row < this.#rows; row++) {
        for (let col = 0; col < this.#cols; col++) {
          let color = randomColors.shift();
          let newBox = new Box(row, col, color);
          this.#boxes.push(newBox);
        }
      }
      this.saveState();
    }
  }

  getStoredBoxes() {
    let rawBoxes = localStorage.getItem(Game.STORAGE_KEYS.boxes);
    return rawBoxes ? JSON.parse(rawBoxes) : [];
  }

  saveState() {
    localStorage.setItem(
      Game.STORAGE_KEYS.boxes,
      JSON.stringify(this.#boxes.map((box) => box.toJSON()))
    );
    localStorage.setItem(
      Game.STORAGE_KEYS.finished,
      this.isFinished() ? "true" : "false"
    );
  }

  renderBoxes() {
    this.element.innerHTML = "";
    this.setGridStyles();
    this.#boxes.forEach((box) => {
      let newBoxDiv = document.createElement("div");
      newBoxDiv.classList.add("box");
      newBoxDiv.dataset.col = box.col;
      newBoxDiv.dataset.row = box.row;
      if (box.open || !box.free) {
        box.element = newBoxDiv;
        box.reveal();
      } else {
        box.element = newBoxDiv;
      }
      box.addEventClick(() => {
        this.startTimer();
        this.updateStatus("Comprueba si hacen pareja.");
        this.saveState();
      });
      this.element.appendChild(newBoxDiv);
    });
  }

  setGridStyles() {
    this.element.style.setProperty("--cols", this.#cols);
    this.element.style.setProperty("--rows", this.#rows);
    this.element.style.gridTemplateColumns = `repeat(${this.#cols}, 1fr)`;
    this.element.style.gridTemplateRows = `repeat(${this.#rows}, 1fr)`;
  }

  updateStatus(message) {
    if (this.#statusElement) {
      this.#statusElement.textContent = message;
    }
  }

  refreshGameStatus() {
    if (this.isFinished()) {
      this.stopTimer();
      localStorage.setItem(Game.STORAGE_KEYS.finished, "true");
      this.updateStatus("Has completado el tablero.");
      return;
    }

    let openBoxes = this.#boxes.filter((box) => box.open && box.free).length;
    if (openBoxes === 0 && Game.hasStarted()) {
      this.updateStatus("Elige dos cartas.");
    }
  }

  isFinished() {
    return this.#boxes.length > 0 && this.#boxes.every((box) => !box.free);
  }

  static hasStarted() {
    return localStorage.getItem(Game.STORAGE_KEYS.startedAt) !== null;
  }

  static getElapsedMs() {
    let startedAt = Number(localStorage.getItem(Game.STORAGE_KEYS.startedAt));
    let storedElapsed = Number(localStorage.getItem(Game.STORAGE_KEYS.elapsed) || 0);

    if (!startedAt) {
      return storedElapsed;
    }

    return Date.now() - startedAt + storedElapsed;
  }

  static formatTime(totalMs) {
    let totalSeconds = Math.floor(totalMs / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    let seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  updateTimer() {
    if (this.#timerElement) {
      this.#timerElement.textContent = Game.formatTime(Game.getElapsedMs());
    }
  }

  restoreTimer() {
    this.updateTimer();
    if (
      Game.hasStarted() &&
      localStorage.getItem(Game.STORAGE_KEYS.finished) !== "true"
    ) {
      this.#timerInterval = window.setInterval(() => {
        this.updateTimer();
      }, 1000);
    }
  }

  startTimer() {
    if (Game.hasStarted() || this.isFinished()) {
      return;
    }

    localStorage.setItem(Game.STORAGE_KEYS.startedAt, String(Date.now()));
    this.#timerInterval = window.setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  stopTimer() {
    if (this.#timerInterval) {
      window.clearInterval(this.#timerInterval);
      this.#timerInterval = undefined;
    }

    if (Game.hasStarted()) {
      localStorage.setItem(Game.STORAGE_KEYS.elapsed, String(Game.getElapsedMs()));
      localStorage.removeItem(Game.STORAGE_KEYS.startedAt);
      this.updateTimer();
    }
  }

  static async getRowsCols() {
    let storedRows = localStorage.getItem(Game.STORAGE_KEYS.rows);
    let storedCols = localStorage.getItem(Game.STORAGE_KEYS.cols);

    if (storedRows !== null && storedCols !== null) {
      return {
        rows: parseInt(storedRows, 10),
        cols: parseInt(storedCols, 10),
      };
    }

    return new Promise((resolve) => {
      let dialog = document.createElement("dialog");
      dialog.className = "setup-modal";
      dialog.innerHTML = `
        <form method="dialog" class="setup-form">
          <h2>Configurar Tablero</h2>
          <p class="desc">Elige el tamaño de la cuadrícula. El total de cartas (filas × columnas) debe ser par.</p>
          <div class="inputs-row">
            <div class="input-group">
              <label for="rows-input">Filas</label>
              <input type="number" id="rows-input" min="1" value="4" required>
            </div>
            <div class="input-group">
              <label for="cols-input">Columnas</label>
              <input type="number" id="cols-input" min="1" value="4" required>
            </div>
          </div>
          <p class="error-msg" id="setup-error" style="display:none;"></p>
          <div class="actions">
            <button type="submit" class="submit-btn" id="submit-btn">Empezar a jugar</button>
          </div>
        </form>
      `;

      document.body.appendChild(dialog);
      dialog.showModal();

      let form = dialog.querySelector("form");
      let errorMsg = dialog.querySelector("#setup-error");

      form.addEventListener("submit", (e) => {
        let r = parseInt(dialog.querySelector("#rows-input").value, 10);
        let c = parseInt(dialog.querySelector("#cols-input").value, 10);

        if (Number.isNaN(r) || Number.isNaN(c) || r <= 0 || c <= 0 || (r * c) % 2 !== 0) {
          e.preventDefault();
          errorMsg.textContent = "Error: El total de cartas debe ser número par.";
          errorMsg.style.display = "block";
        } else {
          localStorage.setItem(Game.STORAGE_KEYS.rows, String(r));
          localStorage.setItem(Game.STORAGE_KEYS.cols, String(c));
          dialog.close();
          document.body.removeChild(dialog);
          resolve({ rows: r, cols: c });
        }
      });
    });
  }

  static resetGame() {
    Object.values(Game.STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
    location.reload();
  }
}

export default Game;

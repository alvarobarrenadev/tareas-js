class Box {
  #col;
  #row;
  #color;
  #free;
  #open;
  #element;

  constructor(row, col, color) {
    this.#col = col;
    this.#row = row;
    this.#color = color;
    this.#free = true;
    this.#open = false;
  }

  get col() {
    return this.#col;
  }

  get row() {
    return this.#row;
  }

  get open() {
    return this.#open;
  }

  get free() {
    return this.#free;
  }

  set free(newValue) {
    this.#free = newValue;
  }

  set open(newValue) {
    this.#open = newValue;
  }

  get color() {
    return this.#color;
  }

  set element(element) {
    this.#element = element;
  }

  addEventClick(saveCallback) {
    if (this.#element) {
      this.#element.addEventListener("click", () => {
        if (!this.#open && this.#free) {
          this.reveal();
          saveCallback();
        }
      });
    }
  }

  reveal() {
    if (this.#element) {
      this.#element.style.backgroundColor = this.#color;
    }
    this.#open = true;
  }

  resetColor() {
    if (this.#element) {
      this.#element.style.backgroundColor = "black";
    }
    this.#open = false;
  }

  toJSON() {
    return {
      row: this.#row,
      col: this.#col,
      color: this.#color,
      free: this.#free,
      open: this.#open,
    };
  }
}

export default Box;

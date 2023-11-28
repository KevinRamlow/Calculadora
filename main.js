function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.display.focus();
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (this.display.value === "") {
          this.display.focus();
          return;
        }
        if (e.keyCode === 13) {
          this.results();
        }
      });
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.addToDisplay(el.innerText);
          this.display.focus();
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
          this.display.focus();
        }
        if (el.classList.contains("btn-delete")) {
          this.delete();
          this.display.focus();
        }
        if (el.classList.contains("btn-equal")) {
          if (this.display.value === "") {
            this.display.focus();
            return;
          }
          this.results();
          this.display.focus();
        }
      });
    },

    addToDisplay(value) {
      this.display.value += value;
    },

    clearDisplay() {
      this.display.value = "";
    },

    delete() {
      this.display.value = this.display.value.slice(0, -1);
    },

    results() {
      if (this.display.value.includes("÷")) {
        this.display.value = this.display.value.replace(/÷/gi, "/");
      }
      if (this.display.value.includes("x")) {
        this.display.value = this.display.value.replace(/x/gi, "*");
      }
      this.display.value = eval(this.display.value);
    },
  };
}

const calculator = createCalculator();
calculator.start();

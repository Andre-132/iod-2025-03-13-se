const buttons = document.querySelectorAll("#calculator button");
const display = document.getElementById("calc-display");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "Clear") {
      clearDisplay();
    } else if (value === "=") {
      calculateResult();
    } else {
      appendValue();
    }
  });
});

function appendValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function calculateResult() {
  if (currentInput === "") return;

  let numbers = currentInput.split(/[\+\-\*\/]/g).map(Number);
  let operators = currentInput.replace(/[0-9\.]/g, "").split("");

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*" || operators[i] === "/") {
      let result =
        operators[i] === "*"
          ? numbers[i] * numbers[i + 1]
          : numbers[i] / numbers[i + 1];
      numbers.splice(i, 2, result);
      operators.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+" || operators[i] === "-") {
      let result =
        operators[i] === "+"
          ? numbers[i] + numbers[i + 1]
          : numbers[i] - numbers[i + 1];
      numbers.splice(i, 2, result);
      operators.splice(i, 1);
      i--;
    }
  }

  currentInput = numbers[0].toString();
  display.value = currentInput;
}

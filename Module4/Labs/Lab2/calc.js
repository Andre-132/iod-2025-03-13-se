const buttons = document.querySelectorAll("#calculator button");
const display = document.getElementById("calc-display");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clear") {
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

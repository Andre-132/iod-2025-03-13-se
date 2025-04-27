const buttons = document.querySelectorAll("#calculator button");
const display = document.getElementById("calc-display");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
  });
});

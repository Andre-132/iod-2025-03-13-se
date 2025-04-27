const buttons = document.querySelectorAll("#calculator button");
const display = document.getElementById("calc-display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML = button.innerText;
  });
});

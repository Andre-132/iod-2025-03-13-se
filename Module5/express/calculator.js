let currentInput = "";

function press(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculate() {
  const match = currentInput.match(/(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)/);
  if (!match) {
    return alert("Invalid expression");
  }

  const x = match[1];
  const operator = match[2];
  const y = match[3];

  if (operator === "/" && parseFloat(y) === 0) {
    return alert("Cannot divide by zero");
  }

  let endpoint = "";
  if (operator === "+") endpoint = "add";
  else if (operator === "-") endpoint = "subtract";
  else if (operator === "*") endpoint = "multiply";
  else if (operator === "/") endpoint = "divide";

  fetch(`/${endpoint}?x=${encodeURIComponent(x)}&y=${encodeURIComponent(y)}`)
    .then((res) => {
      if (!res.ok) throw new Error("Server error");
      return res.text();
    })
    .then((data) => {
      document.getElementById("display").value = data;
      currentInput = data.toString();
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("display").value = "Error";
    });
}

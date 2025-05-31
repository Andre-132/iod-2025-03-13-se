let expression = "";

function press(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function calculate() {
  const match = expression.match(/^(\d+)([+\-*/])(\d+)$/);

  if (!match) {
    document.getElementById("display").value = "Error";
    return;
  }

  const x = match[1];
  const operator = match[2];
  const y = match[3];

  let route = "";
  switch (operator) {
    case "+":
      route = "add";
      break;
    case "-":
      route = "subtract";
      break;
    case "*":
      route = "multiply";
      break;
    case "/":
      route = "divide";
      break;
    default:
      document.getElementById("display").value = "Error";
      return;
  }

  fetch(`/calc/${route}?x=${x}&y=${y}`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("display").value = data;
      expression = "";
    })
    .catch((err) => {
      document.getElementById("display").value = "Error";
      console.error(err);
    });
}

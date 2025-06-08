import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers.");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Cannot divide by zero.";
        break;
      default:
        res = "Invalid operator.";
    }

    setResult(res);
  };

  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>
      <input
        type="text"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Operator (+, -, *, /)"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div className="result">Result: {result}</div>
    </div>
  );
}

export default Calculator;

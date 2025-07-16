class Calculator {
  constructor() {
    this.history = [];
  }

  add(a, b) {
    const result = parseFloat(a) + parseFloat(b);
    this.addToHistory(a, b, "+", result);
    return result;
  }

  subtract(a, b) {
    const result = parseFloat(a) - parseFloat(b);
    this.addToHistory(a, b, "-", result);
    return result;
  }

  multiply(a, b) {
    const result = parseFloat(a) * parseFloat(b);
    this.addToHistory(a, b, "*", result);
    return result;
  }

  divide(a, b) {
    if (parseFloat(b) === 0) {
      throw new Error("Division by zero is not allowed");
    }
    const result = parseFloat(a) / parseFloat(b);
    this.addToHistory(a, b, "/", result);
    return result;
  }

  power(a, b) {
    const result = Math.pow(parseFloat(a), parseFloat(b));
    this.addToHistory(a, b, "^", result);
    return result;
  }

  sqrt(a) {
    if (parseFloat(a) < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    const result = Math.sqrt(parseFloat(a));
    this.addToHistory(a, null, "√", result);
    return result;
  }

  addToHistory(a, b, operation, result) {
    const calculation = {
      operand1: a,
      operand2: b,
      operation: operation,
      result: result,
      timestamp: new Date().toISOString(),
    };
    this.history.push(calculation);

    if (this.history.length > 50) {
      this.history.shift();
    }
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }

  validateInput(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
      throw new Error("Invalid input: Please enter a valid number");
    }
    return num;
  }
}

module.exports = Calculator;

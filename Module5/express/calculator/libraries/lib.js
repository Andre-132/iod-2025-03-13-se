const Logger = require("./logger");

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1000000);
    this.logger = new Logger();
  }

  add(a, b) {
    const result = a + b;
    this.logger.log(this.id, "add", result);
    return result;
  }

  subtract(a, b) {
    const result = a - b;
    this.logger.log(this.id, "subtract", result);
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    this.logger.log(this.id, "multiply", result);
    return result;
  }

  divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    const result = a / b;
    this.logger.log(this.id, "divide", result);
    return result;
  }
}

module.exports = Calculator;

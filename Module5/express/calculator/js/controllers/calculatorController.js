const Calculator = require("../models/Calculator");

const calculator = new Calculator();

class CalculatorController {
  static calculate(req, res) {
    try {
      const { num1, num2, operation } = req.body;
      let result;

      calculator.validateInput(num1);
      if (operation !== "sqrt") {
        calculator.validateInput(num2);
      }

      switch (operation) {
        case "add":
          result = calculator.add(num1, num2);
          break;
        case "subtract":
          result = calculator.subtract(num1, num2);
          break;
        case "multiply":
          result = calculator.multiply(num1, num2);
          break;
        case "divide":
          result = calculator.divide(num1, num2);
          break;
        case "power":
          result = calculator.power(num1, num2);
          break;
        case "sqrt":
          result = calculator.sqrt(num1);
          break;
        default:
          throw new Error("Invalid operation");
      }

      res.json({
        success: true,
        result: result,
        history: calculator.getHistory(),
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  }

  static getHistory(req, res) {
    res.json({
      success: true,
      history: calculator.getHistory(),
    });
  }

  // Clear calculation history
  static clearHistory(req, res) {
    calculator.clearHistory();
    res.json({
      success: true,
      message: "History cleared",
    });
  }
}

module.exports = CalculatorController;

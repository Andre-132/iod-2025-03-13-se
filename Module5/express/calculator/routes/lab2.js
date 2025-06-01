const express = require("express");
const router = express.Router();
const Calculator = require("../libraries/lib");
const calc = new Calculator();

router.get("/add", (req, res) => {
  console.log("hit route");

  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);
  const result = calc.add(x, y);
  res.send(`Result ${result}`);
  console.log(`x=${typeof x}`);
});

router.get("/subtract", (req, res) => {
  console.log("hit route");

  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);
  const result = calc.subtract(x, y);
  res.send(`Result ${result}`);
  console.log(`x=${typeof x}`);
});

router.get("/multiply", (req, res) => {
  console.log("hit route");

  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);
  const result = calc.multiply(x, y);
  res.send(`Result ${result}`);
  console.log(`x=${typeof x}`);
});

router.get("/divide", (req, res) => {
  console.log("hit route");

  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);
  const result = calc.divide(x, y);
  res.send(`Result ${result}`);
  console.log(`x=${typeof x}`);
});

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return y === 0 ? "Cannot divide by zero" : x / y;
}

module.exports = { router, add, subtract, multiply, divide };

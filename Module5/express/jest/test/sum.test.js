const request = require("supertest");
const {
  add,
  subtract,
  multiply,
  divide,
} = require("../../calculator/routes/lab2");

test("add 5 + 2 to equal 7", () => {
  expect(add(5, 2)).toBe(7);
});

test("subtract 10 - 2 to equal 8", () => {
  expect(subtract(10, 2)).toBe(8);
});

test("multiply 5 * 5 to equal 25", () => {
  expect(multiply(5, 5)).toBe(25);
});

test("divide 20 / 2 to equal 10", () => {
  expect(divide(20, 2)).toBe(10);
});

// Exercise 1
console.log("" + 1 + 0); // This equals 10 because empty string has the ability to combine two numbers rather than add them and in JavaScript "number" + number equals the two numbers put beside each other.

console.log("" - 1 + 0); // This equals -1 reason being is because the string takes over -1 and the 0 plays no role since the string takes favor of -1

console.log(true + false); // This equals 1 because in JavaScript True is of 1 and False is of 0 which means 1 + 0 = 1

console.log(!true); // This equals False and the reason being is because the expression "!" in boolean logic means the opposite of what is displayed for example !true = False and !false = True.

console.log(6 / "3"); // This equals 2 because in JavaScript the "/" symbol means division.

console.log("2" * "3"); // This equals 6 because the "*" means multiplication and 2 times 3 equals 6.

console.log(4 + 5 + "px"); // This equals 9px and that's because the string "px" is adding to pixels attribute to the solution 4 + 5 which equals 9.

console.log("$" + 4 + 5); // This equals 45$ and that's because the string holds the "$" symbol and 4 + 5 = the two combined numbers in JavaScript.

console.log("4" - 2); // This equals 2 because the string holds the number 4 which would place it before the -2 making the equation 4 - -2 = 2.

console.log("4px" - 2); // This equals NAN because JavaScript tries to perform a coercion when combining both of the data types and attempts to covert them into compatible types for the operation.

console.log(" -9 " + 5); // This equals -95 and the reason for this is because the "+" symbol serves multiple purposes in JavaScript and in this case it's jointing the numbers together because -9 is with a string.

console.log(" -9 " - 5); // This equals -14 and thats because the "-" symbol behaves differently than the "+".

console.log(null + 1); // This equals 1 and that's because when null is used in mathematical equations it is treated as 0.

console.log(undefined + 1); // This equals NAN and that's because when undefined is used in a mathematical equation JavaScript cannot coercion it into a valid number.

console.log(undefined == null); // This equals True and that's because the "==" operator in JavaScript performs a type coercion.

console.log(undefined === null); // This equals false and that's because the "===" in JavaScript does not perform a type coercion.

console.log(" \t \n" - 2); // This equals -2 because JavaScript converts the whitespace-only string into a value 0.

// Exercise 2

// This is the before "let addition = three + four"
let addition = Number(three) + Number(four); // This is the correct syntax because, addition has multiple purposes in JavaScript you can combine two strings by using this for example: let addition = "3" + "4"; Or you can do what I done so add two numbers.
console.log(addition);

// Exercise 3

if ("0") console.log("#2 zero is true"); // This will print because the string "0" is a non-empty string which is true in JavaScript

if (-1) console.log("negative is true"); // This will print because -1 is a non-zero number which is true in JavaScript

if (1) console.log("positive is true"); // This will print because 1 is a non-zero number which is true in JavaScript

// Exercise 4

let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
result += a + b < 10 ? "less than 10" : "greater than 10"; // The += operator in JavaScript is a compound assignment operator
console.log(result);

// Exercise 5
let name = "Andre";
let getGreeting = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreeting("Andre"));

let name = "Andre";
let getGreeting = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreeting("Andre"));

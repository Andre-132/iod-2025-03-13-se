/**
 * Adds two numbers and logs the result to the console.
 *@param {number} a - First number to add
 *@param {number} b -Second number to add
 *@returns {voids} - The sum of a and b
 */

function sum(a, b) {
    let result= a + b;
    console.log(result)
}

sum(3, 4);//logs 7
sum(10, 5);//logs 15
sum(-3, 9);//logs 6

/**
 * Solves the difference of two numbers and logs the result to the console.
 *@param {number} a - First number to subtract
 *@param {number} b - Second number to subtract
 *@returns {voids} - The difference of a and b
 */

function difference(a, b) {
    let result= a - b;
    console.log(result)
}
difference(5, 3);//logs 2
difference(7, 2);//logs 5
difference(-5, 5);//logs -10

/**
 * Multiplies two numbers and logs the result to the console.
 *@param {number} a - First number to multiply
 *@param {number} b - Second number to multiply
 *@returns {voids} - The product of a and b
 */

function multiply(a, b) {
    let result= a * b; 
    console.log(result)
}
multiply(5, 5);//logs 25
multiply(3, 2);//logs 6
multiply(8, 0);//logs 0

/**
 * Divides the first number by the second number and logs the result to the console.
 *@param {number} a - First number to divide
 *@param {number} b - Second number to divide
 *@returns {voids} - The quotient of a and b
 */

 function divide(a, b) {
    let result= a / b;
    console.log(result)
}
divide(8, 2);//logs 4
divide(10, 2);//logs 5
divide(4, 9);//logs 0.44 repeating

/**
 * Logs a message to the console.
 * @param {string} message - The message to be logged.
 * @returns {void} - Logs the message to console.
 */

function sayHello(message) {
    console.log(message); 
}

sayHello("Hello Andre"); 

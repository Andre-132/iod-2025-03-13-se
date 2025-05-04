// Exercise 1

function makeCounter(startFrom = 0, incrementBy = 1) {
function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1();
counter1();
counter2();
counter2();

function makeCounter(startFrom) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter3 = makeCounter(5);
let counter4 = makeCounter(10);

counter3();
counter3();
counter4();
counter4();

function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(5, 2);
let counter2 = makeCounter(0, 1);

counter1();
counter1();

counter2();
counter2();
let counter5 = makeCounter(0, 2);
let counter6 = makeCounter(5, 3);

counter5();
counter5();
counter6();
counter6();

// Exercise 2

const delayMsg = (msg) => { // delayMsg is the variable, and this is a arrow function
  console.log(`This message will be printed after a delay: ${msg}`); //logs msg
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); // setting #1 delay message to 100 ms
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");  // setting #2 delay message to 20 ms
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");  // setting #3 delay message to 0 ms
delayMsg("#4: Not delayed at all"); // not applying a delay message for number 4

const timeoutId = setTimeout(delayMsg, 15000, "#5: Delayed by 15 seconds"); // timeoutId is the variable, setTimeout sets the delay message and its set to 15 seconds

clearTimeout(timeoutId); // clearTimeout cancels the timeout previously established

// Exercise 3

function debounce(func, ms) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), ms);
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

const debouncedPrintMe = debounce(printMe, 1000);

setTimeout(() => debouncedPrintMe("#1"), 100);
setTimeout(() => debouncedPrintMe("#2"), 200);
setTimeout(() => debouncedPrintMe("#3"), 300);

// Exercise 4

function printFibonacci() {
  let a = 0,
    b = 1;
  console.log(a);
  let intervalId = setInterval(() => {
    console.log(b);
    let next = a + b;
    a = b;
    b = next;
  }, 1000);
}
printFibonacci();

function printFibonacciTimeouts() {
  let a = 0,
    b = 1;
  console.log(a);
  const printNext = () => {
    console.log(b);
    let next = a + b;
    a = b;
    b = next;
    setTimeout(printNext, 1000);
  };
  setTimeout(printNext, 1000);
}
printFibonacciTimeouts();

function printFibonacciWithLimit(limit) {
  let a = 0,
    b = 1;
  console.log(a);
  let count = 1;
  const printNext = () => {
    if (count >= limit) return;
    console.log(b);
    let next = a + b;
    a = b;
    b = next;
    count++;
    setTimeout(printNext, 1000);
  };
  setTimeout(printNext, 1000);
}
printFibonacciWithLimit(10);

// Exercise 5

setTimeout(() => car.description(), 200);
let newCar = { ...car, year: 2023 };
newCar.description();

setTimeout(() => newCar.description(), 200);

setTimeout(car.description.bind(car), 200);

let updatedCar = { ...car, model: "718 Cayman" };

setTimeout(car.description.bind(car), 200);

setTimeout(updatedCar.description.bind(updatedCar), 200);

// Exercise 6

Function.prototype.delay = function (ms) {
  let func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5);

function multiplyExtended(a, b, c, d) {
  console.log(a * b * c * d);
}

multiplyExtended.delay(1000)(2, 3, 4, 5);

// Exercise 7

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const preciseClock = new PrecisionClock("Precise clock:", 500);
preciseClock.start();
setTimeout(() => preciseClock.stop(), 5000);

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    let date = new Date();
    let [hours, mins] = [date.getHours(), date.getMinutes()];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    const currentTime = `${hours}:${mins}`;

    if (currentTime === this.wakeupTime) {
      console.log(`Wake Up! It's ${this.wakeupTime}`);
      this.stop();
    } else {
      super.display();
    }
  }
}

const alarmClock = new AlarmClock("Alarm clock:", "23:45");
alarmClock.start();
setTimeout(() => alarmClock.stop(), 60000);

// Exercise 8

function validateStringArg(fn) {
  return function (arg) {
    if (typeof arg !== "string") {
      throw new Error("Argument must be a string!");
    }
    return fn(arg);
  };
}

function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems);

try {
  console.log(validatedOrderItem("Apple Watch"));
  console.log(validatedOrderItem(123));
} catch (error) {
  console.error(error.message);
}

function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

console.log(orderItems("Apple Watch", "MacBook", "iPhone"));

function validateStringArg(fn) {
  return function (...args) {
    for (let arg of args) {
      if (typeof arg !== "string") {
        throw new Error("All arguments must be strings!");
      }
    }
    return fn(...args);
  };
}

const validatedOrderItems = validateStringArg(orderItems);

try {
  console.log(validatedOrderItems("Apple Watch", "MacBook", "iPhone"));
  console.log(validatedOrderItems("Apple Watch", 123, "iPhone"));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItems("Apple Watch", "MacBook", "iPhone"));
  console.log(validatedOrderItems("Apple Watch", 123, "iPhone"));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItems(123, "MacBook", "iPhone"));
} catch (error) {
  console.error(error.message);
}

// Exercise 9

function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay * 1000);
  });
}

randomDelay()
  .then((delay) =>
    console.log(`Resolved after ${delay} seconds. The delay was even.`)
  )
  .catch((delay) =>
    console.error(`Rejected after ${delay} seconds. The delay was odd.`)
  );

// Exercise 10

import fetch from "node-fetch";
globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Valid URL response:", data))
  .catch((error) => console.error("Valid URL error:", error.message));

fetchURLData("https://invalid-url.typicode.com")
  .then((data) => console.log("Invalid URL response:", data))
  .catch((error) => console.error("Invalid URL error:", error.message));

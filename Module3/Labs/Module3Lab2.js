// Exercise 1
function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("new york city"));
console.log(ucFirstLetters("javaScript is fun"));

// Exercise 2

function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}

console.log(truncate("This text will be truncated if it is too long", 25));

// Option 2

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));

// Exercise 3

const animals = ["Tiger", "Giraffe"];
animals.push("Elephant", "Lion");
console.log(animals);

animals.unshift("Bear", "Zebra");
console.log(animals);

animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Leopard");
console.log(animals);

// Exercise 4

function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

// Exercise 5

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);

function currencyAddition(float1, float2) {
  const factor = 100;
  return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}

console.log(currencyAddition(0.1, 0.2));
console.log(0.3 === currencyAddition(0.1, 0.2));

function currencyOperation(float1, float2, operation) {
  const factor = 100;
  const num1 = Math.round(float1 * factor);
  const num2 = Math.round(float2 * factor);
  let result;

  switch (operation) {
    case "+":
      result = (num1 + num2) / factor;
      break;
    case "-":
      result = (num1 - num2) / factor;
      break;
    case "*":
      result = (num1 * num2) / (factor * factor);
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operation");
  }

  return result;
}

console.log(currencyOperation(0.1, 0.2, "+"));
console.log(0.3 === currencyOperation(0.1, 0.2, "+"));
console.log(currencyOperation(0.5, 0.2, "-"));
console.log(currencyOperation(0.1, 0.2, "*"));
console.log(currencyOperation(0.2, 0.1, "/"));

// Exercise 6

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colors));

console.log(unique(testScores));

const fruits = ["apple", "banana", "apple", "pear", "banana", "grape", "pear"];
console.log(unique(fruits));

// Exercise 7

function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book ? book.title : "Book not found";
}

console.log(getBookTitle(1));
console.log(getBookTitle(3));
console.log(getBookTitle(6));

function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}

console.log(getOldBooks());

function addGenre() {
  return books.map((book) => ({ ...book, genre: "classic" }));
}

console.log(addGenre());

// Exercise 8

const phoneBookABC = new Map([
  ["Annabelle", "0412312343"],
  ["Barry", "0433221117"],
  ["Caroline", "0455221182"],
]);

phoneBookABC.set("Caroline", "0499887766");

const phoneBookDEF = new Map([
  ["Daniel", "0466223344"],
  ["Ella", "0422445599"],
  ["Frank", "0488221123"],
]);

function printPhoneBook(contacts) {
  contacts.forEach((phone, name) => {
    console.log(`${name}: ${phone}`);
  });
}

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log([...phoneBook.keys()]);

// Exercise 9

function sumSalaries(salaries) {
  let total = 0;
  for (let salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let maxSalary = 0;
  let topEarnerName = "";

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarnerName = name;
    }
  }
  return topEarnerName;
}

console.log(topEarner(salaries));

// Exercise 10

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + " minutes have passed so far today");

const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + " seconds have passed so far today");

function calculateAge(birthDate) {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const daysInPrevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += daysInPrevMonth;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
}

const myBirthDate = new Date("1990-05-15");
calculateAge(myBirthDate);

function daysInBetween(date1, date2) {
  const start = new Date(date1).getTime();
  const end = new Date(date2).getTime();
  const difference = Math.abs(end - start);
  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

console.log(daysInBetween("2025-04-10", "2025-05-10"));

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
const name = "Andre";
let getGreeting = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreeting("Andre"));

const name = "Andre";
let getGreeting = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreeting("Andre"));

// Exercise 6

const westley = {
  name: 'Westley',
  numFingers: 5
  }
  const rugen = {
  name: 'Count Rugen',
  numFingers: 6
  }
  const inigo = {
  firstName: 'Inigo', lastName: 'Montoya'
  greeting(person) {
  let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
  console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
  person.numFingers == 6
  ? "You killed my father. Prepare to die."
  : 'Nice to meet you.'

};
  inigo.greeting(westley)
  inigo.greeting(rugen)

  // Exercise 7

  const basketballGame = {
    score: 0,
    fouls: 0, 
    
    freeThrow() {
      this.score++;
      return this; 
    },
    
    basket() {
      this.score += 2;
      return this; 
    },
    
    threePointer() {
      this.score += 3;
      return this; 
    },
    
    addFoul() {
      this.fouls++;
      return this; 
    },
    
    halfTime() {
      console.log(`Halftime score: ${this.score}, Fouls: ${this.fouls}`);
      return this;
    },
    
    fullTime() {
      console.log(`Final score: ${this.score}, Fouls: ${this.fouls}`);
      return this; 
    }
  };
  
  basketballGame
    .basket()
    .freeThrow()
    .addFoul()
    .threePointer()
    .freeThrow()
    .halfTime()
    .basket()
    .addFoul()
    .fullTime();

    // Exercise 8

function printCityProperties(city) {
  for (let property in city) {
    console.log(`${property}: ${city[property]}`);
  }
}

const sydney = {
  name: 'Sydney',
  population: 5_121_000,
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney',
};

console.log("Sydney Properties:");
printCityProperties(sydney);

const newYork = {
  name: 'New York',
  population: 8_468_000,
  state: 'New York',
  founded: '1624',
  timezone: 'America/New_York',
};

console.log("\nNew York Properties:");
printCityProperties(newYork);

    // Exercise 9

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports;
moreSports.push('Basketball');
moreSports.unshift('Football');

let dog2 = dog1;
dog2 = 'Charlie';

let cat2 = cat1;
cat2.name = 'Whiskers';

console.log('Original teamSports:', teamSports); 
console.log('Original dog1:', dog1); 
console.log('Original cat1:', cat1); 

let independentSports = [...teamSports];
independentSports.push('Tennis'); 

let independentCat = { ...cat1 }; 
independentCat.name = 'Mittens'; 

console.log('Modified independentSports:', independentSports); 
console.log('Original teamSports after independence:', teamSports);
console.log('Modified independentCat:', independentCat); 
console.log('Original cat1 after independence:', cat1);

    // Exercise 10

    //constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function() {
    return this.age >= 16; 
  };
}

const person1 = new Person('Alice', 25);

const person2 = new Person('Bob', 12);

console.log('Person 1:', person1);
console.log('Can Person 1 drive?', person1.canDrive());
console.log('Person 2:', person2);
console.log('Can Person 2 drive?', person2.canDrive());

    // class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16; 
  }
}

const person3 = new PersonClass('Charlie', 30);

console.log('Person 3:', person3);
console.log('Can Person 3 drive?', person3.canDrive());
const { diceRoll } = require("./diceRoll.js");

for (let i = 1; i < 100; i++) {
    let testResult = diceRoll(i);
    if (testResult > i || testResult < 1)
        throw Error("Invalid dice result " + testResult + " for max " + i);
}

console.log("All tests passed!");
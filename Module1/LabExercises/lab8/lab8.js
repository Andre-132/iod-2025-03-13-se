function getDiceInput() {
    let sides = document.getElementById("numSides").value;
    return sides;
}

function diceRollAndUpdate() {
    let sides = getDiceInput();
    let result = diceRoll(sides);
    document.getElementById("dice-result").innerText = "You rolled a " + result;
}

function diceRoll(numberOfFaces) {
    return Math.floor(Math.random() * numberOfFaces) + 1;
}

module.exports = {
    diceRoll,
    diceRollAndUpdate,
};
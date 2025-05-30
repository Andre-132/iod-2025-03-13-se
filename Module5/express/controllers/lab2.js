// controllers/calculatorController.js

function parseInts(req, res) {
  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);

  if (isNaN(x) || isNaN(y)) {
    res.status(400).send("Invalid input. Please provide valid integers.");
    return null;
  }

  return { x, y };
}

const add = (req, res) => {
  console.log("Hit Add Controller");
  const values = parseInts(req, res);
  if (!values) return;
  res.send(`Result ${values.x + values.y}`);
};

const subtract = (req, res) => {
  console.log("Hit Subtract Controller");
  const values = parseInts(req, res);
  if (!values) return;
  res.send(`Result ${values.x - values.y}`);
};

const multiply = (req, res) => {
  console.log("Hit Multiply Controller");
  const values = parseInts(req, res);
  if (!values) return;
  res.send(`Result ${values.x * values.y}`);
};

const divide = (req, res) => {
  console.log("Hit Divide Controller");
  const values = parseInts(req, res);
  if (!values) return;

  if (values.y === 0) {
    return res.status(400).send("Cannot divide by zero.");
  }

  res.send(`Result ${Math.floor(values.x / values.y)}`);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

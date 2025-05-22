const express = require("express");
const port = 3000;

const math = express();

math.get("/add", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x + y;
  res.send(`Result ${result}`);
});
math.get("/subtract", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x - y;
  res.send(`Result ${result}`);
});

math.get("/multiply", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x * y;
  res.send(`Result ${result}`);
});

math.get("/divide", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (y === 0) {
    return res.status(400).send("Cannot divide by zero");
  }
  const result = x / y;
  res.send(`Result ${result}`);
});

math.listen(port, () => {
  console.log(`Math server running at http://localhost:${port}`);
});

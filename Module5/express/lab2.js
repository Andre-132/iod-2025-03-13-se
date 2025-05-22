const express = require("express");
const math = express();
const port = 3000;

math.get("/add", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x + y;
  res.send(`Result: ${result}`);
});

math.get("/subtract", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x - y;
  res.send(`Result: ${result}`);
});

math.get("/multiply", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x * y;
  res.send(`Result: ${result}`);
});

math.get("/divide", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (y === 0) {
    res.send("Error: Cannot divide by zero.");
  } else {
    const result = x / y;
    res.send(`Result: ${result}`);
  }
});

math.listen(port, () => {
  console.log(`Math server running at http://localhost:${port}`);
});

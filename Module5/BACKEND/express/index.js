// Lab 1
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is running on port 3000");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

const app2 = express();
const port2 = 4000;

app2.get("/", (req, res) => {
  res.send("This is running on port 4000");
});

app2.listen(port2, () => {
  console.log(`Example app listening
at http://localhost:${port2}`);
});

// LAB 2

const addition = express();

app.get("/add", (req, res) => {
  res.send("+");
});

const subtraction = express();

app.get("/subtract", (req, res) => {
  res.send("-");
});

const multiplication = express();

app.get("/multiply", (req, res) => {
  res.send("*");
});

const division = express();

app.get("/divide", (req, res) => {
  res.send("/");
});

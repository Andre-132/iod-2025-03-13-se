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

// Lab 2

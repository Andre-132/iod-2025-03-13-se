const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  console.log("hit route");

  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  console.log("Hit Add Route");
  res.send(`Result ${x + y}`);
});
module.exports = router;
/*
exports.add = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  console.log("Hit Add Route");
  res.send(`Result ${x + y}`);
};

exports.subtract = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  console.log("Hit Add Route");
  res.send(`Result ${x - y}`);
};

exports.multiply = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  console.log("Hit Add Route");
  res.send(`Result ${x * y}`);
};

exports.divide = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (y === 0) {
    return res.status(400).send("Cannot divide by zero");
  }
  console.log("Hit Add Route");
  res.send(`Result ${x / y}`);
};
*/

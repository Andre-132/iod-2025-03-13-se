exports.add = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  res.send(`Result ${x + y}`);
};

exports.subtract = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  res.send(`Result ${x - y}`);
};

exports.multiply = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  res.send(`Result ${x * y}`);
};

exports.divide = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (y === 0) {
    return res.status(400).send("Cannot divide by zero");
  }
  res.send(`Result ${x / y}`);
};

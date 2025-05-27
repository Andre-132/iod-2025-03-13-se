exports.add = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x + y;
  res.send(`Result ${result}`);
};

exports.subtract = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x - y;
  res.send(`Result ${result}`);
};

exports.multiply = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x * y;
  res.send(`Result ${result}`);
};

exports.divide = (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (y === 0) {
    return res.status(400).send("Cannot divide by zero");
  }
  const result = x / y;
  res.send(`Result ${result}`);
};

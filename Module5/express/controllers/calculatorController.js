const express = require("express");
const mathController = require("./controllers/mathController");
const port = 3000;

const math = express();

math.use(express.static("public"));

math.get("/add", mathController.add);
math.get("/subtract", mathController.subtract);
math.get("/multiply", mathController.multiply);
math.get("/divide", mathController.divide);

math.listen(port, () => {
  console.log(`Math server running at http://localhost:${port}`);
});

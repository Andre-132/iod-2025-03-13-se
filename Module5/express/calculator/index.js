const express = require("express");
const appController = require("./routes/lab2");
const port = 3000;

const app = express();

app.use("/", express.static("public"));

app.use("/calculator", appController);

app.listen(port, () => {
  console.log(`app server running at http://localhost:${port}`);
});

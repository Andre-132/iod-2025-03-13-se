const path = require("path");
const express = require("express");
const { router: appController } = require("./routes/lab2");
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/calculator", appController);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`app server running at http://localhost:${port}`);
});

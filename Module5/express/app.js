const express = require("express");
const app = express();
const path = require("path");
const calculatorRoutes = require("./routes/calcRoutes");

app.use(express.static(path.join(__dirname, "public")));
app.use("/calc", calculatorRoutes);

module.exports = app;

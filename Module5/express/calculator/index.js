const express = require("express");
const path = require("path");
const calculatorRoutes = require("./js/routes/calculator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", calculatorRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.use((req, res) => {
  res.status(404).json({ error: "Page not found" });
});

app.listen(PORT, () => {
  console.log(`Calculator app listening on port ${PORT}`);
});

module.exports = app;

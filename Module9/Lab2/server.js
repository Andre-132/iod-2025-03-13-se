const express = require("express");
const app = express();
require("dotenv").config();

application / json;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

let dbConnect = require("./dbConnect");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port 
${PORT}.`);
});

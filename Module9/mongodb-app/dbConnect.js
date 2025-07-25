"use strict";

const Mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.DB_URI || "mongodb://localhost/Module9";

Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error: " + error.message));

const db = Mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = {
  Mongoose,
  db,
};

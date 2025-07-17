const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const postsSchema = new Schema({
  title: { type: String, trim: true, required: true },
  content: { type: String, trim: true, required: true },
});

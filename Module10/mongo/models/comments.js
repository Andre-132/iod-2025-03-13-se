const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const commentsSchema = new Schema({
  content: { type: String, trim: true, required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentsSchema);

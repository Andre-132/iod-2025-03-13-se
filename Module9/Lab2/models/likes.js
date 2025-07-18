const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const likesSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Like", likesSchema);

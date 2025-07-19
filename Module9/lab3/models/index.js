"use strict";
const users = require("./users");
const posts = require("./posts");
const comments = require("./comments");
const likes = require("./likes");
async function init() {
  await users.sync();
  await posts.sync();
  await comments.sync();
  await likes.sync();
}
init();
module.exports = {
  users,
  likes,
  comments,
  posts,
};

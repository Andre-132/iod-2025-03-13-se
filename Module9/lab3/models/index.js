"use strict";
const users = require("./users");
async function init() {
  await users.sync();
}
init();
module.exports = {
  users,
};

let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

module.exports = router;

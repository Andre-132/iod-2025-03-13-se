const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.get("/username/:username", userController.getUserByUsername);

router.get("/email/:email", userController.getUserByEmail);

router.put("/:id", userController.updateUser);

router.get("/check/username/:username", userController.checkUsername);

router.get("/check/email/:email", userController.checkEmail);

module.exports = router;

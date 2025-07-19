const express = require("express");
const router = express.Router();
const { postController } = require("../controllers");

router.get("/", postController.getAllPosts);

router.get("/:id", postController.getPostById);

router.post("/", postController.createPost);

router.get("/user/:userId", postController.getPostsByUserId);

module.exports = router;

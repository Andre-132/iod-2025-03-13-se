const express = require("express");
const router = express.Router();
const { commentController } = require("../controllers");

router.post("/", commentController.createComment);

router.get("/:id", commentController.getCommentById);

router.get("/user/:userId", commentController.getCommentsByUserId);

router.get("/post/:postId", commentController.getCommentsByPostId);

router.get("/post/:postId/count", commentController.getCommentCount);

router.get("/:commentId/replies", commentController.getRepliesByCommentId);

module.exports = router;

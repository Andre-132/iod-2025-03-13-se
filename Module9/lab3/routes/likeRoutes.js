const express = require("express");
const router = express.Router();
const { likeController } = require("../controllers");

router.post("/toggle", likeController.toggleLike);

router.get("/post/:postId", likeController.getLikesByPostId);

router.get("/user/:userId", likeController.getLikesByUserId);

router.get("/check/:userId/:postId", likeController.checkUserLike);

router.get("/post/:postId/count", likeController.getLikeCount);

module.exports = router;

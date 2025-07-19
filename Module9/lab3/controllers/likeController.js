const Like = require("../models");

const likeController = {
  toggleLike: async (req, res) => {
    try {
      const { user_id, post_id, content } = req.body;

      if (!user_id || !post_id) {
        return res
          .status(400)
          .json({ error: "user_id and post_id are required" });
      }

      const existingLike = await Like.findOne({
        where: { user_id, post_id },
      });

      if (existingLike) {
        await existingLike.destroy();
        res.status(200).json({ message: "Post unliked", liked: false });
      } else {
        const newLike = await Like.create({
          user_id,
          post_id,
          content: content || null,
        });
        res.status(201).json({
          message: "Post liked",
          liked: true,
          like: newLike,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getLikesByPostId: async (req, res) => {
    try {
      const { postId } = req.params;
      const likes = await Like.findAll({
        where: { post_id: postId },
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(likes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getLikesByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const likes = await Like.findAll({
        where: { user_id: userId },
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(likes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  checkUserLike: async (req, res) => {
    try {
      const { userId, postId } = req.params;
      const like = await Like.findOne({
        where: {
          user_id: userId,
          post_id: postId,
        },
      });

      res.status(200).json({
        liked: !!like,
        like: like || null,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getLikeCount: async (req, res) => {
    try {
      const { postId } = req.params;
      const count = await Like.count({
        where: { post_id: postId },
      });
      res.status(200).json({
        post_id: postId,
        likeCount: count,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = likeController;

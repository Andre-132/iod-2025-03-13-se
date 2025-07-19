const Comment = require("../models");

const commentController = {
  getCommentsByPostId: async (req, res) => {
    try {
      const { postId } = req.params;

      const comments = await Comment.findAll({
        where: { postId },
        order: [["createdAt", "ASC"]],
      });

      const parentComments = comments.filter((comment) => !comment.parentId);
      const childComments = comments.filter((comment) => comment.parentId);

      const commentsWithReplies = parentComments.map((parent) => {
        const replies = childComments.filter(
          (child) => child.parentId === parent.id
        );
        return {
          ...parent.toJSON(),
          replies: replies,
        };
      });

      res.status(200).json(commentsWithReplies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createComment: async (req, res) => {
    try {
      const { postId, user_id, content, parentId } = req.body;

      if (!postId || !user_id || !content) {
        return res.status(400).json({
          error: "postId, user_id, and content are required",
        });
      }

      // If parentId is provided, verify parent comment exists
      if (parentId) {
        const parentComment = await Comment.findByPk(parentId);
        if (!parentComment) {
          return res.status(404).json({ error: "Parent comment not found" });
        }
        if (parentComment.postId !== postId) {
          return res.status(400).json({
            error: "Parent comment must belong to the same post",
          });
        }
      }

      const newComment = await Comment.create({
        postId,
        user_id,
        content,
        parentId: parentId || null,
      });

      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCommentsByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const comments = await Comment.findAll({
        where: { user_id: userId },
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCommentById: async (req, res) => {
    try {
      const { id } = req.params;
      const comment = await Comment.findByPk(id);

      if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
      }

      let commentData = comment.toJSON();
      if (!comment.parentId) {
        const replies = await Comment.findAll({
          where: { parentId: comment.id },
          order: [["createdAt", "ASC"]],
        });
        commentData.replies = replies;
      }

      res.status(200).json(commentData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCommentCount: async (req, res) => {
    try {
      const { postId } = req.params;
      const count = await Comment.count({
        where: { postId },
      });
      res.status(200).json({
        postId: parseInt(postId),
        commentCount: count,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getRepliesByCommentId: async (req, res) => {
    try {
      const { commentId } = req.params;
      const replies = await Comment.findAll({
        where: { parentId: commentId },
        order: [["createdAt", "ASC"]],
      });
      res.status(200).json(replies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = commentController;

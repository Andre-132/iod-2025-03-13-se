const { Post, User, Comment, Like } = require("../models");

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: [
          {
            model: User,
            as: "user",
            attributes: ["user_id", "username"],
          },
          {
            model: Comment,
            as: "comments",
            attributes: ["comment_id"],
          },
          {
            model: Like,
            as: "likes",
            attributes: ["like_id"],
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      const postsWithCounts = posts.map((post) => {
        const postData = post.toJSON();
        return {
          ...postData,
          commentCount: postData.comments.length,
          likeCount: postData.likes.length,
          comments: undefined,
          likes: undefined,
        };
      });

      res.status(200).json(postsWithCounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id, {
        include: [
          {
            model: User,
            as: "user",
            attributes: ["user_id", "username"],
          },
          {
            model: Comment,
            as: "comments",
            include: [
              {
                model: User,
                as: "user",
                attributes: ["user_id", "username"],
              },
            ],
          },
          {
            model: Like,
            as: "likes",
            include: [
              {
                model: User,
                as: "user",
                attributes: ["user_id", "username"],
              },
            ],
          },
        ],
      });

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, description, imageURL, userId } = req.body;

      if (!title || !userId) {
        return res.status(400).json({ error: "Title and userId are required" });
      }

      const newPost = await Post.create({
        title,
        description,
        imageURL,
        userId,
      });

      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPostsByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const posts = await Post.findAll({
        where: { userId },
        include: [
          {
            model: User,
            as: "user",
            attributes: ["user_id", "username"],
          },
          {
            model: Comment,
            as: "comments",
            attributes: ["comment_id"],
          },
          {
            model: Like,
            as: "likes",
            attributes: ["like_id"],
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      const postsWithCounts = posts.map((post) => {
        const postData = post.toJSON();
        return {
          ...postData,
          commentCount: postData.comments.length,
          likeCount: postData.likes.length,
          comments: undefined,
          likes: undefined,
        };
      });

      res.status(200).json(postsWithCounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = postController;

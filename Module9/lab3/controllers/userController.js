const User = require("../models");

const userController = {
  createUser: async (req, res) => {
    try {
      const { username, email } = req.body;

      if (!username || !email) {
        return res
          .status(400)
          .json({ error: "Username and email are required" });
      }

      const newUser = await User.create({
        username,
        email,
      });

      res.status(201).json(newUser);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ error: "Username or email already exists" });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserByUsername: async (req, res) => {
    try {
      const { username } = req.params;
      const user = await User.findOne({
        where: { username },
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserByEmail: async (req, res) => {
    try {
      const { email } = req.params;
      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { username, email } = req.body;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await user.update({
        username: username || user.username,
        email: email || user.email,
      });

      res.status(200).json(user);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ error: "Username or email already exists" });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },

  checkUsername: async (req, res) => {
    try {
      const { username } = req.params;
      const user = await User.findOne({
        where: { username },
        attributes: ["id", "username"],
      });

      res.status(200).json({
        exists: !!user,
        available: !user,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  checkEmail: async (req, res) => {
    try {
      const { email } = req.params;
      const user = await User.findOne({
        where: { email },
        attributes: ["id", "email"],
      });

      res.status(200).json({
        exists: !!user,
        available: !user,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;

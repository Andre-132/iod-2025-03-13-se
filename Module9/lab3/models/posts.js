const { DataTypes } = require("sequelize");

const Post = sequelize.define(
  "Post",
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.STRING(500),
    },
    imageURL: {
      type: DataTypes.STRING(255),
    },
    shareURL: {
      type: DataTypes.STRING(255),
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
  },
  {
    tableName: "posts",
    timestamps: true,
    indexes: [
      { fields: ["userId"] },
      { fields: ["createdAt"] },
      { fields: ["title"] },
    ],
  }
);

module.exports = Post;

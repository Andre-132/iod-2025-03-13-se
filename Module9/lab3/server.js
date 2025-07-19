require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Server is running!",
    database: "Connected to MySQL",
    timestamp: new Date().toISOString(),
  });
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

const likeRoutes = require("./routes/likeRoutes");
app.use("/api/likes", likeRoutes);

const commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open your browser to: http://localhost:${PORT}`);
});

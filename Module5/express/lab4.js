const express = require("express");
const port = 3000;
const names = express();

names.use(express.json());

const friends = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Brian" },
  { id: 3, name: "Andrew" },
  { id: 4, name: "Charlie" },
  { id: 5, name: "alen" },
];

names.get("/filter", (req, res) => {
  const letter = req.query.letter;

  if (!letter) {
    return res.status(400).send("Query parameter 'letter' is required");
  }

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().startsWith(letter.toLowerCase())
  );

  res.json(filteredFriends);
});

names.get("/info", (req, res) => {
  const headers = req.headers;

  const filteredHeaders = {
    "user-agent": headers["user-agent"] || null,
    "content-type": headers["content-type"] || null,
    accept: headers["accept"] || null,
  };

  res.json(filteredHeaders);
});

names.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const friend = friends.find((f) => f.id === id);

  if (!friend) {
    return res.status(404).send("Friend not found");
  }

  res.json(friend);
});

names.put("/friends/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newName = req.body.name;

  if (!newName || typeof newName !== "string" || newName.trim() === "") {
    return res.status(400).json({ error: "Valid 'name' is required" });
  }

  const friend = friends.find((f) => f.id === id);

  if (!friend) {
    return res.status(404).json({ error: "Friend not found" });
  }

  friend.name = newName.trim();

  res.json(friend);
});

const PORT = 3000;
names.listen(port, () => {
  console.log(`Server running on port ${PORT}`);
});

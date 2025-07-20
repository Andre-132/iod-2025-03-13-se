const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = new Map();
let typingUsers = new Set();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("set nickname", (nickname) => {
    users.set(socket.id, {
      nickname: nickname,
      id: socket.id,
    });

    socket.broadcast.emit("user joined", nickname);

    const userList = Array.from(users.values()).map((user) => user.nickname);
    io.emit("users list", userList);

    console.log(`${nickname} joined the chat`);
  });

  socket.on("chat message", (msg) => {
    const user = users.get(socket.id);
    if (user) {
      socket.broadcast.emit("chat message", {
        nickname: user.nickname,
        message: msg,
        timestamp: new Date().toLocaleTimeString(),
      });
    }
  });

  socket.on("typing", () => {
    const user = users.get(socket.id);
    if (user && !typingUsers.has(socket.id)) {
      typingUsers.add(socket.id);
      socket.broadcast.emit("user typing", user.nickname);
    }
  });

  socket.on("stop typing", () => {
    const user = users.get(socket.id);
    if (user && typingUsers.has(socket.id)) {
      typingUsers.delete(socket.id);
      socket.broadcast.emit("user stopped typing", user.nickname);
    }
  });

  socket.on("disconnect", () => {
    const user = users.get(socket.id);
    if (user) {
      typingUsers.delete(socket.id);

      socket.broadcast.emit("user left", user.nickname);

      users.delete(socket.id);

      const userList = Array.from(users.values()).map((user) => user.nickname);
      io.emit("users list", userList);

      console.log(`${user.nickname} disconnected`);
    } else {
      console.log("A user disconnected:", socket.id);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on *:${PORT}`);
});

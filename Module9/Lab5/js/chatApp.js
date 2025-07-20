const socket = io();
let nickname = "";
let typingTimer;
let isTyping = false;

const nicknameModal = document.getElementById("nickname-modal");
const nicknameInput = document.getElementById("nickname-input");
const nicknameSubmit = document.getElementById("nickname-submit");
const currentUserSpan = document.getElementById("current-user");
const messages = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const usersList = document.getElementById("users");
const userCount = document.getElementById("user-count");
const typingDiv = document.getElementById("typing");

nicknameInput.focus();

nicknameSubmit.addEventListener("click", setNickname);
nicknameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") setNickname();
});

function setNickname() {
  const inputNickname = nicknameInput.value.trim();
  if (inputNickname) {
    nickname = inputNickname;
    socket.emit("set nickname", nickname);
    nicknameModal.classList.add("hidden");
    currentUserSpan.textContent = nickname;
    messageInput.disabled = false;
    sendButton.disabled = false;
    messageInput.focus();
  }
}

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  } else {
    handleTyping();
  }
});

messageInput.addEventListener("input", handleTyping);

function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg) {
    addMessage(nickname, msg, new Date().toLocaleTimeString(), true);

    socket.emit("chat message", msg);

    messageInput.value = "";

    stopTyping();
  }
}

function handleTyping() {
  if (!isTyping) {
    isTyping = true;
    socket.emit("typing");
  }

  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    stopTyping();
  }, 1000);
}

function stopTyping() {
  if (isTyping) {
    isTyping = false;
    socket.emit("stop typing");
  }
}

function addMessage(user, message, timestamp, isOwn = false) {
  const item = document.createElement("div");
  item.className = `message ${isOwn ? "own" : "other"}`;

  const header = document.createElement("div");
  header.className = "message-header";
  header.textContent = `${user} • ${timestamp}`;

  const content = document.createElement("div");
  content.textContent = message;

  item.appendChild(header);
  item.appendChild(content);
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function addSystemMessage(message) {
  const item = document.createElement("div");
  item.className = "system-message";
  item.textContent = message;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function updateUsersList(users) {
  usersList.innerHTML = "";
  userCount.textContent = users.length;

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user === nickname ? `${user} (you)` : user;
    usersList.appendChild(li);
  });
}

// Socket event listeners
socket.on("chat message", (data) => {
  addMessage(data.nickname, data.message, data.timestamp, false);
});

socket.on("user joined", (username) => {
  addSystemMessage(`${username} joined the chat`);
});

socket.on("user left", (username) => {
  addSystemMessage(`${username} left the chat`);
});

socket.on("users list", (users) => {
  updateUsersList(users);
});

socket.on("user typing", (username) => {
  typingDiv.textContent = `${username} is typing...`;
});

socket.on("user stopped typing", (username) => {
  typingDiv.textContent = "";
});

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", () => {
  addSystemMessage("Disconnected from server");
  messageInput.disabled = true;
  sendButton.disabled = true;
});

let posts = [];
let postIdCounter = 1;

const postForm = document.getElementById("postForm");
const postsContainer = document.getElementById("postsContainer");

function initializeSamplePosts() {
  const samplePosts = [
    {
      id: 1,
      title: "Welcome to My Blog",
      description:
        "This is my first post on this amazing blog platform. I'm excited to share my thoughts and connect with other people!",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
      likes: 3,
      likedByUser: false,
      comments: [
        {
          id: 1,
          text: "Great first post! Looking forward to more content.",
          author: "Alice",
        },
        { id: 2, text: "Welcome to the blogging world!", author: "Bob" },
      ],
      timestamp: new Date("2024-01-15T10:30:00"),
    },
    {
      id: 2,
      title: "Tips for Better Photography",
      description:
        "Here are some essential tips I've learned over the years that can help improve your photography skills. From composition to lighting, these basics will make a huge difference!",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=300&fit=crop",
      likes: 7,
      likedByUser: false,
      comments: [
        {
          id: 1,
          text: "These tips are so helpful! Thank you for sharing.",
          author: "Carol",
        },
      ],
      timestamp: new Date("2024-01-14T14:15:00"),
    },
  ];

  posts = samplePosts;
  postIdCounter = 3;
  renderPosts();
}

function createPost(title, description, image) {
  const newPost = {
    id: postIdCounter++,
    title,
    description,
    image:
      image ||
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b6d5?w=500&h=300&fit=crop",
    likes: 0,
    likedByUser: false,
    comments: [],
    timestamp: new Date(),
  };

  posts.unshift(newPost);
  renderPosts();
}

function toggleLike(postId) {
  const post = posts.find((p) => p.id === postId);
  if (post) {
    if (post.likedByUser) {
      post.likes--;
      post.likedByUser = false;
    } else {
      post.likes++;
      post.likedByUser = true;
    }
    renderPosts();
  }
}

function addComment(postId, commentText) {
  const post = posts.find((p) => p.id === postId);
  if (post && commentText.trim()) {
    const newComment = {
      id: Date.now(),
      text: commentText.trim(),
      author: "Anonymous User",
    };
    post.comments.push(newComment);
    renderPosts();
  }
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Render all posts
function renderPosts() {
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
                    <img src="${post.image}" alt="${
      post.title
    }" class="post-image" onerror="this.src='https://images.unsplash.com/photo-1486312338219-ce68e2c6b6d5?w=500&h=300&fit=crop'">
                    <div class="post-content">
                        <h3 class="post-title">${post.title}</h3>
                        <p class="post-description">${post.description}</p>
                        <div class="post-meta">
                            <span class="post-date">${formatDate(
                              post.timestamp
                            )}</span>
                            <div class="post-actions">
                                <button class="like-btn ${
                                  post.likedByUser ? "liked" : ""
                                }" onclick="toggleLike(${post.id})">
                                    ❤️ <span class="like-count">${
                                      post.likes
                                    }</span>
                                </button>
                            </div>
                        </div>
                        <div class="comments-section">
                            <div class="comments-header">Comments (${
                              post.comments.length
                            })</div>
                            <div class="comments-list">
                                ${post.comments
                                  .map(
                                    (comment) => `
                                    <div class="comment">
                                        <div class="comment-author">${comment.author}</div>
                                        <div class="comment-text">${comment.text}</div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                            <div class="comment-form">
                                <input type="text" class="comment-input" placeholder="Add a comment..." id="comment-${
                                  post.id
                                }">
                                <button class="comment-btn" onclick="handleCommentSubmit(${
                                  post.id
                                })">Post</button>
                            </div>
                        </div>
                    </div>
                `;
    postsContainer.appendChild(postElement);
  });
}

function handleCommentSubmit(postId) {
  const commentInput = document.getElementById(`comment-${postId}`);
  const commentText = commentInput.value;

  if (commentText.trim()) {
    addComment(postId, commentText);
    commentInput.value = "";
  }
}

postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(postForm);
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");

  createPost(title, description, image);
  postForm.reset();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.classList.contains("comment-input")) {
    const postId = parseInt(e.target.id.replace("comment-", ""));
    handleCommentSubmit(postId);
  }
});

initializeSamplePosts();

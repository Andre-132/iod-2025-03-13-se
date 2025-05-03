function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("post-container");
      container.innerHTML = "";

      data.forEach((post) => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-3";

        col.innerHTML = `
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
              </div>
            </div>
          `;

        container.appendChild(col);
      });
    })
    .catch((error) => console.error("Error fetching posts:", error));
}

window.addEventListener("DOMContentLoaded", fetchPosts);

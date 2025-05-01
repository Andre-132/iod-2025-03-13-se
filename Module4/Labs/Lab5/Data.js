let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

const newsContainer = document.getElementById("news-container");

function displayNews() {
  newsContainer.innerHTML = "";
  news.forEach((item) => {
    const newsEl = document.createElement("div");
    newsEl.className = "news-item p-3 border rounded";
    newsEl.innerHTML = `<h5>${item.title}</h5><p>${item.content}</p>`;
    newsContainer.appendChild(newsEl);
  });
}

displayNews();

setInterval(displayNews, 5000);

document
  .getElementById("news-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("news-title").value.trim();
    const content = document.getElementById("news-content").value.trim();

    if (title && content) {
      news.push({
        id: news.length + 1,
        title,
        content,
      });

      document.getElementById("news-title").value = "";
      document.getElementById("news-content").value = "";
    }
  });

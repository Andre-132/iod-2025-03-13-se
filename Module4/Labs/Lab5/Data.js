let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

const container = document.getElementById("news-list");
const template = document.getElementById("news-template");

function renderNews() {
  container.innerHTML = "";

  news.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".card-title").innerText = item.title;
    clone.querySelector(".card-text").innerText = item.content;
    container.appendChild(clone);
  });
}

renderNews();

setInterval(() => {
  news.push({
    id: news.length + 1,
    title: `Breaking News #${news.length + 1}`,
    content: "New update just in...",
  });

  renderNews();
}, 5000);

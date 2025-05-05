//exercise 1
function addCard(name, age) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <h3>${name}</h3>
      <p>Age: ${age}</p>
    `;
  document.body.appendChild(card);
}

//exercise 2

const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];

data.forEach((person) => {
  addCard(person.name, person.age);
});

// exercise 3

const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
    },
  ],
};

function addArtworkCard(title, url) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <h3>${title}</h3>
      <img src="${url}" alt="${title}" style="width:100%; max-height:200px; object-fit:cover;">
    `;
  document.body.appendChild(card);
}

artist.portfolio.forEach((art) => {
  addArtworkCard(art.title, art.url);
});

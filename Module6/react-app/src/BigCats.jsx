import React from "react";
import SingleCat from "./SingleCats";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://nationalzoo.si.edu/sites/default/files/styles/wide/public/animals/cheetah-002.jpg?h=c8501f53&itok=zro4sVwK",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3O0FkluSKm7g7HqRTvUM0Bh9M-0VJYaC-wtARuqFJ-2EWKFfA6N7FlFw5R1YQ-EfN_KBhZNZoRWrzWWijAHg5Dw",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://i.natgeofe.com/k/9d3c4202-eca1-4415-a52c-1628d34b5435/Leopard-tree_2x1.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTE3ODk5MzY2ODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
  },
];

function BigCats() {
  return (
    <ul className="Cats" style={{ padding: 0 }}>
      {cats.map((cat) => (
        <SingleCat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          image={cat.image}
        />
      ))}
    </ul>
  );
}

export default BigCats;

import React from "react";

function SingleCats({ name, latinName, image }) {
  return (
    <li
      className="cat-item"
      style={{ marginBottom: "1rem", listStyle: "none" }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "150px", borderRadius: "8px", display: "block" }}
      />
      <h2>{name}</h2>
      <p>
        <em>{latinName}</em>
      </p>
    </li>
  );
}

export default SingleCats;

import React from "react";

function SingleCat({ cat, onDelete }) {
  return (
    <div>
      <h4>{cat.name}</h4>
      <p>
        <em>{cat.latinName}</em>
      </p>
      <img src={cat.image} alt={cat.name} width="200" />
      <br />
      <button onClick={() => onDelete(cat.id)}>Delete</button>
    </div>
  );
}

export default SingleCat;

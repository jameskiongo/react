import React from "react";

function Card({ name, content }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Card;

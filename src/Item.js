import React, { useState } from "react";

function Item({ title, body }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{body}</p>
      <button
        className={liked ? "liked-btn" : "like-btn"}
        onClick={() => setLiked(!liked)}
      >
        {liked ? "Liked ❤️" : "Like 🤍"}
      </button>
    </div>
  );
}

export default Item;
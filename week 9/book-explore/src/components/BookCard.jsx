
import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "1rem",
      width: "200px",
      textAlign: "center",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{book.title}</h3>
      <p><em>{book.author}</em></p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
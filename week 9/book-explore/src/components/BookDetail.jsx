
import React from "react";
import { useParams, Link } from "react-router-dom";

function BookDetail({ books }) {
  const { id } = useParams(); // get book ID from URL
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2 style={{ textAlign: "center" }}>Book not found!</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>{book.title}</h2>
      <h4>by {book.author}</h4>
      <p style={{ maxWidth: "500px", margin: "1rem auto" }}>{book.description}</p>
      <p>⭐ Rating: {book.rating}</p>
      <Link to="/">← Back to List</Link>
    </div>
  );
}

export default BookDetail;
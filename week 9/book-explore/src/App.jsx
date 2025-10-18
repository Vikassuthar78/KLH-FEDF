

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookCard from "./components/BookCard";
import BookDetail from "./components/BookDetail";

function App() {
  // Step 2: Manage list of books with useState
  const [books, setBooks] = useState([]);

  // Step 6: Simulate API fetch using useEffect
  useEffect(() => {
    const fetchedBooks = [
      { id: 1, title: "The Alchemist", author: "Paulo Coelho", description: "A philosophical novel about destiny and dreams.", rating: 4.5 },
      { id: 2, title: "Atomic Habits", author: "James Clear", description: "A guide to building good habits and breaking bad ones.", rating: 4.8 },
      { id: 3, title: "Deep Work", author: "Cal Newport", description: "Focus and productivity in a distracted world.", rating: 4.6 },
    ];
    setBooks(fetchedBooks);
  }, []);

  return (
    <Router>
      <h1 style={{ textAlign: "center" }}>📚 Book Explorer</h1>
      
      <Routes>
        {/* Route 1: Book list */}
        <Route path="/" element={<BookList books={books} />} />

        {/* Route 2: Book detail */}
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </Router>
  );
}

// BookList Component (parent passes props to BookCard)
function BookList({ books }) {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default App;
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from "./BookList";
import Search from "./Search";
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState({
    'currentlyReading': [],
    'wantToRead': [],
    'read': [],
  });

  useEffect(() => {
    BooksAPI.getAll()
    .then(bookResults => {
      setBooks(bookResults);
      const newShelves = {
        'currentlyReading': [],
        'wantToRead': [],
        'read': [],
      };

      Object.keys(newShelves).forEach(key => {
        newShelves[key] = bookResults.filter(book => book.shelf === key);
      })
      setShelves({
        'currentlyReading': newShelves.currentlyReading || [],
        'wantToRead': newShelves.wantToRead || [],
        'read': newShelves.read || [],
      });
    });  
    }, []);
  

  const onBookMoved = (updatedBookIds) => {
    Object.keys(updatedBookIds).forEach(shelfName => {
      shelves[shelfName] = [];
      updatedBookIds[shelfName].forEach(bookId => {
        shelves[shelfName].push(books.find((book) => book.id === bookId))
      })
    });
    setShelves({
      'currentlyReading': shelves.currentlyReading || [],
      'wantToRead': shelves.wantToRead || [],
      'read': shelves.read || [],
    });
  }

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<BookList shelves={shelves} onBookMoved={onBookMoved} />}></Route>
          <Route path="/search" element={<Search onBookMoved={onBookMoved} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

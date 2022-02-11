import React, { useState } from 'react';
import './App.css';

import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [bookList, setBookList] = useState([]);
  console.log("bookList", bookList);

  const addBook = book => {
    const newBook = {
      title: book.title,
      author: book.author,
      pages: book.pages,
      dateCompleted: book.dateCompleted
    }
    setBookList([...bookList, newBook]);
  }

  return (
    <div className="App">
      <BookForm addBook={addBook}/>
      <BookList bookList={bookList}/>
    </div>
  );
}

export default App;

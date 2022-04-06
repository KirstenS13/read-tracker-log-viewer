import React, { useState } from 'react';
import './App.css';

import BookList from './components/BookList';
import BookForm from './components/BookForm';

import { readingLog } from './data/data.js';

function App() {
  const [readingLogState, setReadingLogState] = useState(JSON.parse(localStorage.getItem('readingLogBooks') || '[]'));

  // function to add newBook to readingLogState
  const addNewBook = newBook => {
    const bookToAdd = {
      title: newBook.title,
      author: newBook.author,
      page_count: newBook.page_count,
      dateCompleted: newBook.dateCompleted
    };
    
    setReadingLogState([...readingLogState, bookToAdd]);
  };

  localStorage.setItem('readingLogBooks', JSON.stringify(readingLogState));
  
  return (
    <div className="App">
      <BookForm addNewBook={addNewBook} />
      <BookList readingLogState={readingLogState} />
    </div>
  );
}

export default App;

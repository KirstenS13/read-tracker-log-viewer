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
      id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      page_count: newBook.page_count,
      date_completed: newBook.date_completed,
      closing_remark: newBook.closing_remark
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

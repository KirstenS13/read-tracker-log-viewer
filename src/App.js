import React, { useState } from 'react';
import './App.css';

import BookList from './components/BookList';
import BookForm from './components/BookForm';

import { readingLog } from './data/data.js';

function App() {
  const [readingLogState, setReadingLogState] = useState(readingLog.books);

  return (
    <div className="App">
      <BookForm setReadingLogState={setReadingLogState} />
      <BookList readingLogState={readingLogState} />
    </div>
  );
}

export default App;

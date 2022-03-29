import React, { useState } from 'react';
import './App.css';

import BookList from './components/BookList';
import BookForm from './components/BookForm';

import { readingLog } from './data/data.js';

// custom hook to change localStorage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

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

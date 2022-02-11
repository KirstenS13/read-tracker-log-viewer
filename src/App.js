import React from 'react';
import './App.css';

import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;

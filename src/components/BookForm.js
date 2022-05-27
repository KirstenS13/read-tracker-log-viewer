import React, { useState } from 'react';

// we're going to use localStorage to store books
// the BookForm component will add new books to localStorage

const BookForm = props => {
    const [newBook, setNewBook] = useState({
        id: '',
        title: '',
        author: '',
        page_count: 0,
        date_completed: new Date().toLocaleString(),
        closing_remark: '',
    });

    const handleChanges = e => {
        setNewBook({...newBook, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewBook(newBook);
        setNewBook({
            id: '',
            title: '',
            author: '',
            page_count: 0,
            date_completed: new Date().toLocaleString(),
            closing_remark: '',
        });
    };

    return (
        <form onSubmit={submitForm}>
            <h2>Add a New Book</h2>
            <div>
                <label htmlFor='title'>Title: </label>
                <input 
                    type='text'
                    name='title'
                    id='title'
                    value={newBook.title}
                    onChange={handleChanges}
                    />
            </div>
            <div>
                <label htmlFor='author'>Author: </label>
                <input 
                    type='text'
                    name='author'
                    id='author'
                    value={newBook.author}
                    onChange={handleChanges}
                />
            </div>
            <div>
                <label htmlFor='page_count'>Page Count: </label>
                <input 
                    type='number'
                    name='page_count'
                    id='page_count'
                    value={newBook.page_count}
                    onChange={handleChanges}
                />
            </div>
            <div>
                <label htmlFor='date_completed'>Date Completed: </label>
                <input 
                    type='date'
                    name='date_completed'
                    id='date_completed'
                    value={newBook.date_completed}
                    onChange={handleChanges}
                />
            </div>
            <div>
                <label htmlFor='closing_remark'>Thoughts: </label>
                <input 
                    type='text'
                    name='closing_remark'
                    id='closing_remark'
                    value={newBook.closing_remark}
                    onChange={handleChanges}
                />
            </div>
            <button type='submit'>Add Book</button>
        </form>
    )
}

export default BookForm;
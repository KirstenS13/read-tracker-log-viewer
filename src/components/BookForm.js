import React, { useState } from 'react';

// we're going to use localStorage to store books
// the BookForm component will add new books to localStorage

const BookForm = props => {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        page_count: 0,
        dateCompleted: new Date().toLocaleString(),
        closing_remark: '',
    });

    const handleChanges = e => {
        setNewBook({...newBook, [e.target.name]: e.target.value});
        console.log(newBook)
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewBook(newBook);
        setNewBook({
            title: '',
            author: '',
            page_count: 0,
            dateCompleted: new Date().toLocaleString(),
            closing_remark: '',
        });
    };

    return (
        <>
            <form onSubmit={submitForm}>
                <label htmlFor='title'>Title: </label>
                <input 
                    type='text'
                    name='title'
                    id='title'
                    value={newBook.title}
                    onChange={handleChanges}
                />
                <label htmlFor='author'>Author: </label>
                <input 
                    type='text'
                    name='author'
                    id='author'
                    value={newBook.author}
                    onChange={handleChanges}
                />
                <label htmlFor='page_count'>Page Count: </label>
                <input 
                    type='number'
                    name='page_count'
                    id='page_count'
                    value={newBook.page_count}
                    onChange={handleChanges}
                />
                <label htmlFor='dateCompleted'>Date Completed: </label>
                <input 
                    type='date'
                    name='dateCompleted'
                    id='dateCompleted'
                    value={newBook.dateCompleted}
                    onChange={handleChanges}
                />
                <button type='submit'>Add Book</button>
            </form>
        </>
    )
}

export default BookForm;
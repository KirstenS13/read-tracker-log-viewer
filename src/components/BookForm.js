import React, { useState } from 'react';

const BookForm = props => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        pages: 0,
        dateCompleted: new Date().toLocaleString()
    })
    console.log("book from form", book);

    const handleChanges = e => {
        setBook({...book, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addBook(book);
        setBook({title: '', author: '', pages: 0, dateCompleted: new Date().toLocaleString()});
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <label htmlFor='title'><h5>Title: </h5></label>
                <input 
                    type='text'
                    name='title'
                    id='title'
                    value={book.title}
                    onChange={handleChanges}
                />
                <label htmlFor='author'><h5>Author: </h5></label>
                <input 
                    type='text'
                    name='author'
                    id='author'
                    value={book.author}
                    onChange={handleChanges}
                />
                <label htmlFor='pages'><h5>Pages: </h5></label>
                <input 
                    type='number'
                    name='pages'
                    id='pages'
                    value={book.pages}
                    onChange={handleChanges}
                />
                <label htmlFor='dateCompleted'><h5>Date Completed: </h5></label>
                <input 
                    type='date'
                    name='dateCompleted'
                    id='dateCompleted'
                    value={book.dateCompleted}
                    onChange={handleChanges}
                />
                <button type='submit'>Add Book</button>
            </form>
        </>
    )
}

export default BookForm;
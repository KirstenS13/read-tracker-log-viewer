import React from 'react';
import Book from './Book';

const BookList = props => {
    return (
        <>
            <h1>Books I've Read</h1>
            {props.bookList.map((book, index) => {
                return (
                    <Book
                        key={index}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        dateCompleted={book.dateCompleted}
                    />
                )
            })}
        </>
    )
}

export default BookList;
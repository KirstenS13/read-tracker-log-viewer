import React from 'react';
import Book from './Book';

// to use localStorage the readingLogState will need to be saved to localStorage as an array
// the useEffect hook will need to be used to update the state whenever the localStorage changes

const BookList = props => {
    return (
        <>
            <h1>Books I've Read</h1>
            {props.readingLogState.map((book) => {
                return <Book key={book.id} book={book} deleteBook={props.deleteBook} editBook={props.editBook}/>
            })}
        </>
    )
}

export default BookList;
import React from 'react';
import Book from './Book';

// to use localStorage the readingLogState will need to be saved to localStorage as an array
// the useEffect hook will need to be used to update the state whenever the localStorage changes

const BookList = props => {
    return (
        <div className="second_section">
            <h1>Books I've Read</h1>
            <div className="book_container">
                {props.readingLogState.map((book) => {
                    return <Book key={book.id} book={book} deleteBook={props.deleteBook}/>
                })}
            </div>
        </div>
    )
}

export default BookList;
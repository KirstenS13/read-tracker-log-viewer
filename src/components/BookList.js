import React from 'react';
import Book from './Book';

// to use localStorage the readingLogState will need to be saved to localStorage as an array
// the useEffect hook will need to be used to update the state whenever the localStorage changes
// the readingLogState should also be moved to App.js since it will need to be accessed by BookForm.js as well

const BookList = props => {
    return (
        <>
            <h1>Books I've Read</h1>
            {props.readingLogState.map((book, index) => {
                return <Book key={index} book={book} />
            })}
        </>
    )
}

export default BookList;
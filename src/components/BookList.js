import React, { useState } from 'react';
import Book from './Book';

import { readingLog } from '../data/data.js';

const BookList = () => {
    const [readingLogState, setReadingLogState] = useState(readingLog.books);

    // checking to make sure the state set correctly
    // console.log(readingLogState)

    return (
        <>
            <h1>Books I've Read</h1>
            {readingLogState.map((book, index) => {
                // checking to make sure the books are being mapped properly
                // console.log(book.title)
                return <Book key={index} book={book} />
            })}
        </>
    )
}

export default BookList;
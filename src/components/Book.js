import React from 'react';

const Book = (props) => {
    const sessions = props.book.sessions
    const timestamp = sessions[sessions.length - 1].timestamp
    // console.log(timestamp)
    const dateCompleted = new Date(timestamp)
    // console.log(dateCompleted)
    
    return (
        <>
            <h3>Title: {props.book.title}</h3>
            <img 
                src={props.book.cover_image_url}
                alt="The book cover"
            />
            <h4>Author: {props.book.author}</h4>
            <p>Pages: {props.book.page_count}</p>
            <p>Date Completed: {dateCompleted.toLocaleString()}</p>
        </>
    )
}

export default Book;
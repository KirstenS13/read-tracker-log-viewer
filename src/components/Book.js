import React from 'react';

const Book = props => {
    return (
        <>
            <h3>Title: {props.title}</h3>
            <h4>Author: {props.author}</h4>
            <p>Pages: {props.pages}</p>
            <p>Date Completed: {props.dateCompleted}</p>
        </>
    )
}

export default Book;
import React from 'react';

const Book = props => {
    console.log("props.book.id", props.book.id)
    return (
        <>
            <h3>Title: {props.book.title}</h3>
            <img 
                src={props.book.cover_image_url}
                alt="The book cover"
            />
            <h4>Author: {props.book.author}</h4>
            <p>Pages: {props.book.page_count}</p>
            <p>Date Completed: {props.book.date_completed}</p>
            <p>Thoughts: {props.book.closing_remark}</p>
        </>
    )

}

export default Book;
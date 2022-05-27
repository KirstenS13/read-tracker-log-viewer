import React from 'react';

const Book = props => {
    return (
        <div className="book_card">
            <h3>Title: {props.book.title}</h3>
            {props.book.cover_image_url ? <img 
                src={props.book.cover_image_url}
                alt="The book cover"
            /> : null}
            <h4>Author: {props.book.author}</h4>
            <p>Pages: {props.book.page_count}</p>
            <p>Date Completed: {props.book.date_completed}</p>         
            <p>Thoughts: {props.book.closing_remark}</p>
            <button onClick={() => props.deleteBook(props.book.id)}>Delete Book</button>
        </div>
    )
}

export default Book;
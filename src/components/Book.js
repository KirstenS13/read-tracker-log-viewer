import React from 'react';

const Book = props => {
    // if there is a sessions array for the book, render the reading time and session count data
    if (props.book.sessions) {
        const sessions = props.book.sessions
        const timestamp = sessions[sessions.length - 1].timestamp
        const dateCompleted = new Date(timestamp)
    
        // go through the sessions array for each book and find the total time spent reading the book
        const totalReadingTimeInSeconds = props.book.sessions.reduce((total, session) => total + session.duration_seconds,0)
    
        // convert the total reading time into whole numbers in hours minutes seconds format
        const wholeHours = Math.floor(totalReadingTimeInSeconds/3600)
        const wholeHoursInSeconds = wholeHours * 3600
        const wholeMinutes = Math.floor((totalReadingTimeInSeconds - wholeHoursInSeconds) / 60)
        const wholeMinutesInSeconds = wholeMinutes * 60
        const wholeSeconds = totalReadingTimeInSeconds - wholeHoursInSeconds - wholeMinutesInSeconds

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
                <p>Total Reading Sessions: {props.book.sessions.length}</p>
                <p>Total Time Spent Reading: {wholeHours} hours {wholeMinutes} minutes {wholeSeconds} seconds</p>
                <p>Thoughts: {props.book.closing_remark}</p>
            </>
        )
    // if there is no session array for the book, do not try to render the reading time and session count (they do not exist)
    } else {
        return (
            <>
                <h3>Title: {props.book.title}</h3>
                <img 
                    src={props.book.cover_image_url}
                    alt="The book cover"
                />
                <h4>Author: {props.book.author}</h4>
                <p>Pages: {props.book.page_count}</p>
                <p>Thoughts: {props.book.closing_remark}</p>
            </>
        )
    };

}

export default Book;
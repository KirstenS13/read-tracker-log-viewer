import React from 'react';

const Book = (props) => {
    const sessions = props.book.sessions
    const timestamp = sessions[sessions.length - 1].timestamp
    const dateCompleted = new Date(timestamp)

    // go through the sessions array for each book and find the total time spent reading the book

    // props.book.sessions.reduce((previousTotal, object) => previousTotal + object.desired_value, initialValue)
    const totalReadingTimeInSeconds = props.book.sessions.reduce((total, session) => total + session.duration_seconds,0)

    // wholeHours = the number of complete hours contained in the totalReadingTimeInSeconds
    const wholeHours = Math.floor(totalReadingTimeInSeconds/3600)

    // wholeHoursInSeconds = wholeHours converted to seconds
    const wholeHoursInSeconds = wholeHours * 3600

    // wholeMinutes = the number of complete minutes contained in totalReadingTimeInSeconds - wholeHoursInSeconds
    const wholeMinutes = Math.floor((totalReadingTimeInSeconds - wholeHoursInSeconds) / 60)

    // wholeMinutesInSeconds = wholeMinutes coverted to seconds
    const wholeMinutesInSeconds = wholeMinutes * 60
    
    // wholeSeconds = the number of seconds leftover after taking wholeHoursInSeconds and wholeMinutesInSeconds away from totalReadingTimeInSeconds
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
}

export default Book;
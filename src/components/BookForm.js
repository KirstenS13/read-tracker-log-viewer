import React from 'react';

const BookForm = () => {
    return (
        <>
            <form>
                <label htmlFor='title'>Title: </label>
                <input 
                    type='text'
                    name='title'
                    id='title'
                />
                <label htmlFor='author'>Author: </label>
                <input 
                    type='text'
                    name='author'
                    id='author'
                />
                <label htmlFor='pages'>Pages: </label>
                <input 
                    type='number'
                    name='pages'
                    id='pages'
                />
                <label htmlFor='dateCompleted'>Date Completed: </label>
                <input 
                    type='date'
                    name='dateCompleted'
                    id='dateCompleted'
                />
            </form>
        </>
    )
}

export default BookForm;
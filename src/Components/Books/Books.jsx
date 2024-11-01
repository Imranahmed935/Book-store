import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setBooks(data) )
    },[])
    return (
        <div className='mt-10'>
            <h1 className='text-center text-4xl font-bold'>Books : {books.length}</h1>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
        </div>
    );
};

export default Books;
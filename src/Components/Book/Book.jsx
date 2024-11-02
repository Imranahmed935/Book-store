import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,bookName, author, image, tags, category, rating} = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 border p-2 mt-10">
        <figure className='bg-[#F3F3F3] p-2'>
        <img
            src={image}
            className='h-56 w-44'
            alt={bookName} />
        </figure>
        <div className="card-body">
            <div className='flex gap-6'>
             {
                tags.map((tag, idx)=> <button className=" bg-[#F3F3F3] text-green-500" key={idx}>{tag}</button>)
             }
             
            </div>
        <h2 className="card-title text-xl font-bold">
           {bookName}
        </h2>
        <p className='text-xl'>By: {author}</p>
        <div className='border-t-2 border-dashed mt-2'></div>
        <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
        </div>
        </div>
        </div>
        </Link>
    );
};

export default Book;
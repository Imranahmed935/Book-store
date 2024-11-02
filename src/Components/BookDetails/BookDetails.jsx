import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveDataList } from '../../Utilities/Utilities';
import { saveDataList1 } from '../../Utilities/WishList';

const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const {image, author, bookName, review} = book;

    const handleRead =(id)=>{
        saveDataList(id)
    }
    const handleWhish =(id)=>{
        saveDataList1(id)
    }
    return (
        <div className="hero bg-base-200 mt-10">
        <div className="hero-content flex-col lg:flex-row">
        <img
        src={image}
        className="max-w-sm rounded-lg" />
        <div>
        <h1 className="text-5xl font-bold">{bookName}</h1>
        <p className="py-6">
        {author}
        </p>
        <p className="py-6">
        {review}
        </p>
        <button className="btn btn-primary" onClick={()=>handleRead(id)}>read</button>
        <button className="btn btn-primary" onClick={()=>handleWhish(id)}>whish list</button>
        </div>
        </div>
        </div>
    );
};

export default BookDetails;
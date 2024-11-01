import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-10 p-6 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
       <img
       src={bannerImg}
       className="max-w-2xl rounded-lg shadow-2xl" />
       <div className='space-y-4'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf!</h1>
       <button className="btn bg-green-500 font-bold text-xl text-white">View the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredData } from '../../Utilities/Utilities';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [showReadBooks, setShowReadBooks] = useState([])
   
    const allBooks = useLoaderData()
    useEffect(()=>{
        const readBook = getStoredData();
        const booksData = readBook.map(id => id)
        const readDataBook = allBooks.filter(book => booksData.includes(book.bookId))
        setShowReadBooks(readDataBook)
    },[])
    
    return (
        <div>
            <h1 className='my-6'>this is books</h1>
            
            <Tabs>
            <TabList className='text-green-600'>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
            </TabList>

            <TabPanel>
            <h2> books i read :{showReadBooks.length}</h2>
            {
                showReadBooks.map(book=> <Book key={book.bookId} book={book}></Book>)
            }
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Body.css'

const Body = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className='Body-container'>
            <div className='Books-part'>
                {
                    books.map(book=> <Books 
                        key={book.key}
                        book={book}></Books>)
                }
            </div>
            <div className='Cart-container'>
                <Cart></Cart>
                
            </div>
        </div>
    );
};

export default Body;
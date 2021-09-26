import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Body.css'

const Body = () => {
    const [books,setBooks] = useState([]);
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const handleAddedCart = (book)=>{
       const newCart = [...cart,book]
       setCart(newCart)
      
    }

    return (
        <div className='Body-container'>
            <div className='Books-part'>
                {
                    books.map(book=> <Books 
                        key={book.key}
                        book={book}
                        handleAddedCart = {handleAddedCart}
                        ></Books>)
                }
            </div>
            <div className='Cart-container'>
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Body;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'
import AddBookName from '../AddBookName/AddBookName';

const Cart = (props) => {
    const icon = <FontAwesomeIcon icon={faBook} />
    const btnIcon = <FontAwesomeIcon icon={faShoppingBag} />
    const { cart } = props;
    let totalPrice = 0;
    for (const book of cart) {
        totalPrice = totalPrice + book.price;
    }
    return (
        <div className='Cart'>
            <h2>{icon} Books Added in Cart</h2>
            <h4>Add: {cart.length}</h4>
            <p>Total-Price: ৳ {totalPrice}</p>
            <p>Book-Name:</p>
            
            {
                cart.map(book => <AddBookName 
                    key={book.key}
                    book={book}></AddBookName>)
            }
            <button>{btnIcon} Buy now</button>
        </div>
    );
};

export default Cart;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Books.css'

const Books = (props) => {
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, writter, price, img, genre, publisher } = props.book
    return (
        <div className='Book'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h4>Writer: {writter}</h4>
            <p>Genre: {genre}</p>
            <p>Publisher: {publisher}</p>
            <p>Price: ৳ {price}</p>
            <button onClick={() => props.handleAddedCart(props.book)}>{icon} Add to cart</button>
        </div>
    );
};

export default Books;
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let totalPrice =0;
    for(const book of cart){
        totalPrice = totalPrice +book.price;
    }
    return (
        <div className='Cart'>
            <h2>Books Added in Cart</h2>
            <h4>Add:{cart.length}</h4>
            <p>Total-Price: ৳ {totalPrice}</p>
            <p>Books-name:{cart.name}</p>
            <button>Details</button>
            
        </div>
    );
};

export default Cart;
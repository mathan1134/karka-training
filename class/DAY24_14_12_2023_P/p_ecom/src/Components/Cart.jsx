import React from 'react';
import { Link } from 'react-router-dom';

export const Cart = ({ cartItems }) => {
  const TotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price , 0);
  }

  return (
    <div className='cartsub'>
      <h1>Cart Page</h1><br /><br />
      {cartItems.length ? (
        <div className='total'>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.aname} />
              <p>{`${item.currency}`} {`${item.price}`}</p>
              <p>{`${item.name}`}</p>
            </div>
          ))}
          <br />
          <p>Total Price: Rs {TotalPrice()}</p>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
      <br />
      <Link to="/">My shopping</Link>
    </div>
  );
};

import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Top = ({ cartItemsCount }) => {
  return (
    <div className='top'>
      <h1>
        My Shopping 
        <Link to="/Cart">
          <FaCartArrowDown className='sympol' /> 
          <span>{cartItemsCount}</span>
        </Link>
      </h1>
    </div>
  );
};

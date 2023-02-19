import React from 'react';
import './Button.css';

export const Button = ({ onClick }) => {
  return (
    <button className="btn" type="button" onClick={onClick}>
      Load More
    </button>
  );
};

import React from 'react';
import './Button.css';

import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button className="btn" type="button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

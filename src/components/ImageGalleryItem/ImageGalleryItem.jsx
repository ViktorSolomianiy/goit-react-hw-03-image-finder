import React from 'react';
import './ImageGalleryItem.css';

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ tags, webformatURL, openModal }) => {
  return (
    <li onClick={openModal} className="gallery-item">
      <img className="gallery-img" src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

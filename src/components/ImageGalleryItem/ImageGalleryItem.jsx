import React from 'react';
import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ tags, webformatURL, openModal }) => {
  return (
    <li onClick={openModal} className="gallery-item">
      <img className="gallery-img" src={webformatURL} alt={tags} />
    </li>
  );
};

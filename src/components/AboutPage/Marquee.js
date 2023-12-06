// src/components/Marquee.js
import React from 'react';
import './about.css';

const Marquee = ({ images }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;

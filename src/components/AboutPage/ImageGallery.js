import React, { useState } from 'react';
import './about.css'


const BeltSlider = (props) => {
//   const images = [
//     { src: 'https://i.picsum.photos/200/300?image=100' },
//     { src: 'https://i.picsum.photos/200/300?image=101' },
//     { src: 'https://i.picsum.photos/200/300?image=102' },
//   ];
const images=props.images;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="belt-slider">
      <div className="belt-slider-inner">
        {images.map((image, index) => (
          <div
            className={`belt-slider-item ${index === currentIndex ? 'active' : ''}`}
            key={image.src}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          />
        ))}
      </div>

      <button className="belt-slider-prev" onClick={handlePrev}>
        Prev
      </button>
      <button className="belt-slider-next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default BeltSlider;

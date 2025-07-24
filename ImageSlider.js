import React, { useState, useEffect } from 'react';

const images = [
  "https://via.placeholder.com/800x300?text=Building+1",
  "https://via.placeholder.com/800x300?text=Building+2",
  "https://via.placeholder.com/800x300?text=Building+3"
];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <img src={images[index]} alt="slider" />
    </div>
  );
}

export default ImageSlider;

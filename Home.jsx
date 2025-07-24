import React, { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1581090700227-1e8a4c2122e9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80',
  'download.jpg',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', height: '500px', overflow: 'hidden', position: 'relative' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    </div>
  );
};

export default Home;

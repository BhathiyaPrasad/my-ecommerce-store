"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sliderOne from '../assests/images/Slider01.jpg';
import sliderTwo from '../assests/images/Slider02.jpg';
import sliderThree from '../assests/images/Slider03.jpg';
import sliderFour from '../assests/images/Slider04.jpg';  // Add more images as needed
import './Styles/hero.css';

const images = [
  sliderOne,
  sliderTwo,
  sliderThree,
  sliderFour
  
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setKey((prevKey) => prevKey + 1); // Update the key to force re-render
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <figure className="herofigure">
        <Image
          key={key} // Use key to force re-render
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="slider active wipe-in-bottom-left"
          priority={true}
        />
      </figure>
    </div>
  );
};

export default ImageSlider;

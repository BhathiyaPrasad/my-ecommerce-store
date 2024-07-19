"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sliderOne from '../assests/images/test2.webp';
import sliderTwo from '../assests/images/test.webp';
import sliderThree from '../assests/images/test3.webp';
import sliderFour from '../assests/images/test4.webp';  // Add more images as needed
import './Styles/hero.css';

const images = [
  sliderOne,
  sliderTwo,
  sliderThree,
  sliderFour
  // Add more images here
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

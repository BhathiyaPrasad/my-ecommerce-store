"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sliderOne from '../assests/images/test2.webp';
import sliderTwo from '../assests/images/test.webp';
import sliderThree from '../assests/images/test3.webp'; // Add more images as needed
import './Styles/hero.css';

const images = [
  sliderOne,
  sliderTwo,
  sliderThree,
  // Add more images here
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <figure className="herofigure">
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="slider"
          priority={true}
        />
      </figure>
    </div>
  );
};

export default ImageSlider;

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sliderOne from '../assests/images/COVER WEB.jpg';
import sliderTwo from '../assests/images/test.webp'; // Add more images as needed
import './Styles/hero.css';

const images = [
  sliderOne,
  sliderTwo,
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
          loading="lazy"
          priority={false}
        />
      </figure>
    </div>
  );
};

export default ImageSlider;

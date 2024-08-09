"use client";

import React from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Image from "next/image";
import sliderOne from '../assests/images/test.webp';
import "./Styles/hero.css";
import ImageSlider from "./ImageSlider";
import  ImageSliderTwo  from "./ImageSliderTwo";
import "./Styles/imageslider.css"

function Hero() {
  return (

 
   <ImageSliderTwo/>

  )
}

export default Hero;    
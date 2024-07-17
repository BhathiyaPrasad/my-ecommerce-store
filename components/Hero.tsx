import React from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Image from "next/image";
import sliderOne from '../assests/images/test.webp';
import "./Styles/hero.css";


function Hero() {
  return (
    <div>
      <figure className="herofigure">
        <Image src={sliderOne} alt="" className="slider" />
      </figure>
    </div>

  )
}

export default Hero;    
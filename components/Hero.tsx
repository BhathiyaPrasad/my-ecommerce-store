import React from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Image from "next/image";
import sliderOne from '../assests/images/test.webp'

function Hero () {
    return (


<div className="hero bg-base-150 min-h-screen" style={{
  WebkitTextSizeAdjust: '100%',
  textTransform: 'none',
  WebkitFontSmoothing: 'antialiased',
  listStyle: 'none',
  textAlign: 'center',
  color: '#000',
 
  padding: '0',
  border: '0',
  font: 'inherit',
  transition: 'opacity .2s linear',
  opacity: '1',
  maxWidth: '100%',
  display: 'block',
  height: 'auto',
  margin: '0 auto',
  width: '100%'
}}>
  <figure style={{
    WebkitTextSizeAdjust: '100%',
    textTransform: 'none',
    WebkitFontSmoothing: 'antialiased',
    listStyle: 'none',
    textAlign: 'center',
    color: '#000',
   
    padding: '0',
    border: '0',
    font: 'inherit',
    transition: 'opacity .2s linear',
    opacity: '1',
    maxWidth: '100%',
    display: 'block',
    height: 'auto',
    margin: '0 auto',
    width: '100%'
  }}>
    <Image src={sliderOne} alt="" style={{
      WebkitTextSizeAdjust: '100%',
      textTransform: 'none',
      WebkitFontSmoothing: 'antialiased',
      listStyle: 'none',
      textAlign: 'center',
      color: '#000',
     
      padding: '0',
      border: '0',
      font: 'inherit',
      transition: 'opacity .2s linear',
      opacity: '1',
      maxWidth: '100%',
      display: 'block',
      height: 'auto',
      margin: '0 auto',
      width: '100%'
    }} />
  </figure>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    )}

export default Hero;    
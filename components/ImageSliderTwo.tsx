import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'  // Correct import for Next.js Image component
import './Styles/imageslider.css'
import sliderOne from '../assests/images/Slider01.jpg';
import sliderTwo from '../assests/images/Slider02.jpg';
import sliderThree from '../assests/images/Slider03.jpg';
import sliderFour from '../assests/images/Slider04.jpg';

export default function ImageSliderTwo() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src={sliderOne} alt="Slider One" />
        </div>
        <div className="embla__slide">
          <Image src={sliderTwo} alt="Slider Two" />
        </div>
        <div className="embla__slide">
          <Image src={sliderThree} alt="Slider Three" />
        </div>
        <div className="embla__slide">
          <Image src={sliderFour} alt="Slider Four" />
        </div>
      </div>
    </div>
  )
}

// components/Hero.jsx
import React from 'react';
import Slider from 'react-slick';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    style: {
      width: '65%', // Adjust the width as per your requirement
      margin: '0 auto', // Center the slider
    },
  };

  return (
    <div className="hero">
      <Slider {...sliderSettings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Hero;

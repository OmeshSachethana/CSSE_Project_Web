import React from 'react';
import Slider from 'react-slick';

import { image1, image2, image3 } from '../../assets';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import '../styles/SliderArrows.css'; // Assuming you have a separate CSS file for styling the arrows
import './hero.css'

const Hero = () => {
  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <span>&lt;</span>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <span>&gt;</span>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

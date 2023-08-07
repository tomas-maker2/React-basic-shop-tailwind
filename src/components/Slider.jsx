import React, { useState } from 'react';
import { dataSlider } from './dataSlider';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='max-w-[1240px] mx-auto' id='gallery'>
      <h1 className='text-2xl font-bold text-left p-4'>Gallery</h1>
      <div className='relative flex justify-center p-4'>
        {dataSlider.map((slide, index) => {
          return (
            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && <img className='img' src={slide.image} alt='/' />}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
import React from 'react';

const logos: string[] = [
  '/tech.jpeg',
  '/quartz.jpeg',
  '/business.jpeg',
  '/benzinga.jpeg',
  '/african.jpeg',
];

const Slider = () => {
  return (
    <div className="overflow-hidden bg-white py-6 -mt-32 lg:-mt-[620px]">
      <div className="slider-track">
        {[...logos, ...logos, ...logos, ...logos].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`logo-${index}`}
            className="lg:h-14 h-10 sm:h-20 mx-6 opacity-100 transition-opacity duration-100"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

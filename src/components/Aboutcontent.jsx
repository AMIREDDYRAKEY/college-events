import React from 'react';
import img from '../assets/slide 1.jpg';
import img2 from '../assets/slide2.jpg';
import img3 from '../assets/slide3.jpg';
import img4 from '../assets/slide4.jpg';
import img5 from '../assets/std1.jpg'
import img6 from '../assets/std2.jpg'
import img7 from '../assets/std3.jpg'
import img8 from '../assets/std4.jpg'
import img9 from '../assets/std5.jpg'

const Aboutcontent = () => {
  return (
    <div className='lg:mt-[60px] mt-[50px] px-6 md:px-20'>
      <div>
        <h3 className='lg:text-4xl text-2xl font-bold text-white mb-8 lg:text-center md:text-left'>
          Conducting  Tech Explore
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <img src={img} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
          <img src={img2} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
          <img src={img3} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
          <img src={img4} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
          <img src={img5} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
          <img src={img6} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
          <img src={img7} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
          <img src={img8} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
          <img src={img9} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px]' />
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;

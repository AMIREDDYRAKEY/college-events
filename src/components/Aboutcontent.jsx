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
    <div className='lg:mt-[70px] mt-[50px] px-6  md:px-20'>
      <div>
      <div className='flex flex-col'><h3 className='lg:text-4xl text-4xl text-center font-serif text-[#ff009b]'>
  Conducting Tech Explore</h3>
  <div className='flex justify-center mt-[15px]'><span className='border-[1px]   border-[#ff009b] w-[300px] '></span></div>
</div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:pt-[30px] pt-[30px] gap-6  '>
          <img src={img} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
          <img src={img2} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
          <img src={img3} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
          <img src={img4} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
          <img src={img5} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
          <img src={img6} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
          <img src={img7} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
          <img src={img8} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
          <img src={img9} alt=" " className='rounded-lg shadow-lg object-cover w-full h-[250px] hover:scale-105 transistion-transform duration-300' />
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;

import React from 'react';
import img from '../assets/aitslogo.png';

const Footer = () => {
  return (
    <div className='mt-[60px]  flex items-center justify-center'>
      <div className='shadow-xl backdrop-blur-md lg:gap-0 gap-5  lg:p-0 p-4 lg:w-[95%]   lg:ml-[30px] ml-[35px] bg-white/10 lg:flex lg:flex-row flex flex-col rounded-2xl justify-between lg:items-center lg:h-[300px] px-[50px] mx-[50px] lg:px-[70px]'>
      
        {/* Information */}
        <div className='flex flex-col gap-2 lg:ml-0 ml-[-30px]'>
          <h3 className='lg:text-2xl text-xl font-bold'>Tech Explore 2024</h3>
          <div className="flex gap-3 text-gray-500 font-semibold">
            <p>Department of Computer Science & Engineering</p>
          </div>
          <div className="flex gap-3 text-gray-500 font-semibold">
            <p>Your College Name</p>
          </div>
          <div className="flex gap-3 text-gray-500 font-semibold">
            <p>March 15, 2024</p>
          </div>
          <div className="flex gap-3 text-gray-500 font-semibold">
            <p>CSE Block, Seminar Hall & Labs</p>
          </div>
        </div>

        {/* Colleges */}
        <div className='flex flex-col gap-2 lg:ml-0 ml-[-30px]'>
          <h3 className='text-2xl font-bold'>Our Colleges</h3>
          <h3 className='text-gray-500 font-semibold'><a href="#">Aits Kadapa</a></h3>
          <h3 className='text-gray-500 font-semibold'><a href="#">Aits Rajampet</a></h3>
          <h3 className='text-gray-500 font-semibold'><a href="#">Aits Tirupathi</a></h3>
          <h3 className='text-gray-500 font-semibold'><a href="#">Aits Hyderabad</a></h3>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-2 lg:ml-0 ml-[-30px]'>
          <h3 className='text-2xl font-bold'>Contact</h3>
          <p className='text-gray-500 font-semibold'>csetechExplore@gmail.com</p>
          <div cla>
            <img src={img} alt="Scan Me" className='h-[80px] w-[100px]' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

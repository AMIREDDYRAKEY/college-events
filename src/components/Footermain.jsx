import React from 'react';
import img from '../assets/aitslogo.png';

const Footer = () => {
  return (
    <div className="mt-[60px] flex items-center justify-center z-0">
      <div className="backdrop-blur-md bg-white/10 shadow-xl rounded-2xl p-6 pb-8 w-[95%] md:w-[93%] flex flex-col md:p-10 lg:flex-row justify-between gap-8 lg:items-center">

        {/* Info Section */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl lg:text-2xl font-bold">Tech Explore 2024</h3>
          <p className="text-gray-300 font-semibold">Department of Computer Science & Engineering</p>
          <p className="text-gray-300 font-semibold">AITS, Kadapa</p>
          <p className="text-gray-300 font-semibold">March 15, 2024</p>
          <p className="text-gray-300 font-semibold">CSE Block, Seminar Hall & Labs</p>
        </div>

        {/* Colleges Section */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl lg:text-2xl font-bold">Our Colleges</h3>
          <ul className="text-gray-300 font-semibold space-y-1">
            <li><a href="#" className="hover:underline">AITS Kadapa</a></li>
            <li><a href="#" className="hover:underline">AITS Rajampet</a></li>
            <li><a href="#" className="hover:underline">AITS Tirupati</a></li>
            <li><a href="#" className="hover:underline">AITS Hyderabad</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl lg:text-2xl font-bold">Contact</h3>
          <address className="not-italic text-gray-300 font-semibold">
            <a href="mailto:csetechExplore@gmail.com" className="hover:underline">
              csetechExplore@gmail.com
            </a>
          </address>
          <div>
            <img src={img} alt="AITS Logo" className="h-[80px] w-[100px] object-contain" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

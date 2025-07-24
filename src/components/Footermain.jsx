import React from 'react';
import img from '../assets/aitslogo.png';

const Footer = () => {
  return (
    <div className="mt-[60px]  flex items-center justify-center">
      <div className="border-[1px] border-[#403f68] shadow-[#1d1c36]  shadow-md rounded-2xl p-6 pb-8 w-[98%] md:w-[89%] flex flex-col md:p-[70px] lg:flex-row justify-between gap-8 lg:items-center">

        {/* Info Section */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl lg:text-2xl font-bold">Tech Explore 2024</h3>
          <p className="text-gray-300 font-semibold hover:text-[#ff009b]">Department of Computer Science & Engineering</p>
          <p className="text-gray-300 font-semibold hover:text-[#ff009b]">AITS, Kadapa</p>
          <p className="text-gray-300 font-semibold hover:text-[#ff009b]">Jan 15, 2024</p>
          <p className="text-gray-300 font-semibold hover:text-[#ff009b]">CSE-E Block & Labs</p>
        </div>

        {/* Colleges Section */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl lg:text-2xl font-bold">Our Colleges</h3>
          <ul className="text-gray-300 font-semibold space-y-1  " >
            <li><a href="#" className="hover:text-[#ff009b]">AITS Kadapa</a></li>
            <li><a href="#" className="hover:text-[#ff009b]">AITS Rajampet</a></li>
            <li><a href="#" className="hover:text-[#ff009b]">AITS Tirupati</a></li>
            <li><a href="#" className="hover:text-[#ff009b]">AITS Hyderabad</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-xl lg:text-2xl font-bold">Contact</h3>
          <address className="not-italic text-gray-300 font-semibold">
            <a href="mailto:csetechExplore@gmail.com" className="hover:text-[#ff009b]">
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

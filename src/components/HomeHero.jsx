import React from 'react';
import img from '../assets/aitslogo2.png';

const HomeHero = () => {
  return (
    <div className=" px-6 md:px-20 flex flex-col md:flex-row items-center lg:mt-10 mt-[20px] justify-between gap-12">
      
      {/* Logo Section */}
      <div className="flex justify-center">
        <img
          src={img}
          alt="TechExplore 2024 Logo"
          className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full object-cover  "
        />
      </div>

      {/* About Section */}
      <div className="w-full md:w-1/2 text-[#e3ebe6] text-lg md:text-xl space-y-6 leading-relaxed font-semibold">
        <h2 className="text-3xl font-bold text-[#4a3fdd]"> TechExplore 2024</h2>
        <p>
          <span className="text-[#7d4eeb] font-semibold">TechExplore 2024</span> is a national-level intercollegiate technical symposium organized by the <span className=" text-2xl font-bold">Department of Computer Science and Engineering</span>. This annual fest provides a vibrant platform for young innovators to showcase their technical skills, creativity, and knowledge in the latest domains of computing.
        </p>
        <p>
          From competitive coding and paper presentations to AI-powered project expos and tech quizzes, TechExplore 2024 is designed to ignite curiosity and foster collaborative learning among students from diverse institutions.
        </p>
      </div>
    </div>
  );
};

export default HomeHero;

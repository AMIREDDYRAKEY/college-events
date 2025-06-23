import React from 'react';
import img from '../assets/aitsimg.jpg';
import naclogo from '../assets/naclogo.png'
import nbalogo from '../assets/nbalogo.png'
import ugclogo from '../assets/ugclogo.png'
const Aboutmain = () => {
    return (
        <div >
            <div className='flex flex-col items-center justify-center lg:pt-[120px] pt-[100px] px-[20px]'>
                {/* About  */}
                <h2 className='text-4xl font-bold text-center mb-6 text-[#f033d7]'>About </h2>

                {/* Image */}
                <div className='w-full flex justify-center'>
                    <img
                        src={img}
                        alt="About AITS"
                        className='rounded-xl shadow-lg lg:w-[90%]  h-[450px] object-fit'
                    />
                </div>
            </div>
            {/* logos */}
            <div className='lg:mt-[80px] mt-[40px] lg:flex lg:flex-row flex flex-col gap-10 justify-around w-full'>
                <div className='flex flex-col  items-start lg:ml-[80px] ml-[10px] lg:w-1/3'>
                <div className=' lg:ml-[90px] ml-[70px]'>
                    <img src={naclogo} alt=""  className='lg:h-[150px] lg:w-[200px] w-[180px] h-[130px]  '/>
                </div>
                <div className='flex  lg:h-[180px] lg:gap-20 lg:w-[240px] justify-between'>
                    <img src={ugclogo} alt=""  className=''/>
                    <img src={nbalogo} alt="" />
                </div>
                </div>
                {/* description */}
                <div className=' lg:w-2/3'>
                    <p className='lg:text-lg text-sm lg:leading-7 text-justify text-white px-6 md:px-20'>
                        <strong className='lg:text-2xl text-lg font-bold'>Annamacharya Institute of Technology & Sciences</strong> (AITS) is not just a hub for academic excellence but also a dynamic platform for innovation and creativity. With a strong emphasis on holistic development, AITS actively encourages students to go beyond textbooks and engage in real-world learning experiences.

                        One of the flagship initiatives that showcases this spirit is <span className='font-semibold text-[#f06292]'>TechExplore</span> — a grand annual event that celebrates technology, talent, and teamwork. From paper presentations and coding competitions to robotics, design expos, and idea pitches, TechExplore provides a stage for students to unleash their potential and connect with emerging trends in engineering and innovation.

                        The college also hosts numerous workshops, seminars, and guest lectures from industry experts to bridge the gap between academia and industry. Through these vibrant events, AITS cultivates a culture of curiosity, collaboration, and continuous learning.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Aboutmain;

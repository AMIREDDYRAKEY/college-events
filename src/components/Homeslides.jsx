import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import "./style.css"
import img from '../assets/std3.jpg'
import img3 from '../assets/slide3.jpg'
import img4 from '../assets/slide4.jpg'
const HomeIntro = () => {
  return (
<div className="relative z-[10] lg:w-[90%] lg:ml-[70px] ml-[10px] w-[90%] pt-[60px] h-[450px] lg:pt-[120px] lg:h-[580px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // 2.5 seconds
          disableOnInteraction: false, // keep autoplay after user interaction
        }}
        loop={true} // optional: makes it loop infinitely
        className="mySwiper lg:w-full lg:h-full  rounded-xl  "
      >
        <SwiperSlide className="flex w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] items-center justify-center  text-white text-2xl font-semibold">
          <div><img src={img} alt="" className='w-full h-full object-cover object-center' /></div>
        </SwiperSlide>
         <SwiperSlide className="flex w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] items-center justify-center  text-white text-2xl font-semibold">
          <div><img src={img4} alt=""  className='w-full h-full object-cover object-center'/></div>
        </SwiperSlide>
         <SwiperSlide className="flex w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] items-center justify-center  text-white text-2xl font-semibold">
          <div><img src={img3} alt=""  className='w-full h-full object-cover object-center'/></div>
        </SwiperSlide>
        <SwiperSlide className="flex w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] items-center justify-center  text-white text-2xl font-semibold">
          <div><img src={img4} alt=""  className='w-full h-full object-cover object-center' /></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default HomeIntro;

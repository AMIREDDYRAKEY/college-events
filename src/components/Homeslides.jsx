import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './style.css';

import img from '../assets/std3.jpg';
import img3 from '../assets/slide3.jpg';
import img4 from '../assets/slide4.jpg';

const Homeslides = () => {
  return (
    <div className="relative z-[10] w-[90%] lg:w-[90%] mx-auto pt-[60px] lg:pt-[120px] h-[450px] lg:h-[580px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // smoother autoplay
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper w-full h-full rounded-md overflow-hidden"
      >
        {[img, img4, img3, img4].map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Homeslides;

import React, { useState } from 'react'

import Nav from './Nav';
import Cards from './Cards'
import Footer from './Footermain';

const Eventnav = () => {


  return (
    <div className="min-h-screen  pb-[50px]  lg:pt-[100px] pt-[60px] flex flex-col items-center justify-center  bg-[#12122d]">
      <div className='w-[100%] '><Nav /></div>
      <div className='  pt-[50px] gap-4'>
        <div className='flex flex-col'><h3 className='lg:text-4xl text-5xl text-center font-serif text-[#ff009b]'>
TechExplore Events</h3>
  <div className='flex justify-center mt-[15px]'><span className='border-[1px]   border-[#ff009b] md:w-[300px] w-[250px] '></span></div>
</div>

      </div>
      {/* cards */}
      <div><Cards /></div>
      <div className=' w-full '><Footer /></div>

    </div>
  )
}

export default Eventnav
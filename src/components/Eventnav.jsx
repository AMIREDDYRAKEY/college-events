import React, { useState } from 'react'

import Nav from './Nav';
import Cards from './Cards'
import Footer from './Footermain';

const Eventnav = () => {


  return (
    <div className="min-h-screen  pb-[50px]  lg:pt-[100px] pt-[60px] flex flex-col items-center justify-center  bg-[#12122d]">
      <div className='w-[100%] '><Nav /></div>
      <div className='  pt-[50px] gap-4'>
        <h1 class="text-4xl md:text-4xl text-transparent text-[#f033d7] animate-gradient-x text-center font-bold">
          Tech Explore Events
        </h1>

      </div>
      {/* cards */}
      <div><Cards /></div>
      <div className=' w-full'><Footer /></div>

    </div>
  )
}

export default Eventnav
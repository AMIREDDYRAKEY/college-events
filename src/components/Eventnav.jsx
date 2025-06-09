import React, { useState } from 'react'
 
import Nav from './Nav';
import EventCards from './EventCards';
import Footer from './Footer';
 
const Eventnav = () => {
  

  return (
    <div className="min-h-screen  pb-[50px]  lg:pt-[100px] pt-[60px] flex flex-col items-center justify-center  bg-gradient-to-br from-[#0b132b] via-[#2a1b3d] to-[#3a506b]">
      <div className='w-[100%] '><Nav /></div>
      <div className='  pt-[50px] gap-4'>
        <h1 className="lg:text-4xl text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4d71bd]   via-[#ef4444] to-[#4fa0d3]">
          Tech Explore Events
        </h1>
      </div>
      {/* cards */}
       <div><EventCards/></div>
        
    </div>
  )
}

export default Eventnav
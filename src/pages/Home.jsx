import React from 'react';
import Nav from '../components/Nav';
import Homeslides from '../components/Homeslides';
import HomeHero from '../components/HomeHero';
import Eventnav from '../components/Eventnav';
import Cards from '../components/Cards';
 import Footer from '../components/Footermain'

const Home = () => {
  return (
    <div className="min-h-screen relative pb-[50px] bg-[#12122d]  ">
      <div className="">
        <Nav />
      </div>
      <div><Homeslides/></div>
      <div><HomeHero/></div>
      <div className='mt-[50px]'>
        <div className='flex flex-col'><h3 className='lg:text-4xl text-5xl md:ml-[90px] ml-[30px] font-serif text-[#ff009b]'>
  Events</h3>
  
</div>
        <div><Cards limit={4}/></div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default Home;
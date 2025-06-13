import React from 'react';
import Nav from '../components/Nav';
import Homeslides from '../components/Homeslides';
import HomeHero from '../components/HomeHero';
import Eventnav from '../components/Eventnav';
import Cards from '../components/Cards';
 import Footer from '../components/Footermain'

const Home = () => {
  return (
    <div className="min-h-screen relative pb-[50px] bg-[#12122d] z-0">
      <div className="">
        <Nav />
      </div>
      <div><Homeslides/></div>
      <div><HomeHero/></div>
      <div className='mt-[50px]'>
        <h3 className='text-5xl text-[#f09cc8] ml-[90px] font-bold'>Events</h3>
        <div><Cards limit={4}/></div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default Home;
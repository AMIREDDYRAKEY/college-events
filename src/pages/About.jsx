import React from 'react'
import Nav from '../components/Nav'
import Aboutmain from '../components/Aboutmain'
import Aboutcontent from '../components/Aboutcontent'
import Footer from '../components/Footermain'
import Eventviewdetails from '../components/Eventviewdetails'
const About = () => {
    return (
       <div className="min-h-screen pb-[50px] bg-[#12122d]">
      <div className="">
        <Nav />
      </div>
      {/* ABOUT */}
      <div><Aboutmain/></div>
      <div><Eventviewdetails/></div>
      <div><Aboutcontent/></div>
      <div><Footer/></div>
        </div>
    )
}

export default About
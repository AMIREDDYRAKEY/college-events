import React from 'react'
import Nav from '../components/Nav'
import Aboutmain from '../components/Aboutmain'
import Aboutcontent from '../components/Aboutcontent'
import Footer from '../components/Footer'
import Eventviewdetails from '../components/Eventviewdetails'
const About = () => {
    return (
       <div className="min-h-screen pb-[50px] bg-gradient-to-br from-[#0b132b] via-[#2a1b3d] to-[#3a506b]">
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
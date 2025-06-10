import React from 'react'
import Nav from '../components/Nav'
import Aboutmain from '../components/Aboutmain'
import Aboutcontent from '../components/Aboutcontent'
import Footer from '../components/Footer'
import Eventviewdetails from '../components/Eventviewdetails'
const About = () => {
    return (
       <div className="min-h-screen pb-[50px] bg-gradient-to-br from-[#27164d] via-[#581572] to-[#4e032e]">
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
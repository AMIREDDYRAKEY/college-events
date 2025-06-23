import React from 'react'
import Nav from '../components/Nav'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footermain'
const contact = () => {
  return (
   <div className="min-h-screen pb-[50px] bg-[#1a1135]">
      <div className="">
        <Nav />
      </div>      
       <div><ContactInfo/></div>
      <div><Footer/></div>

    </div>
  )
}

export default contact
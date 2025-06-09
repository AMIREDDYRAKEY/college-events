import React from 'react'
import Nav from '../components/Nav'
import ContactInfo from '../components/ContactInfo'
const contact = () => {
  return (
   <div className="min-h-screen pb-[50px] bg-gradient-to-br from-[#0b132b] via-[#2a1b3d] to-[#3a506b]">
      <div className="">
        <Nav />
      </div>      
       <div><ContactInfo/></div>
    </div>
  )
}

export default contact
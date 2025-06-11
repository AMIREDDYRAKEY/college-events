import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import Sidenav from './Sidenav';
import img from '../assets/aitslogo.png'
const Nav = () => {
  const navigate = useNavigate();
  const [sidenav,setsidenav]=useState('');
  const opensidenav =()=>{
    setsidenav(true)
  }

  return (
<div className="w-full  h-[80px] fixed top-0 z-[40]    bg-gradient-to-br from-[#35215f] to via-[#4d026b] ">

      <div className='flex justify-evenly items-center h-full px-4'>
        <div>
          <div><img src={img} alt="" className='w-[100px] h-[100px]  rounded-full' /></div>
        </div>
        
        <div className='lg:flex gap-8 text-pink-100 hidden font-semibold   text-sm'>
          <button
            onClick={() => navigate('/')}
            className='hover:text-blue-400 transition duration-200'
          >
            Home
          </button>
          <button
            onClick={() => navigate('/About')}
            className='hover:text-white transition duration-200'
          >
            About
          </button>
          <button
            onClick={() => navigate('/Events')}
            className='hover:text-white transition duration-200'
          >
            Events
          </button>
          <button
            onClick={() => navigate('/Coordinators')}
            className='hover:text-white transition duration-200'
          >
            Coordinators
          </button>
          <button
            onClick={() => navigate('/Contact')}
            className='hover:text-white transition duration-200'
          >
            Contact
          </button>
        </div>
        <div>
          <button
            className='text-white font-semibold bg-pink-500 hover:bg-pink-800 px-4 py-1 rounded-md text-sm transition duration-200'
            onClick={() => navigate('/Login')}
          >
            Login
          </button>
        </div>
         <div className='lg:hidden flex text-3xl'><button onClick={()=>setsidenav(!sidenav)} ><FiMenu /></button>
         {
          sidenav && (
              <div className="fixed top-0 left-0 z-[100]">
              <Sidenav setsidenav={setsidenav}/>
              </div>
          )
         }
         </div>
      </div>
    </div>
  );
};

export default Nav;

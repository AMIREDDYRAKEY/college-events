import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import Sidenav from './Sidenav';
const Nav = () => {
  const navigate = useNavigate();
  const [sidenav,setsidenav]=useState('');
  const opensidenav =()=>{
    setsidenav(true)
  }

  return (
<div className="w-full h-[80px] fixed top-0 z-[40]  bg-[#621f80]">

      <div className='flex justify-evenly items-center h-full px-4'>
        <div>
          <h3 className='text-white  font-bold text-lg'>Logo</h3>
        </div>
        
        <div className='lg:flex gap-8 text-pink-100 hidden font-medium text-sm'>
          <button
            onClick={() => navigate('/')}
            className='hover:text-white transition duration-200'
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
            className='text-white bg-pink-500 hover:bg-pink-600 px-4 py-1 rounded-md text-sm transition duration-200'
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

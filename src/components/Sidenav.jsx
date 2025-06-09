import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
const Sidenav = ({setsidenav}) => {
  const navigate = useNavigate();
 

  return (
<div className="h-screen w-[220px] bg-[#a32cc4] text-white shadow-lg p-6 rounded-r-xl fixed top-0 left-0 z-50">
     <div className='flex items-end justify-end mt-[20px]' ><button onClick={()=>{setsidenav(false)}} ><IoCloseSharp className='text-black ' /></button></div>
      <div className="flex flex-col gap-10 font-semibold text-white  text-2xl mt-[80px] ">
        <button
          onClick={() => navigate('/')}
          className="hover:text-white transition duration-200"
        >
          Home
        </button>
        <button
          onClick={() => navigate('/About')}
          className="hover:text-white transition duration-200"
        >
          About
        </button>
        <button
          onClick={() => navigate('/Events')}
          className="hover:text-white transition duration-200"
        >
          Events
        </button>
        <button
          onClick={() => navigate('/Coordinators')}
          className="hover:text-white transition duration-200"
        >
          Coordinators
        </button>
        <button
          onClick={() => navigate('/Contact')}
          className="hover:text-white transition duration-200"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Sidenav;

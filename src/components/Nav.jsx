import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import Sidenav from './Sidenav';
import img from '../assets/aitslogo.png'
const Nav = () => {
  const navigate = useNavigate();
  const [sidenav,setsidenav]=useState('');
  const [aboutactive, setaboutactive] = useState(false);
  const [eventsactive,seteventsactive]=useState(false)
  const [Cactive,setCactive]=useState(false)
  const [Contactactive,setContactactive]=useState('/Contact')
  const opensidenav =()=>{
    setsidenav(true)
  }

  return (
<div className="w-full  h-[80px] fixed top-0 z-[40] rounded-xl shadow-md shadow-[#1d1d3a] bg-[#0e0e29] ">

      <div className='flex justify-between items-center h-full px-10 lg:px-[100px]'>
        <div className='flex '>
          <div><img src={img} alt="" className='w-[60px] h-[60px]  rounded-full' /></div>
           <h3 className='mt-[15px] text-2xl md:flex hidden font-bold'>Tech  <strong className='text-[#ff009b]'>Exlplore</strong> </h3>
        </div>
           
        <div className='lg:flex gap-8 text-pink-100 hidden font-semibold md:ml-[-100px]  text-sm'>
          <button onClick={() => navigate('/')}>
            Home
          </button>
          <button
            onClick={() => {navigate('/About');setaboutactive(true)}}
            className={` ${aboutactive ? 'text-[#ff009b]':'text-white'} ` }
          >
            About
          </button>
          <button
            onClick={() =>{ navigate('/Events');seteventsactive(true)}}
            className={` ${eventsactive ? 'text-[#ff009b]':'text-white'} ` }
          >
            Events
          </button>
          <button
            onClick={() => {navigate('/Coordinators');setCactive(true)}}
            className={` ${Cactive ? 'text-[#ff009b]':'text-white'} ` }
          >
            Coordinators
          </button>
          <button
            onClick={() => {navigate('/Contact');setContactactive(true)}}
            className={` ${Contactactive === '/Contact' ? 'text-white ':'text-[#ff009b]'} ` }
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

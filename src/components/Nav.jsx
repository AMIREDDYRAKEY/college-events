import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import Sidenav from './Sidenav';
import { FaUserCircle } from "react-icons/fa";
import img from '../assets/aitslogo.png'
import Signup from '../pages/Signup'
import axios from 'axios'
const Nav = () => {
  const navigate = useNavigate();
  const [sidenav, setsidenav] = useState('');
  const [aboutactive, setaboutactive] = useState('/About');
  const [eventsactive, seteventsactive] = useState('/Events')
  const [Cactive, setCactive] = useState('/Coordinators')
  const [Contactactive, setContactactive] = useState('/Contact')
  const [login, setislogin] = useState('')
  const [data, setdata] = useState('')
  const [logout, setlogout] = useState('')
  useEffect(() => {
    const token = localStorage.getItem("token");
    setislogin(!!token);
    fetchdata();

  }, []);
  const fetchdata = async () => {
      const token = localStorage.getItem("token")
    const api = axios.create({
      baseURL: 'https://evebackend.onrender.com',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    try {
      const res = await api.get("/api/auth/me")
 
        setdata(res.data)
     
    }
    catch (err) {
      setdata("err", err)
    }
  }

  const handlelogin = () => {
    navigate('/Signup')

  }

  const handlelogout = () => {
    localStorage.removeItem("token")
    setlogout(false)
    setislogin(false)
    navigate('/')
  }

  const opensidenav = () => {
    setsidenav(true)
  }

  return (
    <div className="w-full  h-[80px] fixed top-0 z-[40]  shadow-md shadow-[#1d1d3a] bg-[#0f0f38] ">

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
            onClick={() => { navigate('/About'); setaboutactive(true) }}
            className={` ${aboutactive === '/About' ? 'text-white' : 'text-[#ff009b]'} `}
          >
            About
          </button>
          <button
            onClick={() => { navigate('/Events'); seteventsactive(true) }}
            className={` ${eventsactive === '/Events' ? 'text-white' : 'text-[#ff009b]'} `}
          >
            Events
          </button>
          <button
            onClick={() => { navigate('/Coordinators'); setCactive(true) }}
            className={` ${Cactive === '/Coordinators' ? 'text-white' : 'text-[#ff009b]'} `}
          >
            Coordinators
          </button>
          <button
            onClick={() => { navigate('/Contact'); setContactactive(true) }}
            className={` ${Contactactive === '/Contact' ? 'text-white ' : 'text-[#ff009b]'} `}
          >
            Contact
          </button>
        </div>
        <div>
          {!login ? (
            <button
              className='text-white font-semibold bg-pink-500 hover:bg-pink-800 px-4 py-1 rounded-md text-sm transition duration-200'
              onClick={handlelogin}
            >
              Login
            </button>
          ) : (
            <button onClick={() => setlogout(!logout)} className='text-white text-3xl'>
              <FaUserCircle />
            </button>
          )}
        </div>
        <div className='lg:hidden flex text-3xl'><button onClick={() => setsidenav(!sidenav)} ><FiMenu /></button>
          {
            sidenav && (
              <div className="fixed top-0 left-0 z-[100]">
                <Sidenav setsidenav={setsidenav} />
              </div>
            )
          }

        </div>


      </div>
      <div className='flex justify-end mr-[100px]'>
        {logout && data && (
        <div className='absolute top-[80px] right-[40px] bg-[#1d1d3a] p-4 rounded-md shadow-lg z-[50] text-white text-sm'>
          <div className='flex flex-col gap-2'>
            <p><strong>Name:</strong> {data.username}</p>
            <p><strong>ID No:</strong> {data.idNo}</p>
            <p><strong>Branch:</strong> {data.branch}</p>
            <p><strong>Section:</strong> {data.section}</p>
            <p><strong>Year:</strong> {data.year}</p>
          </div>
          <button
            onClick={handlelogout}
            className='mt-3 bg-blue-200 text-black font-bold px-4 py-1 rounded-md'
          >
            Logout
          </button>
        </div>
      )}
        
      </div>
    </div>
  );
};

export default Nav;

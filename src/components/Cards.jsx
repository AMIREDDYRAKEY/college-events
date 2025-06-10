import React, { useState } from 'react';
import img from '../assets/presen.jpg';
import img2 from '../assets/bug.jpg';
import img3 from '../assets/Brain.jpg';
import img4 from '../assets/jam.webp';
import img5 from '../assets/thoughts.jpg';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import Individualevent from './Individualevent';
const Cards = ({ limit }) => {
  const [isopen, setisopen] = useState(false);
  const [details,setdetails] = useState(false)
  const navigate = useNavigate();
  
   
  const EventProfiles = [
    {
      img: img,
      EventName: 'Paper Presentation',
      Under: 'Tech Explore 2024',
      Date: '24/02/2025',
       
    },
    {
      img: img2,
      EventName: 'Bug Hunting',
      Under: 'Tech Explore 2024',
      Date: '07/01/2025',
       
    },
    {
      img: img3,
      EventName: 'Brain Busters',
      Under: 'Tech Explore 2024',
      Date: '24/02/2025',
      
    },
    {
      img: img4,
      EventName: 'Techno Jam',
      Under: 'Tech Explore 2024',
      Date: '13/02/2025',
      
    },
    {
      img: img5,
      EventName: 'Click Your Thoughts',
      Under: 'Tech Explore 2024',
      Date: '24/02/2025',
       
    },
  ];

  const displayedEvents = limit ? EventProfiles.slice(0, limit) : EventProfiles;

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 z-[0] px-2 relative">
      {displayedEvents.map((profiles, index) => (
        <div
          key={index}
          className='w-[250px] h-[400px] bg-white/5 backdrop-blur-sm rounded-lg shadow-lg shadow-[#1d3557]/40 transition-transform hover:scale-105 relative'
        >
          <div className='flex flex-col'>
            <img src={profiles.img} alt={profiles.EventName} className='h-[230px] w-[250px] rounded-lg' />
            <div className='flex flex-col px-4 mt-[15px] gap-1'>
              <h1 className='text-xl text-white font-bold'>{profiles.EventName}</h1>
              <p className='text-gray-300 text-lg font-semibold'>{profiles.Under}</p>
              <h3 className='text-gray-300 text-sm font-semibold'>{profiles.Date}</h3>
            </div>

            <div className='flex mt-[20px] ml-[15px] gap-4 font-semibold text-sm text-white'>
              <button
                className='border border-[#8162c0] h-[30px] w-[100px] rounded-lg'
                 onClick={()=>setdetails(!details) }
              >
                Viewdetails
              </button>
              <button
                className='border border-[#7f46f0] h-[30px] w-[100px] bg-[#5b21b6] rounded-lg'
                onClick={() => setisopen(!isopen)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Register Modal */}
      { isopen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className=" rounded-lg p-6 relative z-50 w-[90%] max-w-md">
             
            <Register setisopen={setisopen} isopen={isopen} />
          </div>
        </div>
      )}
      {/* viewdetails */}
      {
        details &&(
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className=" rounded-lg p-6 relative z-50 w-[90%] max-w-md">
             
             <Individualevent details={details} setdetails={setdetails}/>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Cards;

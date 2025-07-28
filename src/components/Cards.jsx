import React, { useEffect, useState } from 'react';
import img from '../assets/presen.jpg';
import img2 from '../assets/bug.jpg';
import img3 from '../assets/Brain.jpg';
import img4 from '../assets/jam.webp';
import img5 from '../assets/thoughts.jpg';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import Individualevent from './Individualevent';
import {getdata} from '../../api/api'
const Cards = ({ limit }) => {
  const [isopen, setisopen] = useState(false);
  const [details, setdetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();
  const [data,setdata] =useState([])
   const datagets = async () =>{
    const res= await getdata();
    setdata(res.data)
  }
  useEffect(()=>{
    datagets();
  },[])
 
  const EventProfiles = [
    {
      image: img,
      
    },
    {
      image: img2,
      
    },
    {
      image: img3,
      
    },
    {
      image: img4,
      
    },
    {
      image: img5,
       
    }
  ];
  const handleregister=()=>{
    setisopen(!isopen)
    // localStorage.getItem("token")
  }

  const displayedEvents = limit ? EventProfiles.slice(0, limit) : EventProfiles;

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setdetails(true);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 z-[100px] px-2 relative">
      {data.map((profiles, index) => (
        <div
          key={index}
          className='lg:w-[280px] h-[400px] w-[300px]  bg-[#12122d] backdrop-blur-sm rounded-lg shadow-2xl  transition-transform hover:scale-105 relative'
        >
          <div className='flex flex-col'>
            <img src={profiles.image} alt={profiles.EventName} className='h-[230px] lg:w-[290px] w-[300px] rounded-lg' />
            <div className='flex flex-col px-4 mt-[15px] gap-1'>
              <h1 className='text-xl text-white font-bold'>{profiles.eventName}</h1>
              <p className='text-gray-300 text-lg font-semibold'>{profiles.category}</p>
              <h3 className='text-gray-300 text-sm font-semibold'>{profiles.date}</h3>
            </div>

            <div className='flex mt-[20px] lg:ml-[15px] ml-[20px] lg:gap-4   gap-5 font-semibold text-sm text-white'>
              <button
                className='border border-[#8162c0] h-[30px] w-[120px] rounded-lg'
                onClick={() => handleViewDetails(profiles)}
              >
                Viewdetails
              </button>
              <button
                className='border border-[#7f46f0] h-[30px] w-[120px] bg-blue-700 rounded-lg'
                onClick={handleregister}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Register  */}
      {isopen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70  z-[100] ">
          <div className="rounded-lg p-6 relative z-50 w-[90%] max-w-md">
            <Register setisopen={setisopen} isopen={isopen} />
          </div>
        </div>
      )}

      {/* View Details  */}
      {details && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[100]">
          <div className="rounded-lg p-6 relative z-[100px] w-[90%] max-w-md">
            <Individualevent 
              details={details} 
              setdetails={setdetails}
              event={selectedEvent}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;

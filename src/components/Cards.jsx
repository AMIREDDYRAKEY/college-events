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
  const [details, setdetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const EventProfiles = [
    {
      img: img,
      EventName: 'Paper Presentation',
      Under: 'Tech Explore 2024',
      Date: '24/02/2025',
      // desc: "Paper Presentation is an opportunity for students to showcase their research and innovative ideas. Participants will present their technical papers on emerging technologies, current trends, and innovative solutions to real-world problems.",
      time: "10:00 AM - 12:00 PM",
      venue: "CSE-E Class Room"
    },
    {
      img: img2,
      EventName: 'Bug Hunting',
      Under: 'Tech Explore 2024',
      Date: '07/01/2025',
      // desc: "Bug Hunting is a thrilling competition designed for coders and developers who love debugging and problem-solving. Participants will be given pre-written code snippets embedded with logical or syntactical bugs. The task is to analyze, detect, and fix these issues within a set timeframe",
      time: "10:00 AM - 12:00 PM",
      venue: "CSE-E Class Room"
    },
    {
      img: img3,
      EventName: 'Brain Busters',
      Under: 'Tech Explore 2024',
      Date: '23/12/24',
      // desc: "Brain Busters is a high-intensity quiz-based competition that tests your knowledge, logic, and quick thinking. Designed to challenge even the sharpest minds, this event features multiple rounds that span across topics like science, tech, puzzles, general knowledge, and current affairs.",
      time: "9:00 AM - 10:00 AM",
      venue: "CSE E-Classroom"
    },
    {
      img: img4,
      EventName: 'Techno Jam',
      Under: 'Tech Explore 2024',
      Date: '14/02/25',
      // desc: "Techno Jam is a thrilling on-the-spot speaking challenge where participants must speak fluently and confidently about random technical and general topics without hesitation or repetition. It's the ultimate test of presence of mind, communication skills, and tech vocabulary under pressure.",
      time: "9:00 AM - 10:30 AM",
      venue: "CSE-E Class Room"
    },
    {
      img: img5,
      EventName: 'Click Your Thoughts',
      Under: 'Tech Explore 2024',
      Date: '24/02/2025',
      // desc: "Click Your Thoughts is a photography competition that challenges participants to capture the essence of technology and innovation through their lens. Showcase your perspective on how technology shapes our world.",
      time: "2:00 PM - 4:00 PM",
      venue: "CSE-E Class Room"
    }
  ];

  const displayedEvents = limit ? EventProfiles.slice(0, limit) : EventProfiles;

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setdetails(true);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 z-[100px] px-2 relative">
      {displayedEvents.map((profiles, index) => (
        <div
          key={index}
          className='lg:w-[280px] h-[400px] w-[300px]  bg-[#12122d] backdrop-blur-sm rounded-lg shadow-2xl  transition-transform hover:scale-105 relative'
        >
          <div className='flex flex-col'>
            <img src={profiles.img} alt={profiles.EventName} className='h-[230px] lg:w-[290px] w-[300px] rounded-lg' />
            <div className='flex flex-col px-4 mt-[15px] gap-1'>
              <h1 className='text-xl text-white font-bold'>{profiles.EventName}</h1>
              <p className='text-gray-300 text-lg font-semibold'>{profiles.Under}</p>
              <h3 className='text-gray-300 text-sm font-semibold'>{profiles.Date}</h3>
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
                onClick={() => setisopen(!isopen)}
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

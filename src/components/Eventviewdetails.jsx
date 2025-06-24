import React, { useState } from 'react';
import img from '../assets/Brain.jpg'
import img2 from '../assets/bug.jpg'
import img3 from '../assets/jam.webp'
import img4 from '../assets/thoughts.jpg'
import img5 from'../assets/presen.jpg'
const scheduleData = {
  "23/12/24": [
    {
      title: "Brain Busters",
      desc: "Brain Busters is a high-intensity quiz-based competition that tests your knowledge, logic, and quick thinking. Designed to challenge even the sharpest minds, this event features multiple rounds that span across topics like science, tech, puzzles, general knowledge, and current affairs.",
      time: "9.00 am - 10.00 am",
      img: img,
      
    },
     
  ],
  "07/01/2025": [
    {
      title: "Bug Hunting",
      desc: "Bug Hunting is a thrilling competition designed for coders and developers who love debugging and problem-solving. Participants will be given pre-written code snippets embedded with logical or syntactical bugs. The task is to analyze, detect, and fix these issues within a set timeframe",
      time: "10.00 am - 12.00 pm",
      img: img2,
       
    }
  ],
  "14/02/25": [
    {
      title: "Techno Jam",
      desc: "Techno Jam is a thrilling on-the-spot speaking challenge where participants must speak fluently and confidently about random technical and general topics without hesitation or repetition. It’s the ultimate test of presence of mind, communication skills, and tech vocabulary under pressure.",
      time: "9.00 am - 10.30 am",
      img: img3,
         
    }
    
  ],
  "12/12/2025":[
    {
       title: "Poster Presentation",
      desc: "The Poster Presentation event offers a platform for students and researchers to visually communicate their ideas, innovations, and research findings. Participants design academic or technical posters summarizing their projects and present them to a panel of judges and an audience. The goal is to convey complex concepts ",
      time: "9.00 am - 10.30 am",
      img: img5,
    }
  ],

   "10/12/2025":[
    {
       title: "Click Your Thoughts",
      desc: "The Poster Presentation event offers a platform for students and researchers to visually communicate their ideas, innovations, and research findings. Participants design academic or technical posters summarizing their projects and present them to a panel of judges and an audience. The goal is to convey complex concepts ",
      time: "9.00 am - 10.30 am",
      img: img5,
    }
  ]
  
};
const Eventviewdetails = () => {
 const [activeDay, setActiveDay] = useState(Object.keys(scheduleData)[0]);


  return (
    <div className="p-6 max-w-5xl mx-auto text-white  mt-[30px] lg:mt-[50px]  ">
      <div className='flex flex-col'><h3 className='lg:text-4xl text-4xl text-center font-serif text-[#ff009b]'>
  Event Schedule Details</h3>
  <div className='flex justify-center mt-[15px]'><span className='border-[1px]   border-[#ff009b] w-[300px] '></span></div>
</div>

       
      <div className='md:flex md:flex-row md:justify-between   flex flex-col'>
        {/* Tabs */}
      <div className="lg:flex lg:flex-col grid grid-cols-2 gap-3 lg:gap-2 mt-[20px] items-center justify-center mt-">
        {
        Object.keys(scheduleData).map((day) => (
          <button
            key={day}
            className={`h-[40px] w-[100px] rounded-md font-medium ${
              activeDay === day
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      {/* Events */}
      <div className=" flex items-center justify-center lg:mt-[30px] mt-[20px] ">
        {
        scheduleData[activeDay].map((event, index) => (
          <div key={index} className="bg-white shadow-md lg:h-[250px] lg:w-[800px] rounded-lg lg:flex lg:flex-row flex flex-col gap-10 p-5 items-center justify-center">
            <img src={event.img} alt={event.title} className="lg:w-[200px] h-[230px] rounded-md object-cover" />
            <div className='flex flex-col items-start gap-4 justify-start mb-[0px]'>
              <h2 className="lg:text-3xl text-xl text-black font-bold ">{event.title}</h2>
              <p className="text-gray-700 text-[15px]  ">{event.desc}</p>
              <span className="text-purple-600 font-semibold text-md">{event.time}</span>
             </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Eventviewdetails;

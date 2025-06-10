import React, { useState } from 'react';
import img from '../assets/Brain.jpg';
import { IoCloseSharp } from "react-icons/io5";
const Individualevent = ({ details, setdetails }) => {
  const [activetab, setactivetab] = useState('schedule');

  const schedule = [
    {
      Date: '23/12/24',
      Time: '10:00 AM',
      Venue: 'CSE E-Classroom',
    },
  ];

  const rulesdata = [
    {
      rule1: 'Open to all registered students.',
      rule2: 'Individual participation or teams of 2 (based on your event format).',
      rule3: 'The judges decision will be final and binding.'

    },
  ];
  const results = [
    {
      result: 'Results Declared Soon'

    },
  ];

  return (
    <div className="flex flex-col lg:justify-center lg:items-center">
      <div className="lg:flex lg:flex-row flex flex-col gap-6 px-6 py-4 lg:w-[600px]  bg-[#131e4e] rounded-lg shadow-md text-white">
        <button
          className="absolute lg:pl-[520px] pl-[180px]   mt-[-15px] lg:mt-[-1px] text-white font-bold text-3xl"
          onClick={() => setdetails(!details)}

        >
          <IoCloseSharp />

        </button>
        {/* Image */}
        <div>
          <img
            src={img}
            alt="Event"
            className="w-[200px] h-[150px] lg:mt-0 mt-[20px] object-cover rounded-md"
          />
        </div>

        {/* Buttons and Content */}
        <div className="flex flex-col gap-3 justify-start w-full">
          <div className="flex lg:gap-4 gap-2">
            <button
              onClick={() => setactivetab('schedule')}
              className="h-[30px] lg:w-[80px] w-[110px] bg-blue-600 rounded-md"
            >
              Schedule
            </button>
            <button
              onClick={() => setactivetab('rules')}
              className="h-[30px] lg:w-[80px] w-[100px] bg-blue-600 rounded-md"
            >
              Rules
            </button>
            <button className="h-[30px] lg:w-[80px] w-[100px] bg-blue-600 rounded-md"
              onClick={() => setactivetab('results')}
            >
              Results
            </button>
          </div>

          {/* Schedule Section */}
          {activetab === 'schedule' &&
            schedule.map((info, index) => (
              <div key={index} className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex gap-2 ">
                  <strong>Date:</strong> <p>{info.Date}</p>
                </div>
                <div className="flex gap-2 ">
                  <strong>Time:</strong> <p>{info.Time}</p>
                </div>
                <div className="flex gap-2 ">
                  <strong>Venue:</strong> <p>{info.Venue}</p>
                </div>
              </div>
            ))}
          {/* Rule */}
          {activetab === 'rules' && (
            rulesdata.map((info, index) => (
              <div key={index} className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex gap-2">
                  <p className='text-md font-semibold'>1:{info.rule1}</p>
                </div>
                <div className="flex gap-2">
                  <p className='text-md font-semibold'>2:{info.rule2}</p>
                </div>
                <div className="flex gap-2">
                  <p className='text-md font-semibold'>3:{info.rule3}</p>
                </div>
              </div>
            )
            ))}

          {/* Results */}
          {activetab === 'results' && (
            results.map((info, index) => (
              <div key={index} className="flex flex-col gap-2 mt-2 text-sm p-1">
                <p className='text-lg mt-[10px] font-semibold'>{info.result}</p>
              </div>
            )
            ))}

        </div>
      </div>  
    </div>
  );
};

export default Individualevent;

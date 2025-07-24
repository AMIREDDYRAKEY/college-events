import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { getdata } from '../../api/api';

const Individualevent =  ({ details, setdetails, event }) => {
  const [activetab, setactivetab] = useState('schedule');
  const rulesdata = [
    {
      rule1: 'Open to all registered students.',
      rule2: 'Individual participation or teams of 2 (based on your event format).',
      rule3: 'The judges decision will be final and binding.'
    },
  ];
const individualdata = async ()=>{  
  try{
  const [data,setdata] =useState([])
  const viewres=await getdata();
  setdata(viewres.data)
  }
  catch(err){
    console.log("error",err)
  }
  
}
useEffect(()=>{
  individualdata();
},[])
  const results = [
    {
      result: 'Results Declared Soon'
    },
  ];

  return (
    <div className="flex flex-col lg:justify-center  z-[100px] lg:items-center">
      <div className="lg:flex lg:flex-row flex flex-col gap-6 px-6 py-4 lg:w-[600px] md:h-[250px] bg-[#1e3142]  rounded-lg shadow-md text-white ">
        {/* Image */}
        <div>
          <img
            src={event.img}
            alt={event.EventName}
            className="lg:max-w-[180px] w-[300px] h-[150px] md:h-[200px] lg:mt-2 mt-[20px] object-cover rounded-md"
          />
        </div>

        {/* Buttons and Content */}
        <div className="flex flex-col gap-4 justify-start md:mt-[20px] w-full ">
          <div className="lg:flex lg:flex-row grid grid-cols-2 lg:gap-3 gap-3">
            <button
              onClick={() => setactivetab('schedule')}
              className="h-[30px] lg:w-[80px] bg-[#55e6a5] text-black  rounded-md"
            >
              Schedule
            </button>
            <button
              onClick={() => setactivetab('rules')}
              className="h-[30px] lg:w-[80px] bg-[#55e6a5] text-black  rounded-md"
            >
              Rules
            </button>
            <button 
              className="h-[30px] lg:w-[80px] bg-[#55e6a5] text-black  rounded-md"
              onClick={() => setactivetab('results')}
            >
              Results
            </button>
            <div className='ml-[85px] md:ml-[50px] lg:mt-[-30px] mt-[-240px]'>
              <button
                className="text-2xl mt-[-15px] lg:mt-[-0px] text-[#60819f] font-bold"
                onClick={() => setdetails(!details)}
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>

          {/* Schedule Section */}
          {activetab === 'schedule' && (
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <div className="flex gap-2 text-white ">
                <strong>Event:</strong> <p>{event.eventName}</p>
              </div>
              <div className="flex gap-2 text-white ">
                <strong>Date:</strong> <p>{event.date}</p>
              </div>
              <div className="flex gap-2 text-white ">
                <strong>Time:</strong> <p>{event.time}</p>
              </div>
              <div className="flex gap-2 text-white ">
                <strong>Venue:</strong> <p>{event.venue}</p>
              </div>
              
            </div>
          )}

          {/* Rules Section */}
          {activetab === 'rules' && (
            <div className="flex flex-col gap-2 mt-2 text-sm text-white ">
              {rulesdata.map((info, index) => (
                <div key={index} className="flex flex-col gap-2 text-white ">
                  <div className="flex gap-2">
                    <p className='text-md font-semibold text-white '>1: {info.rule1}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className='text-md font-semibold text-white '>2: {info.rule2}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className='text-md font-semibold text-white '>3: {info.rule3}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results Section */}
          {activetab === 'results' && (
            <div className="flex flex-col gap-2 mt-2 text-sm p-1 text-white ">
              {results.map((info, index) => (
                <div key={index}>
                  <p className='text-lg mt-[10px] font-semibold'>{info.result}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Individualevent;

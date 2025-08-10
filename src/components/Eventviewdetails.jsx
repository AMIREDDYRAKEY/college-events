import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Eventviewdetails = () => {
  const [data, setData] = useState({});
  const [activeDay, setActiveDay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });
        const res = await api.get("/api/events", {
          headers: { Authorization: `Bearer ${token}` }
        });

         
        const groupedEvents = res.data.reduce((acc, event) => {
          const dateKey = event.date?.split("T")[0] || "Unknown Date";
          if (!acc[dateKey]) acc[dateKey] = [];
          acc[dateKey].push(event);
          return acc;
        }, {});

        setData(groupedEvents);
        setActiveDay(Object.keys(groupedEvents)[0] || null);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center text-white mt-10">Loading events...</div>;
  }

  if (!activeDay) {
    return <div className="text-center text-white mt-10">No events available</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto text-white mt-[30px] lg:mt-[50px]">
      <div className='flex flex-col'>
        <h3 className='lg:text-4xl text-4xl text-center font-serif text-[#ff009b]'>
          Event Schedule Details
        </h3>
        <div className='flex justify-center mt-[15px]'>
          <span className='border-[1px] border-[#ff009b] w-[300px]'></span>
        </div>
      </div>

      <div className='md:flex md:flex-row md:justify-between flex flex-col'>
        {/* Tabs */}
        <div className="lg:flex lg:flex-col grid grid-cols-2 gap-3 lg:gap-2 mt-[20px] items-center justify-center">
          {Object.keys(data).map((day) => (
            <button
              key={day}
              className={`h-[40px] w-[100px] rounded-md font-medium ${
                activeDay === day ? "bg-purple-600 text-white" : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Events */}
        <div className="flex  justify-around lg:mt-[30px] mt-[20px]">
          {Array.isArray(data[activeDay]) && data[activeDay].map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md lg:h-[250px] lg:w-[800px] rounded-lg lg:flex lg:flex-row flex flex-col gap-10 p-3 items-start justify-start"
            >
              <img
                src={event.image || event.img || ""}
                alt={event.eventName || event.title}
                className="lg:w-[200px] h-[230px] rounded-md object-cover"
              />
              <div className='flex flex-col items-start gap-4  mt-4 justify-center'>
                <h2 className="lg:text-3xl text-xl text-black font-bold">
                  {event.eventName || event.title}
                </h2>
             <div className="w-[250px] flex gap-4 flex-col">
  <p className="text-gray-700 text-[10px] break-words">
    {event.description || event.desc}
  </p>
  <span className="text-purple-600 font-semibold text-md">
    {event.time}
  </span>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventviewdetails;

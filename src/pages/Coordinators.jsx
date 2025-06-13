import React from 'react';
import Nav from '../components/Nav';

const Coordinators = () => {
  const Facultycoordinators = [
    { Sno: '1', Name: 'A. Sudhakar Reddy', EventName: 'EventName', Role: 'Principal' },
    { Sno: '2', Name: 'Dr. C Venkata Subbaiah', EventName: 'EventName', Role: 'HOD' },
    { Sno: '3', Name: 'S.M.D Ali', EventName: 'EventName', Role: 'Professor' },
    { Sno: '4', Name: 'Faculty Name', EventName: 'EventName', Role: 'Professor' },
    { Sno: '5', Name: 'Faculty Name', EventName: 'EventName', Role: 'About' },
  ];

  const studentcordinators = [
    { Sno: '1', StudentName: 'Y.Pradeep', Year: 'III-C', Posisition: 'President' },
    { Sno: '2', StudentName: 'G.Venkata Tharun', Year: 'II-A', Posisition: 'Scretary' },
    { Sno: '3', StudentName: 'K.Vijay Kumar', Year: 'III-A', Posisition: 'Vice President' },
    { Sno: '4', StudentName: 'K.Venkata Pavan', Year: 'III-C', Posisition: 'Treasure' },
    { Sno: '5', StudentName: 'K.Mythili', Year: 'III-B', Posisition: 'Treasure' },
  ];

  return (
    <div className="min-h-screen pb-[50px] lg:pt-[100px] pt-[60px] bg-[#1a1135]">
      <div className="">
        <Nav />
      </div>

      <div className="flex flex-col gap-8 items-center justify-center mt-[40px] px-4">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#c43b9f] via-[#8f1ddb] to-[#aa0a68]">
          Our Faculty Coordinators
        </h1>

        {Facultycoordinators.map((info, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-4 shadow-2xl border-[#301b6e] border-[1px] rounded-lg bg-[#1a1135] backdrop-blur-md lg:w-[70%] w-[90%] mx-auto"
          >
            <h2 className="text-pink-300 font-semibold text-center lg:block hidden">{info.Sno}</h2>
            <h2 className="text-pink-200 font-semibold text-center lg:text-sm text-xl">{info.Name}</h2>
            <p className="text-purple-200 font-semibold text-center lg:text-sm text-lg">{info.EventName}</p>
            <p className="text-fuchsia-300 font-semibold text-center lg:text-sm text-md">{info.Role}</p>
          </div>
        ))}
      </div>

      <div className='mt-[50px]'>
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff5ecd] via-[#b14eff] to-[#7a4fff]">
          Our Student Coordinators
        </h1>
        <div className='flex flex-col gap-6 mt-[40px] items-center justify-center'>
          {studentcordinators.map((info, index) => (
            <div
              key={index}
            className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-4  shadow-2xl border-[#301b6e] border-[1px] rounded-lg bg-[#1a1135] lg:w-[70%] w-[90%] mx-auto"
            >
              <h2 className="text-pink-300 font-semibold text-center lg:block hidden">{info.Sno}</h2>
              <h2 className="text-pink-200 font-semibold text-center lg:text-sm text-xl">{info.StudentName}</h2>
              <p className="text-purple-200 font-semibold text-center lg:text-sm text-lg">{info.Year}</p>
              <p className="text-fuchsia-300 font-semibold text-center lg:text-sm text-md">{info.Posisition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coordinators;

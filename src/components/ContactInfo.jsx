import React from 'react';
import img from '../assets/bug.jpg';
import img2 from '../assets/Brain.jpg';
import img3 from '../assets/jam.webp';
import img4 from '../assets/presen.jpg';
import img5 from '../assets/thoughts.jpg';

const contacts = [
    {
        img: img,
        Name: 'A.Harini',
        RollNo: '24HM5A0501',
        Section: 'III-A',
    },
    {
        img: img2,
        Name: 'Y.PRADEEP',
        RollNo: '24HM5A0502',
        Section: 'III-C',
    },
    {
        img: img3,
        Name: 'K.Vijay Kumar',
        RollNo: '24HM5A0503',
        Section: 'III-A',
    },
    {
        img: img4,
        Name: 'S.Reddy',
        RollNo: '24HM5A0504',
        Section: 'III-C',
    },
    {
        img: img5,
        Name: 'K.Mythili',
        RollNo: '24HM5A0505',
        Section: 'III-B',
    },
];



const ContactInfo = () => {
    return (
        <div className="mt-[50px] lg:pt-[70px] pt-[60px]">
            <div className='flex flex-col'><h3 className='lg:text-4xl text-4xl text-center font-serif text-[#ff009b]'>
  Contact Us</h3>
  <div className='flex justify-center mt-[15px]'><span className='border-[1px]   border-[#ff009b] w-[150px] '></span></div>
</div>
            <div className="px-[0px] flex flex-wrap gap-4 justify-around">
                {contacts.map((info, index) => (
                    <div className="flex gap-8 items-center lg:ml-[40px]  mt-[30px]">
                        <div className="z-10">
                            <img
                                src={info.img}
                                alt="contact"
                                className="lg:h-[200px] lg:w-[200px] h-[120px] w-[120px] shadow-lg border-[1px] border-purple-800 rounded-full object-cover z-"
                            />
                        </div>
                        <div className="flex flex-col gap-2 lg:text-[15px] text-[10px] bg-[#281563]  shadow-md shadow-[#443869]  lg:h-[150px] h-[100px] lg:mt-[15px] mt-[0] ml-[-70px] justify-center  items-center lg:w-[280px] w-[200px]  rounded-r-full text-white">
                            <p > <strong >Name:</strong> {info.Name}</p>
                            <p> <strong >Roll No:</strong> {info.RollNo}</p>
                            <p> <strong >Section:</strong> {info.Section}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactInfo;

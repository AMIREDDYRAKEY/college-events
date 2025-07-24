import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
const Register = ({ isopen, setisopen }) => {
    const[submit,setsubmit] =useState('')
    const [data, setdata] = useState([])
    const navigate=useNavigate()
    const fetchdata = async () => {
        const token = localStorage.getItem("token");
        const api = axios.create({
            baseURL: 'https://evebackend.onrender.com',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        try {
            const res = await api.get('/api/auth/me');
            setdata(res.data);
        } catch (err) {
            console.log('err', err);
        }
    };

    useEffect(() => {
        fetchdata();
    }, [])
    const handlesubmit =()=>{
        alert('Registered Sucessfully')
        navigate('/')
         
    }
    return (
        <div className='z-[100px]'>
            <div className="flex items-center justify-center top-0 right-0 left-0   ">
                <div className="flex items-center justify-center">
                    <div className="  md:w-[320px] w-[300px] mt-[12%] rounded-lg shadow-lg p-4 shadow-[#4b3c63] bg-[#34244c]">
                        <div className='flex flex-row-reverse justify-center '>
                            <h3 className='text-2xl text-center font-semibold '>Register </h3>
                            <button
                                className="absolute  md:ml-[290px] ml-[270px] mt-[-15px] text-white font-bold text-2xl"
                                onClick={() => setisopen(!isopen)}

                            >
                                <IoCloseSharp />

                            </button>
                        </div>
                        <div className="flex flex-col gap-2  pt-[20px] text-white text-sm">
                            <div className='ml-[20px] flex gap-2'><span className="font-semibold text-gray-300  text-center">Name:</span> <p className='text-gray-300'>{data.username}</p></div>
                            <div className='ml-[20px] flex gap-2'><span className="font-semibold text-gray-300  text-center">Email:</span> <p className='text-gray-300'>{data.email} </p></div>
                            <div className='ml-[20px] flex gap-2'><span className="font-semibold text-gray-300  text-center">ID No:</span> <p className='text-gray-300'>{data.idNo} </p></div>
                            <div className='ml-[20px] flex gap-2'><span className="font-semibold text-gray-300  text-center">Branch:</span> <p className='text-gray-300'>{data.branch} </p></div>
                            <div className='ml-[20px] flex gap-2'><span className="font-semibold text-gray-300  text-center">Section:</span> <p className='text-gray-300'>{data.section} </p></div>
                            <div className='ml-[20px] flex gap-2'><span className="font-semibold text-gray-300  text-center">Year:</span> <p className='text-gray-300'>{data.year} </p></div>
                        </div>
                        <div className='pt-[20px] flex justify-end'><button className='px-4 py-1 rounded-lg bg-[#2b2bb1]' onClick={handlesubmit}>Confirm</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
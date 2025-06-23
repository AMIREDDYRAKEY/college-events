import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const Register = ({ isopen, setisopen }) => {
    const [sub, setsub] = useState('')
    const [Name, setName] = useState('')
    const [Idno, setIdno] = useState('')
    const [Section,setSection]=useState('')
    const [errors, seterrors] = useState({
        Name: '',
        Idno: ''
    })
    const handlesubmit = () => {
        let isvalid = true
        if (Name === '') {
            seterrors((errors) => ({ ...errors, Name: 'Name is required' }))
        }
        else {
            seterrors((errors) => ({ ...errors, Name: '' }))
        }
        // Idno
        if (Idno === '') {
            seterrors((errors) => ({ ...errors, Idno: 'Idno is required' }))
        }
        else {
            seterrors((errors) => ({ ...errors, Idno: '' }))
        }
        // section
        if(Section === ''){
            seterrors((errors) =>({...errors,Section:'Section is Required'}))
        }
        else{
            seterrors((errors) =>({...errors,Section:''}))
        }
    }
    const submit = () => {
        setsub(true)
    }
    return (
        <div className='z-[100px]'>
            <div className="flex items-center justify-center top-0 right-0 left-0   ">
                <div className="flex items-center justify-center">
                    <div className="  md:w-[320px] w-[300px] mt-[12%] rounded-lg shadow-lg p-4 shadow-[#4b3c63] bg-[#34244c]">
                        <div className='flex flex-row-reverse justify-center '>
                            <h3 className='text-3xl text-center font-semibold '>Register</h3>
                            <button
                                className="absolute  md:ml-[290px] ml-[270px] mt-[-15px] text-white font-bold text-2xl"
                                onClick={() => setisopen(!isopen)}

                            >
                                <IoCloseSharp />

                            </button>
                        </div>
                        <div className="flex flex-col gap-7 items-center justify-center ">
                            <div className="flex flex-col gap-3 items-center justify-center mt-[20px]">
                                {/* Username */}
                                <div className='flex flex-col'>
                                    <input type="text" placeholder="Enter Your Name" className="w-[270px] px-3 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" value={Name} onChange={(e) => setName(e.target.value)} />
                                     <span className='text-red-600 font-semibold ml-[10px]'>{errors.Name}</span>
                                </div>
                                {/* Idno */}
                                <div className='flex flex-col'>
                                    <input type="text" placeholder="Id No" className="w-[270px] px-3 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" value={Idno} onChange={(e) => setIdno(e.target.value)} />
                                    <span className='text-red-600 font-semibold ml-[10px]'>{errors.Idno}</span>
                                </div>
                                {/* section */}
                                 <div className='flex flex-col'>
                                    <input type="text" placeholder="Section" className="w-[270px] px-3 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" value={Section} onChange={(e) => setSection(e.target.value)} />
                                    <span className='text-red-600 font-semibold ml-[10px]'>{errors.Section}</span>
                                </div>
                            </div>
                            <div className="mt-[-10px] flex flex-col gap-2 items-center justify-center">
                                <button className="h-[40px] w-[270px] text-white font-bold rounded-xl bg-[#572bc7]" onClick={handlesubmit}>Submit</button>
                                {
                                    sub && (
                                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-green-600 text-white px-8 py-8 rounded-xl shadow-lg z-50">
                                            <p className="text-lg font-semibold">Registered successfully</p>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
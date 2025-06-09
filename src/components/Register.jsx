import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const Register = ({isopen,setisopen}) => {
    const [sub, setsub] = useState('')
    const submit = () => {
        setsub(true)
    }
    return (
        <div>
            <div className="flex items-center justify-center top-0 right-0 left-0   ">
                <div className="flex items-center justify-center">
                    <div className="h-[270px] w-[300px] mt-[12%] rounded-lg shadow-lg p-4 shadow-[#4b3c63] bg-[#34244c]">
                       <div className='flex flex-row-reverse justify-center '>  
                        <h3 className='text-3xl text-center font-semibold '>Register</h3>
                        <button
                            className="absolute  ml-[270px] mt-[-17px] text-white font-bold text-2xl"
                            onClick={()=>setisopen(!isopen)}
                            
                        >
                           <IoCloseSharp/>
                            
                        </button>
                        </div>
                        <div className="flex flex-col gap-7 items-center justify-center">
                            <div className="flex flex-col gap-5 items-center justify-center mt-[20px]">
                                <input type="text" placeholder="Enter Your Name" className="px-6 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" />
                                <input type="text" placeholder="ID NO" className="px-6 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" />
                            </div>
                            <div className="mt-[-10px] flex flex-col gap-2 items-center justify-center">
                                <button className="h-[40px] w-[220px] text-white font-bold rounded-xl bg-[#572bc7]" onClick={() => setsub(!sub)}>Submit</button>
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
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const Userlogin = () => {
  const [sub, setsub] = useState('');
  const [open, setopen] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [data, setdata] = useState('');
  const [errors, seterrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate('');

  const handlesubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    // Email validation
    if (email.trim() === "") {
      seterrors((errors) => ({ ...errors, email: 'Required email' }));
      isValid = false;
    } else {
      seterrors((errors) => ({ ...errors, email: '' }));
    }

    // Password validation
    if (password.trim() === "") {
      seterrors((errors) => ({ ...errors, password: 'Password Required' }));
      isValid = false;
    } else if (password.length < 6) {
      seterrors((errors) => ({ ...errors, password: 'Password must be at least 6 characters' }));
      isValid = false;
    } else {
      seterrors((errors) => ({ ...errors, password: '' }));
    }

    if (!isValid) return;

    const api = axios.create({ baseURL: 'https://evebackend.onrender.com' });
    try {
      const res = await api.post('/api/auth/login', {
        email, password
      });
      setdata(res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setopen(true);  
         toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
      });
        setTimeout(() => {
          setopen(false);
          navigate('/');
        }, 2000);
      }
    } catch (err) {
      alert("Invalid Details");
      toast.error("Invalid email or password", {
      position: "top-right",
      autoClose: 3000,
    });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b132b] via-[#2a1b3d] to-[#3a506b]">
      <div className="flex items-center justify-center">
        <div className="pb-[20px] md:w-[320px] w-[300px] lg:mt-[12%] mt-[200px] rounded-lg shadow-lg shadow-[#4b3c63] bg-[#34244c]">
          
          {/* User icon */}
          <div className="flex justify-center mt-[-40px]">
            <div className="flex items-center justify-center bg-[#403f68] h-[80px] w-[80px] rounded-full">
              <FaUser className="text-3xl text-[#cbdcf0]" />
            </div>
          </div>

          <div className="flex flex-col gap-7 items-center justify-center">
            <h3 className="text-4xl text-white font-semibold uppercase mt-[10px]">Login</h3>

            {/* Email & Password */}
            <div className="flex flex-col gap-3 mt-[-10px] items-center justify-center">

              {/* Email input */}
              <span className='flex flex-col'>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  className="w-[250px] px-3 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400"
                  onChange={(e) => setemail(e.target.value)}
                />
                {errors.email && <span className='text-red-600 ml-[15px] mt-[5px]'>{errors.email}</span>}
              </span>

              <span className='flex flex-col relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  className="w-[250px] px-3 pr-10 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400"
                  onChange={(e) => setpassword(e.target.value)}
                />
                {/* Eye icon */}
                <span
                  className="absolute right-3 top-[8px] text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && <span className='text-red-600 ml-[15px] mt-[5px]'>{errors.password}</span>}
              </span>

            </div>

            {/* Submit button */}
            <div className="mt-[-6px] flex flex-col gap-2 items-center justify-center">
              <button
                className="h-[40px] w-[250px] text-white font-bold rounded-xl bg-[#572bc7]"
                onClick={handlesubmit}
              >
                Submit
              </button>

              
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Userlogin;

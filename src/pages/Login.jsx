import React, { useState } from 'react';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import Userlogin from './components/Userlogin
import '../components/style.css'
import { IoCloseSharp } from "react-icons/io5";
const Login = () => {
  const navigate = useNavigate();
  const [isopen, setisopen] = useState(false)

  const [username, setusername] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [Idno, setIdno] = useState('')
  const [errors, seterrors] = useState({
    username: '',
    Email: '',
    password: '',
    Idno: ''
  });
  const handlesubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (username.trim() === "") {
      seterrors((errors) => ({ ...errors, username: 'Enter valid username' }));
      isValid = false;
    } else {
      seterrors((errors) => ({ ...errors, username: '' }));
    }

    if (Email.trim() === "") {
      seterrors((errors) => ({ ...errors, Email: 'Enter valid email' }));
      isValid = false;
    } else {
      seterrors((errors) => ({ ...errors, Email: '' }));
    }

    if (password.trim() === "") {
      seterrors((errors) => ({ ...errors, password: 'Password is required' }));
      isValid = false;
    } else if (password.length < 6) {
      seterrors((errors) => ({ ...errors, password: 'Password must be 6 characters' }));
      isValid = false;
    } else {
      seterrors((errors) => ({ ...errors, password: '' }));
    }

    if (Idno.trim() === "") {
      seterrors((errors) => ({ ...errors, Idno: 'Idno Number required' }));
      isValid = false;
    } else {
      seterrors((errors) => ({ ...errors, Idno: '' }));
    }
           
    if (isValid) {
    setisopen(true);
      setusername('');
  setEmail('');
  setpassword('');
  setIdno('');
    }
  else{
    setisopen(false)
  }
    
  };
  


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b132b] via-[#2a1b3d] to-[#3a506b]">
      <div className="flex items-center justify-center">
        <div className="  w-[300px] mt-[120px] rounded-lg shadow-lg shadow-[#4b3c63] overflow-y-auto scroll-hidden bg-[#34244c]">
          <div className="flex flex-col gap-7 pb-[20px] items-center justify-center ">
            <h3 className="text-4xl text-white font-semibold uppercase mt-[20px]">Sign In</h3>

            <div className="flex flex-col gap-5 items-center justify-center ">
              <span className='flex flex-col'> <input type="text" placeholder="Username" value={username} className="px-6 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setusername(e.target.value)} />
                {errors.username && <span className='text-red-600 ml-[10px]'>{errors.username}</span>}
              </span>
              <span className='flex flex-col'> <input type="Email" placeholder="Email" value={Email} className="px-6 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setEmail(e.target.value)} />
                {errors.Email && <span className='text-red-600 ml-[10px]'>{errors.Email}</span>}
              </span>
              <span className='flex flex-col'> <input type="Password" placeholder="Password" value={password} className="px-6 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setpassword(e.target.value)} />
                {errors.password && <span className='text-red-600 ml-[10px]'>{errors.password}</span>}
              </span>
              <span className='flex flex-col'> <input type="text" placeholder="Id No" value={Idno} className="px-6 rounded-xl py-[7px] bg-[#34244c] border-[1px] text-gray-400" onChange={(e) => setIdno(e.target.value)} />
                {errors.Idno && <span className='text-red-600 ml-[10px]'>{errors.Idno}</span>}
              </span>
            </div>

            <div className="mt-[-10px] flex flex-col gap-2 items-center justify-center">
              <button className="h-[40px] w-[220px] text-white font-bold rounded-xl bg-[#572bc7]" onClick={handlesubmit} >Submit</button>

              <button className="text-sm text-white opacity-80 font-semibold">Already Have An Account?</button>
              <button
                className="text-md text-blue-500 font-semibold"
                onClick={() => navigate('/Userlogin')} // 👈 make sure route is lowercase
              >

                Login
              </button>
            </div>
          </div>
          {isopen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="relative bg-white rounded-xl shadow-lg w-[280px] h-[160px] flex flex-col items-center justify-center">
                <button
                  className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={()=>setisopen(false)}
                >
                  <IoCloseSharp />
                </button>
                <p className="text-lg font-semibold text-center text-black">Sign in Successfully</p>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import toast, { Toaster } from 'react-hot-toast';
import HeadSet from './Headset';

function SignIn({ setSigned }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  const handleForm = (e) => {
    e.preventDefault();
    if (email.match(emailRegex) && password.match(passwordRegex)) {
      toast.success('Signed In Successfully!');
      setSigned(true);
      navigate('/home'); // Navigate to the Home component
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gradient-to-br from-black to-[#08a76a] flex justify-center items-center h-screen w-screen">
        <div className="h-[70%] shadow-2xl rounded-2xl bg-gray-200 bg-opacity-80 flex flex-col w-[25%]">
          <div className="flex py-12 gap-4 flex-col justify-center items-center w-full">
            <span className="flex">
              <h1 className="text-5xl font-semibold cursor-default">Audio</h1>
              <h1><HeadSet className="w-12 h-8 absolute rotate-45 animate-pulse" /></h1>
            </span>
            <p className="text-xl font-semibold cursor-default">
              It's modular and designed to last
            </p>
          </div>
          <form className="flex justify-center items-center py-10 px-6 flex-col gap-6" onSubmit={handleForm}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="text-lg h-14 px-6 rounded-xl cursor-text cursor-black shadow-lg transform focus:scale-105 duration-200 outline-none focus:border-2 focus:border-[#0ACF83] bg-gray-100 w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="text-lg h-14 px-6 rounded-xl shadow-lg transform focus:scale-105 duration-200 outline-none focus:border-2 focus:border-[#0ACF83] bg-gray-100 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <h1 className="text-xl font-semibold cursor-pointer pt-6 transform hover:scale-105 duration-200 opacity-80 hover:opacity-100">
              Forgot Password
            </h1>
            <button
              type="submit"
              className="bg-[#0ACF83] text-xl font-semibold w-full h-14 rounded-2xl shadow-lg transform opacity-80 hover:opacity-100 focus:scale-95 hover:scale-105 duration-200"
            >
              Sign In
            </button>
            <span className="flex gap-2">
              <h1 className="font-semibold cursor-default">
                Don't have an account?
              </h1>
              <Link
                className="text-[#2bc087] hover:scale-105 transform duration-150 font-semibold cursor-pointer"
                to={'/signup'}
              >
                Sign Up here
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;

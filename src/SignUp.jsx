import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './FacebookIcon';
import GoogleIcon from './GoogleIcon';
import AppleIcon from './AppleIcon';
import HeadSet from './Headset';

function SignUp({ setSigned }) {
  const handleForm = (e) => {
    e.preventDefault();
    setSigned(true);
  };

  return (
    <div className="bg-gradient-to-br from-black to-[#08a76a] bg-fixed flex justify-center items-center h-screen w-screen">
      <div className="h-[70%] shadow-2xl rounded-2xl bg-gray-200 bg-opacity-80 flex flex-col w-[25%]">
        <div className="flex py-12 gap-4 flex-col justify-center items-center w-full">
          <span className="flex">
            <h1 className="text-5xl font-semibold cursor-default">Audio</h1>
            <h1><HeadSet className="w-12 h-8 absolute rotate-45" /></h1>
          </span>
          <p className="text-xl font-semibold cursor-default">It's modular and designed to last</p>
        </div>
        <form className="flex justify-center items-center py-10 px-6 flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            className="text-lg h-14 px-6 rounded-xl shadow-lg transform focus:scale-105 duration-200 outline-none focus:border-2 focus:border-[#0ACF83] bg-gray-100 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-lg h-14 px-6 rounded-xl shadow-lg transform focus:scale-105 duration-200 outline-none focus:border-2 focus:border-[#0ACF83] bg-gray-100 w-full"
          />
          <button
            onClick={(e) => handleForm(e)}
            className="bg-[#0ACF83] text-xl font-semibold w-full h-14 rounded-2xl shadow-lg transform opacity-80 hover:opacity-100 focus:scale-95 hover:scale-105 duration-200"
          >
            Sign Up
          </button>
          <span className="flex gap-4">
            <div className="flex justify-center w-16 h-16 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 duration-150 items-center bg-gray-200">
              <FacebookIcon className="w-9 h-10" />
            </div>
            <div className="flex justify-center w-16 h-16 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 duration-150 items-center bg-gray-200">
              <GoogleIcon className="w-9 h-10" />
            </div>
            <div className="flex justify-center w-16 h-16 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 duration-150 items-center bg-gray-200">
              <AppleIcon className="w-9 h-10" />
            </div>
          </span>
          <span className="flex gap-2">
            <h1>Already have an account?</h1>
            <Link className="text-[#2bc087] hover:scale-105 transform duration-150 font-semibold cursor-pointer" to={"/signin"}>
              Sign In here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

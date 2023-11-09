import React, { useState } from 'react';
import "./Navber.css";
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TravelingWithUs</h1>
      </div>
      <ul className='hidden md:flex' >
        <li>Home</li>
        <li>Destinations</li>
        <li>About</li>
        
      </ul>
      <div className='hidden md:flex'>
        {/* <BiSearch className='logo' size={20} />
        <BsPerson className='logo' size={20} /> */}
        <li>Login</li>
        <li>SignUp</li>
      </div>

     
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>TravelingWithUs</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li>About</li>
        
       
          <div className='flex flex-col'>
          <li>Login</li>
        <li>SignUp</li>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

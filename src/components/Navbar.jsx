import React, { useState } from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>ParkShare</h1>
          <ul className='hidden md:flex'>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link to="howitworks" smooth={true} offset={-50} duration={500}>How it Works</Link></li>
            <li><Link to="benefits" smooth={true} offset={-100} duration={500}>Benefits</Link></li>
            <li><Link to="Joinnow" smooth={true} offset={-50} duration={500}>Join Now</Link></li>
          </ul>
        </div>

        <div className='hidden md:flex pr-4'>
          <a href="https://parkshare11.onrender.com/register">
            <button className='px-8 py-3 mx-2 bg-transparent border-solid text-indigo-600 hover:bg-indigo-600 hover:text-white'>
              Sign In
            </button>
          </a>

          <a href="https://parkshare11.onrender.com/login">
            <button className='px-8 py-3 mx-2'>Sign Up</button>
          </a>
        </div>
        
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="howitworks" smooth={true} offset={-50} duration={500}>Support</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="benefits" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="joinnow" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

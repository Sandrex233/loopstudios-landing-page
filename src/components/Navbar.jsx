import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className='flex h-28 items-center justify-between p-20'>
            <div>
                <img src={Logo} alt="" />
            </div>

            <div onClick={handleClick} className='md:hidden z-10 text-white'>
                {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            <ul className='hidden md:flex text-center gap-5 text-gray-100 font-jsans font-bold py-2'>
                <li className='cursor-pointer hover:border-b py-2'>About</li>
                <li className='cursor-pointer hover:border-b py-2'>Careers</li>
                <li className='cursor-pointer hover:border-b py-2'>Events</li>
                <li className='cursor-pointer hover:border-b py-2'>Products</li>
                <li className='cursor-pointer hover:border-b py-2'>Support</li>
            </ul>

            <div className={!nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-black text-white text-5xl pl-20 font-extralight flex flex-col justify-center items-start'}>
                <img src={Logo} alt="" className='md:hidden flex absolute top-[64px] left-[80px]' />

                <ul className='space-y-7'>
                    <li onClick={handleClick} className='cursor-pointer py-2'>About</li>
                    <li onClick={handleClick} className='cursor-pointer py-2'>Careers</li>
                    <li onClick={handleClick} className='cursor-pointer py-2'>Events</li>
                    <li onClick={handleClick} className='cursor-pointer py-2'>Products</li>
                    <li onClick={handleClick} className='cursor-pointer py-2'>Support</li>
                </ul>
            </div>


        </div >
    )
}

export default Navbar
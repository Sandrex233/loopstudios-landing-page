import React from 'react'

import Logo from '../assets/logo.svg'
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'



const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='container flex flex-col-reverse justify-between px-8 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                <div className='flex flex-col items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>

                    <div className='space-y-0 md:space-y-5 mb-0 md:mb-5'>
                        <img src={Logo} alt="" className='h-5' />
                    </div>


                    <ul className='gap-5 text-white text-center font-jsans font-bold flex flex-col md:flex-row  pt-0 md:pt-5 pb-5'>
                        <li className='cursor-pointer md:hover:border-b'>About</li>
                        <li className='cursor-pointer md:hover:border-b'>Careers</li>
                        <li className='cursor-pointer md:hover:border-b'>Events</li>
                        <li className='cursor-pointer md:hover:border-b'>Products</li>
                        <li className='cursor-pointer md:hover:border-b'>Support</li>
                    </ul>

                    <div className='md:hidden flex space-x-3'>
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Pinterest} alt="" />
                        <img src={Instagram} alt="" />
                    </div>

                    <div className='mx-auto text-center text-gray-400 md:hidden'>© 2022 Loopstudios. All rights reserved.</div>

                </div>

                <div className='flex flex-col justify-between'>
                    <div className='hidden md:flex space-x-3'>
                        <img src={Facebook} alt="" className='cursor-pointer faceb' />
                        <img src={Twitter} alt="" className='cursor-pointer twt' />
                        <img src={Pinterest} alt="" className='cursor-pointer pnt' />
                        <img src={Instagram} alt="" className='cursor-pointer insta' />
                    </div>
                    <div className='hidden pb-6 text-gray-400 md:flex'>© 2022 Loopstudios. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
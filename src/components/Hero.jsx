import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div id='hero'>
            <Navbar />
            <div className='mx-20 border-white border-4 flex p-10 max-w-2xl md:h-72 items-start justify-center'>
                <div className='max-w-fit max-h-fit text-3xl md:text-7xl mx-auto my-auto font-light text-left text-white'>IMMERSIVE EXPERIENCES THAT DELIVER</div>
            </div>
        </div>
    )
}

export default Hero
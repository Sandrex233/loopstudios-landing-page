import React from 'react'
import Interactiveimg from '../assets/desktop/image-interactive.jpg'

const Interactive = () => {
    return (
        <div className='flex justify-between p-20 items-center flex-col md:flex-row space-y-6 my-10'>
            <div>
                <img src={Interactiveimg} alt="" />
            </div>
            <div className='max-w-lg flex flex-col justify-center space-y-6'>
                <h1 className='text-3xl md:text-6xl font-light text-center md:text-left'>THE LEADER IN INTERACTIVE VR</h1>
                <p className='font-jsans text-lg text-gray-500 font-bold text-center md:text-left'>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
            </div>
        </div>
    )
}

export default Interactive
import React from 'react'

import Earth from '../assets/desktop/image-deep-earth.jpg'
import Arcade from '../assets/desktop/image-night-arcade.jpg'
import Soccer from '../assets/desktop/image-soccer-team.jpg'
import Grid from '../assets/desktop/image-grid.jpg'
import Above from '../assets/desktop/image-from-above.jpg'
import Pocket from '../assets/desktop/image-pocket-borealis.jpg'
import Curiosity from '../assets/desktop/image-curiosity.jpg'
import Fisheye from '../assets/desktop/image-fisheye.jpg'

const Creations = () => {
    return (
        <div className='w-full text-gray-300 pt-40'>
            <div className='max-w-xs md:max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-20 flex justify-between'>
                    <h1 className='text-6xl font-light text-center text-black'>OUR CREATIONS</h1>
                    <button className='p-3 border-black border-2 font-medium text-black tracking-[.3em] px-10 hover:bg-black hover:text-white'>SEE ALL</button>
                </div>


                <div className='hidden md:grid sm:grid-cols-2 grid-rows-6 md:grid-rows-2 md:grid-cols-4 gap-4'>

                    <div
                        style={{ backgroundImage: `url(${Earth})`, height: '400px' }}
                        className='container flex justify-center bg-no-repeat items-center cursor-pointer mx-auto hover:opacity-50'>
                        <span className='mt-72 ml-5 text-4xl text-left font-extralight text-white'>
                            DEEP EARTH
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Arcade})`, height: '400px' }}
                        className='container flex justify-center bg-no-repeat items-center cursor-pointer mx-auto hover:opacity-50'>
                        <span className='mt-72 ml-5 text-4xl text-left font-extralight text-white'>
                            NIGHT ARCADE
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Soccer})`, height: '400px' }}
                        className='container flex justify-center bg-no-repeat items-center cursor-pointer mx-auto hover:opacity-50'>
                        <span className='mt-72 ml-5 text-4xl text-left font-extralight text-white'>
                            SOCCER TEAM VR
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Grid})`, height: '400px' }}
                        className='container flex justify-center bg-no-repeat items-center cursor-pointer mx-auto hover:opacity-50'>
                        <span className='mt-72 ml-5 text-4xl text-left font-extralight text-white'>
                            THE GRID
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Above})`, height: '400px' }}
                        className='container flex justify-center bg-no-repeat items-center cursor-pointer mx-auto hover:opacity-50'>
                        <span className='mt-72 ml-5 text-4xl text-left font-extralight text-white'>
                            FROM UP ABOVE VR
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Pocket})`, height: '400px' }}
                        className='container flex justify-center bg-no-repeat items-center cursor-pointer mx-auto hover:opacity-50'>
                        <span className='mt-72 ml-5 text-4xl text-left font-extralight text-white'>
                            POCKET BOREALIS
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Curiosity})`, height: '400px' }}
                        className='container flex justify-center bg-no-repeat items-center cursor-pointer mx-auto hover:opacity-50'>
                        <span className='mt-72 ml-5 text-4xl text-left font-extralight text-white'>
                            THE CURIOSITY
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Fisheye})`, height: '400px' }}
                        className='container flex justify-center bg-no-repeat items-center cursor-pointer mx-auto hover:opacity-50'>
                        <span className='mt-72 ml-5 text-4xl text-left font-extralight text-white'>
                            MAKE IT FISHEYE
                        </span>
                    </div>

                </div>






            </div>
        </div>
    )
}

export default Creations
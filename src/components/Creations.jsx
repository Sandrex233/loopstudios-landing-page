import React from 'react'

import Earth from '../assets/desktop/image-deep-earth.jpg'
import Arcade from '../assets/desktop/image-night-arcade.jpg'
import Soccer from '../assets/desktop/image-soccer-team.jpg'
import Grid from '../assets/desktop/image-grid.jpg'
import Above from '../assets/desktop/image-from-above.jpg'
import Pocket from '../assets/desktop/image-pocket-borealis.jpg'
import Curiosity from '../assets/desktop/image-curiosity.jpg'
import Fisheye from '../assets/desktop/image-fisheye.jpg'

import Earthm from '../assets/mobile/image-deep-earth.jpg'
import Arcadem from '../assets/mobile/image-night-arcade.jpg'
import Soccerm from '../assets/mobile/image-soccer-team.jpg'
import Gridm from '../assets/mobile/image-grid.jpg'
import Abovem from '../assets/mobile/image-from-above.jpg'
import Pocketm from '../assets/mobile/image-pocket-borealis.jpg'
import Curiositym from '../assets/mobile/image-curiosity.jpg'
import Fisheyem from '../assets/mobile/image-fisheye.jpg'

const Creations = () => {
    return (
        <div className='w-full text-gray-300 pt-40'>
            <div className='md:max-w-5xl mx-auto p-4 flex flex-col justify-center h-full'>
                <div className='pb-20 flex justify-between'>
                    <h1 className='hidden md:block text-6xl font-light text-center text-black'>OUR CREATIONS</h1>
                    <button className='hidden md:block p-3 border-black border-2 font-medium text-black tracking-[.3em] px-10 hover:bg-black hover:text-white'>SEE ALL</button>
                </div>


                <div className='hidden md:grid md:grid-cols-4 gap-4'>

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

                <div className='pb-10 flex items-center justify-center'>
                    <h1 className='md:hidden block text-5xl font-light text-center text-black'>OUR CREATIONS</h1>
                </div>

                <div className='md:hidden grid grid-cols-1 space-y-4'>

                    <div
                        style={{ backgroundImage: `url(${Earthm})`, height: '200px' }}
                        className='w-full object-none container flex justify-start bg-no-repeat items-end cursor-pointer mx-auto hover:opacity-50'>
                        <span className='ml-5 mb-5 text-4xl mx-auto font-light  text-white'>
                            DEEP <br /> EARTH
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Arcadem})`, height: '200px' }}
                        className='w-full container flex justify-start bg-no-repeat items-end cursor-pointer mx-auto hover:opacity-50'>
                        <span className='ml-5 mb-5 text-4xl mx-auto font-light  text-white'>
                            NIGHT ARCADE
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Soccerm})`, height: '200px' }}
                        className='w-full container flex justify-start bg-no-repeat items-end cursor-pointer mx-auto hover:opacity-50'>
                        <span className='ml-5 mb-5 text-4xl mx-auto font-light  text-white'>
                            SOCCER TEAM VR
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Gridm})`, height: '200px' }}
                        className='w-full container flex justify-start bg-no-repeat items-end cursor-pointer mx-auto hover:opacity-50'>
                        <span className='ml-5 mb-5 text-4xl mx-auto font-light  text-white'>
                            THE GRID
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Abovem})`, height: '200px' }}
                        className='w-full container flex justify-start bg-no-repeat items-end cursor-pointer mx-auto hover:opacity-50'>
                        <span className='ml-5 mb-5 text-4xl mx-auto font-light  text-white'>
                            FROM UP ABOVE VR
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Pocketm})`, height: '200px' }}
                        className='w-full container flex justify-start bg-no-repeat items-end cursor-pointer mx-auto hover:opacity-50'>
                        <span className='ml-5 mb-5 text-4xl mx-auto font-light  text-white'>
                            POCKET BOREALIS
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Curiositym})`, height: '200px' }}
                        className='w-full container flex justify-start bg-no-repeat items-end cursor-pointer mx-auto hover:opacity-50'>
                        <span className='ml-5 mb-5 text-4xl mx-auto font-light  text-white'>
                            THE CURIOSITY
                        </span>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Fisheyem})`, height: '200px' }}
                        className='w-full container flex justify-start bg-no-repeat items-end cursor-pointer mx-auto hover:opacity-50'>
                        <span className='ml-5 mb-5 text-4xl mx-auto font-light  text-white'>
                            MAKE IT FISHEYE
                        </span>
                    </div>

                    <div className='pt-5 flex items-center justify-center'>
                        <button className='md:hidden block p-3 border-black border-2 font-medium text-black tracking-[.3em] px-10 hover:bg-black hover:text-white'>SEE ALL</button>
                    </div>

                </div>





            </div>
        </div>
    )
}

export default Creations
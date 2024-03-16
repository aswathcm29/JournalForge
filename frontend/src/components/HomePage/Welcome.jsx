/* eslint-disable no-unused-vars */
import React from 'react'
import homeimg from '../../assets/homepage.png'
import { TypeAnimation } from 'react-type-animation';

const Welcome = () => {
  return (
    <section className='h-[94vh]'>
        <div className='h-full flex justify-start items-center relative pb-10 '>
        <div className='flex flex-col px-[9rem] z-10'>
            <p className='text-6xl flex flex-start'> <TypeAnimation
               sequence={[
                'Welcome to JournalForge',
                  1000, 
                    ]}
                  wrapper="span"
                 speed={50}
                  repeat={Infinity}
              /></p> 
            <p className='py-2'>Join a Global Community of Scholars and Innovators in Pushing the Boundaries of Knowledge</p>
            <div className='py-10 flex flex-start'><button className='w-[12rem] h-[3.5rem] bg-green-400 rounded-full'>
                <span className='text-2xl'>Explore</span>
            </button>
            </div> 
       </div>
           <div>
            <img src={homeimg} alt="" className='absolute z-0 top-[5rem] left-[-1.3rem]'></img>
           </div>
        </div>
        <div>
           
        </div>
    </section>
  )
}
export default Welcome
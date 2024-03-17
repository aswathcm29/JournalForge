/* eslint-disable no-unused-vars */
import React from 'react'
import homeimg from '../../assets/homepage.png'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router';

const Welcome = () => {
  const navigate = useNavigate()
  const toExplore=()=>{
    navigate('/journals')
  }
  return (
    <section  className='h-[70vh] mt-20'>
        <div className='h-full flex justify-center items-center relative pb-10 '>
        <div className='flex flex-col px-[9rem] z-10 '>
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
            <div className='py-10 flex flex-start'><button className='w-[12rem] h-[3.5rem] bg-green-400 rounded-full' onClick={toExplore}>
                <span className='text-2xl'>Explore</span>
            </button>
            </div> 
       </div>
           <div>
            <img src={homeimg} alt="" className='absolute z-0 top-[5rem] left-[4rem]'></img>
           </div>
        </div>
      <div>  
      </div>
    </section>
  )
}
export default Welcome
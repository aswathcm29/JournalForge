/* eslint-disable no-unused-vars */
import React from 'react';
import homeimg from '../../assets/homepage.png';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router';

const Welcome = () => {
  const navigate = useNavigate();

  const toExplore = () => {
    navigate('/journals');
  };

  return (
    <section className='h-[70vh] mt-20'>
      <div className='h-full flex flex-col md:flex-row justify-center items-center relative pb-10'>
        <div className='flex flex-col items-center md:items-start px-4 md:px-[9rem] z-10'>
          <p className='text-3xl md:text-6xl text-center md:text-left'>
            <TypeAnimation
              sequence={['Welcome to JournalForge', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className='py-2 text-center md:text-left'>
            Join a Global Community of Scholars and Innovators in Pushing the Boundaries of Knowledge
          </p>
          <div className='py-6 md:py-10'>
            <button className='w-[10rem] md:w-[12rem] h-[3rem] md:h-[3.5rem] bg-green-400 rounded-full' onClick={toExplore}>
              <span className='text-xl md:text-2xl'>Explore</span>
            </button>
          </div>
        </div>
        <div className='hidden md:block'>
          <img src={homeimg} alt="Homepage" className='absolute z-0 top-0 md:top-[5rem] left-0 md:left-[4rem] w-full md:w-auto' />
        </div>
      </div>
    </section>
  );
};

export default Welcome;

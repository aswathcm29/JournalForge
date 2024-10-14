/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section id='about' className='py-8'>
        <div className='text-center'>
          <div className='w-full md:w-[78rem] h-auto md:h-[40rem] flex flex-col md:flex-row justify-center items-center mb-6 rounded-xl py-6 md:py-9 shadow-xl border-l-4 mx-4 md:mx-auto'>
            <div className='mb-8 md:mb-[4rem]'>
              <span className='text-2xl md:text-4xl py-2 px-4 bg-green-400 rounded-xl shadow-xl'>About Us</span>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-x-10 mx-4 md:mx-10'>
              <div className='text-base md:text-xl w-full md:w-[60%] text-justify py-6 md:py-10 px-4 md:px-[2rem]'>
                At JournalForge, our mission is to empower researchers, scholars, and practitioners worldwide by providing a dynamic platform for the exchange of ideas and the publication of high-quality, peer-reviewed articles. We are committed to fostering academic excellence, promoting interdisciplinary collaboration, and driving innovation forward. Our dedication to advancing knowledge and promoting inclusivity ensures that diverse perspectives are valued and contribute to meaningful discoveries through our comprehensive resources and community-driven approach.
              </div>
              <div className='w-full md:w-[40%] flex items-center justify-center'>
                <img className='w-[12rem] md:w-auto h-[12rem] md:h-[25rem] rounded-full' src='https://img1.etsystatic.com/000/0/5398683/il_570xN.344888299.jpg' alt='About Us'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

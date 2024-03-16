/* eslint-disable no-unused-vars */
import React from 'react'

const About = () => {
  return (
    <div>
    <section className='h-[100vh]  p-4 rounded-3xl flex  justify-center'>
      <div className='text-center'>
        <div className=' w-[78rem] h-[40rem] flex justify-center items-center mb-6 rounded-xl py-9 flex-col shadow-xl border-l-4  '>
        <div className='mb-[4rem]'><span className='text-5xl py-2  px-4 bg-green-400 rounded-xl shadow-xl'>About Us</span></div>
        <div className='flex flex-row justify-between items-center'>
        <div className='text-xl px-[2rem] w-[70%]'> At JournalForge, our mission is to empower researchers, scholars, and practitioners worldwide by providing a dynamic platform for the exchange of ideas and the publication of high-quality, peer-reviewed articles. We are committed to fostering academic excellence, promoting interdisciplinary collaboration, and driving innovation forward. Our dedication to advancing knowledge and promoting inclusivity ensures that diverse perspectives are valued and contribute to meaningful discoveries. Through our comprehensive resources and community-driven approach.</div>
        <img className='w-[20rem] h-[15rem] pr-[3rem] rounded-xl' src={'https://i.pinimg.com/originals/aa/26/92/aa269268f3f7c64bccfefba38dc90944.jpg'} alt='hello'></img>
        </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 text-[#333] bg-[#F4F7F0] p-4'>
        <div className='flex justify-around w-full'>
            <Link to={'/'}>Home</Link>
            <Link to={'/aboutus'}>About us</Link>
            <Link to={'/contactus'}>Contact us</Link>
        </div>
        <div className='text-[12px]'>
            © Copyright 2024 - JournalForge
        </div>
    </div>
  )
}

export default Footer
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFile } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className=''>
        <header className='flex items-center justify-between border-b-4 border-green-400'>
             <span className='text-5xl'>J<span className='text-4xl mb-2 absolute'>F</span></span>
             <div className='flex flex-row gap-x-4 justify-center items-center'>
             <div className='flex bg-green-400 w-[15rem] h-[3rem] items-center justify-center rounded-full gap-x-3'>
                <FaFile className='text-3xl px-2'></FaFile>
                <span className='text-xl'>Publish</span>
             </div>
             <div className=''>
                <ul className='flex gap-x-12 text-xl'>
                    <Link to='/home'><li className=''>Home</li></Link>
                    <Link to='/about'><li className=''>About</li></Link> 
                    <Link to='/journals'><li className=''>Journals</li></Link>
                    <Link to='/profile'><li className=''>Profile</li></Link>
                </ul>
             </div>
            </div>
             
        </header> 
        <hr className='h-[0.1rem] flex justify-center bg-green-500 mt-4 shadow-2xl'></hr>  
    </div>
    </>
  )
}

export default Navbar
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFile } from "react-icons/fa";


const Navbar = () => {
  return (
    <div>
        <header className='flex items-center justify-between'>
             <span className='text-5xl'>J<span className='text-4xl mb-2 absolute'>F</span></span>
             <div>
                <input type='text' className='bg-transparent ring-1 ring-black w-[20rem] h-10 rounded-xl px-3'
                 placeholder='Search'
                ></input>
             </div>
             <div className='flex bg-green-400 w-[10rem] h-[3rem] items-center justify-center rounded-2xl gap-x-2'>
                <FaFile className='text-3xl px-2'></FaFile>
                <span className='text-xl'>Publish</span>
             </div>
        </header>
    </div>
  )
}

export default Navbar
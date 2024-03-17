/* eslint-disable no-unused-vars */
import React from 'react'

const ProfileCard=()=>{
    return (
        <>
            <div className='ring-2 h-[20rem] w-[24rem]'></div>
        </>
    )
}

const Profile = () => {
  return (
    <div className='w-full '>
        <div className=' flex flex-col gap-x-5 my-5 rounded-xl items-center justify-center'>
        <div className='h-[40rem] w-[95%] rounded-xl'>
            <div className=' h-[20rem] flex flex-row shadow-xl items-center px-10'>
                <div className='rounded-full w-full'>
                <img src={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                  className='h-[17rem] p-4 rounded-full' 
                ></img>
                </div>
                <div className='flex flex-col justify-center '>
                    <p className='text-5xl'>Joe Biden</p>
                    <div className='py-2'><p className=''>@JoeBiden16</p></div>
                    <div className='text-justify p-4'>
                    I am dedicated to upholding democratic values, strengthening international partnerships, and promoting diplomacy to navigate global affairs effectively. By prioritizing empathy, integrity, and unity, I believe we can overcome adversity and build a more just and prosperous world for generations to come.
                    </div>
                </div>
            </div>
            <div className='mt-10'>
             <p className='text-4xl'>Your publishes</p>
          </div>
        </div>
        </div>       
    </div>
  )
}

export default Profile
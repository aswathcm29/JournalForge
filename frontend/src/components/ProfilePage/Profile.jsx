/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ProfileCard=()=>{
    return (
        <>
            <div className='ring-2 h-[20rem] w-[24rem]'></div>
        </>
    )
}

const Profile = () => {
    const [data, setData] = useState([{
        "image":"https://images.template.net/wp-content/uploads/2017/06/Research-Papers.jpg",
        "title":"How to be a good person",  
        "description":"This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024",
        "journalContent":"This is Aswath Cm waiting for his wife living in past at march 16 2022",
        "author":"muruga",
        "userName":"muruga"
    },{
        "image":"https://i.ibb.co/wrWkwNv/pexels-photo-170811.jpg",
        "title":"How to be a good person",  
        "description":"This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024",
        "journalContent":"This is Aswath Cm waiting for his wife living in past at march 16 2022",
        "author":"muruga",
        "userName":"muruga"
    },{
        "image":"https://images.template.net/wp-content/uploads/2017/06/Research-Papers.jpg",
        "title":"How to be a good person",  
        "description":"This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024",
        "journalContent":"This is Aswath Cm waiting for his wife living in past at march 16 2022",
        "author":"muruga",
        "userName":"muruga"
    }]);
  return (
    <div className='w-full '>
        <div className=' flex flex-col gap-x-5 my-5 rounded-xl'>
        <div className='w-[95%] rounded-xl'>
            <div className=' h-[20rem] flex flex-row shadow-xl items-center justify-center '>
                <div className='hidden lg:block rounded-full '>
                <img src={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                  className='h-[15rem] p-4 rounded-[100%]' 
                ></img>
                </div>
                <div className='flex flex-col ml-5'>
                    <p className='text-7xl'>Joe Biden</p>
                    <div className='py-2'><p className='0'>@JoeBiden16</p></div>
                    <button className='bg-green-400 py-2 rounded-lg'>Logout</button>
                </div>
            </div>
            <div className='mt-10'>
            <hr className='h-[0.1rem] mb-[2rem] bg-gray-400'></hr>
             <p className='text-5xl shadow-lg py-4 rounded-xl bg-green-400'>Your Articles</p>
            
             <div className='mt-10 rounded-xl'>
            {data.map((journal, index) => (
                <div key={index} className={`flex ${(index%2 === 0)?'flex-row':'lg:flex-row-reverse'} sm:p-4 m-8 shadow-md text-[#333]`}>
                    <img src={journal.image} alt='journal' className='h-[300px] rounded-lg hidden lg:block'/>
                    <div className='sm:px-6 w-full'>
                        <div className='text-3xl w-full flex justify-start'>
                            <div>{journal.title}</div>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div>@{journal.author}</div>
                            <div>{`Date : 11-11-1111`}</div>
                        </div>
                        <div className='w-auto h-[70%] flex justify-center items-center text-xl text-left'>
                            {journal.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
          </div>
        </div>
        </div>       
    </div>
  )
}
export default Profile
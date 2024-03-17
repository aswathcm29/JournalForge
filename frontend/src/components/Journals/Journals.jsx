/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const Search = () =>{
    return(
        <div className='p-4'>
            <input 
                type='text' 
                placeholder='Search the Journal...'
                className='border-0 border-b-2 border-solid border-b-gray-600 md:min-w-[10rem] w-[50%] h-10 sm:p-2 bg-[#f3f4f5]'
            />
            <button className='h-10 w-20 bg-green-400 m-4 rounded-lg'>Search</button>
        </div>
    )
}

const Journals = () => {

    const [data, setData] = useState([{
        "image":"https://i.ibb.co/wrWkwNv/pexels-photo-170811.jpg",
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
        "image":"https://i.ibb.co/wrWkwNv/pexels-photo-170811.jpg",
        "title":"How to be a good person",  
        "description":"This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024, This is aswath cm at march 16 2024",
        "journalContent":"This is Aswath Cm waiting for his wife living in past at march 16 2022",
        "author":"muruga",
        "userName":"muruga"
    }]);

  return (
    <>
        <div>
            <Search/>
        </div>
        <div>
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
    </>
  )
}

export default Journals
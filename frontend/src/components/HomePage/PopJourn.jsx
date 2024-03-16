/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const JournalCard = (props) => {
    return (
      <div className='py-10'>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-black shadow-md">
          <img src={props.ima} className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-green-400" />
          <div className="p-6">
            <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {props.title}
            </h5>
            <p className="block text-base font-light leading-relaxed text-inherit antialiased">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-green-400 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const PopJourn = () => {
    return (
      <div>
        <section className='p-4 rounded-3xl flex  justify-center'>
          <div className='text-center'>
            <div className=' w-[78rem] h-[40rem] flex justify-center items-center mb-6 rounded-xl py-9 flex-col shadow-xl border-l-4 '>
              <div className='mb-[4rem]'><span className='text-4xl py-2  px-4 bg-green-400 rounded-xl shadow-xl'>Popular Journals</span></div>
              <div className='w-[90%] h-[90%] overflow-x-auto flex gap-x-10 no-scrollbar'>
                <JournalCard title='Interdisciplinary Studies' ima='https://th.bing.com/th/id/OIP.CgCAFeSDIFIQ6YyGbChH5AHaIM?w=925&h=1024&rs=1&pid=ImgDetMain' />
                <JournalCard title='Educational Research' ima='https://i.pinimg.com/originals/aa/26/92/aa269268f3f7c64bccfefba38dc90944.jpg' />
                <JournalCard title='Interdisciplinary Studies' ima='https://th.bing.com/th/id/OIP.CgCAFeSDIFIQ6YyGbChH5AHaIM?w=925&h=1024&rs=1&pid=ImgDetMain' />
                <JournalCard title='Educational Research' ima='https://i.pinimg.com/originals/aa/26/92/aa269268f3f7c64bccfefba38dc90944.jpg' />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default PopJourn
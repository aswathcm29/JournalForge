/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JournalCard = (props) => {
    return (
      <div className='py-6 md:py-10 flex justify-center'>
        <div className="relative flex flex-col rounded-xl bg-white text-black shadow-md w-64 md:w-80 mx-auto">
          <img src={props.ima} className="mx-4 -mt-6 h-32 md:h-40 rounded-xl bg-green-400 shadow-lg" alt={props.title} />
          <div className="p-4 md:p-6">
            <h5 className="text-lg md:text-xl font-semibold text-blue-gray-900 h-20 overflow-hidden">
              {props.title}
            </h5>
          </div>
          <div className="p-4 pt-0 md:p-6 md:pt-0">
            <button className="w-full rounded-lg bg-green-400 py-2 md:py-3 text-white text-sm md:text-xs font-bold uppercase shadow-md">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };

const PopJourn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = getCookieValue('journal_token');
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}journal/getJournals`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setData(response.data.journals);
      console.log(response.data.journals);
    }
    fetchData();
  }, []);

  return (
    <div>
      <section className='p-4 flex justify-center'>
        <div className='text-center w-full lg:w-[78rem] h-auto flex flex-col items-center mb-6 rounded-xl py-6 md:py-9 shadow-xl border-l-4'>
          <div className='mb-8 md:mb-[4rem]'>
            <span className='text-3xl md:text-4xl py-2 px-4 bg-green-400 rounded-xl shadow-xl'>Popular Journals</span>
          </div>
          <div className='w-full md:w-[90%] flex gap-x-4 md:gap-x-10 overflow-x-auto no-scrollbar'>
            {data.map((item, index) => (
              <Link to={`/${item._id}`} key={index}>
                <JournalCard title={item.title} ima={item.image} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopJourn;

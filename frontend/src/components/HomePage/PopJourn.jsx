/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const JournalCard = (props) => {
    return (
      <div className='py-10 '>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-black shadow-md">
          <img src={props.ima} className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-green-400" />
          <div className="p-6">
            <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased h-[5rem] overflow-hidden">
              {props.title}
            </h5>
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

    const [data, setData] = useState([]);
    function getCookieValue(name) {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
          cookie = cookie.trim();
          if (cookie.startsWith(name + '=')) {
              return cookie.substring(name.length + 1);
          }
      }
      return null;
  }
  

    useEffect(()=>{
        const fetchData = async () => {
          const token = getCookieValue('journal_token')
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}journal/getJournals`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
            }
        });
            setData(response.data.journals);
            console.log(response.data.journals);
        }
        fetchData();
    },[])

    return (
      <div>
        <section className='p-4 rounded-3xl flex  justify-center'>
          <div className='text-center'>
            <div className=' w-[78rem] h-[40rem] flex justify-center items-center mb-6 rounded-xl py-9 flex-col shadow-xl border-l-4 '>
              <div className='mb-[4rem]'><span className='text-4xl py-2  px-4 bg-green-400 rounded-xl shadow-xl'>Popular Journals</span></div>
              <div className='w-[90%] h-[90%] overflow-x-auto flex gap-x-10 no-scrollbar'>
                {
                  data.map((item, index) => {
                    return (<Link to={`/${item._id}`} key={index}><JournalCard key={index} title={item.title} ima={item.image} /></Link>)
                  })
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default PopJourn
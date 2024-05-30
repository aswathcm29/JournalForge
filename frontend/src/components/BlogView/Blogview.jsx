import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JournalView = () => {
  const { journalid } = useParams();
  const [blog, setBlogs] = useState({});
  const [date, setDate] = useState('');

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

  useEffect(() => {
    const fetchJournal = async () => {
      const Token = getCookieValue('journal_token');
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}journal/getJournalbyId`, { id: journalid }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        }
      });
      setBlogs(response.data.message);
    };
    fetchJournal();
  }, [journalid]);

  useEffect(() => {
    if (blog.date) {
      setDate(blog.date.split('T')[0]);
    }
  }, [blog.date]);

  return (
    <div className='w-[100%] flex justify-center items-center'>
      <div className='text-[#333] sm:w-[90%] flex flex-col justify-center items-center mb-5 py-10 shadow-xl rounded-md'>
        <div className=' text-5xl sm:text-5xl sm:w-[90%] mt-10 sm:px-5'>
          {blog.blogTitle}
        </div>
        <div className='flex flex-col sm:flex-row sm:w-[90%] sm:pt-10 sm:pb-10 justify-center items-center gap-5'>
          <div className='w-[90%] mt-5 sm:w-[40%] sm:mt-0'>
            <img src={blog.image} className='rounded-md' alt='Journal Cover'/>
          </div>
          <div className='flex flex-col w-[90%] gap-5 sm:w-[60%] py-5'>
            <div className='text-l sm:text-3xl'>{blog.description}</div>
            <div className='flex items-center gap-5 justify-between sm:justify-normal'>
              <div className='flex flex-col items-end w-full'>
                <div className='bg-gray-200 p-[1rem] rounded-md flex flex-col items-start'>
                  <div className='text-[1rem] text-gray-700'>Author : {blog.userName}</div>
                  <div className='text-[1rem] text-gray-700'>Date : {date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[90%] text-left'>
          <div dangerouslySetInnerHTML={{ __html: blog.journalContent }}></div>
        </div>
      </div>
    </div>
  );
};

export default JournalView;

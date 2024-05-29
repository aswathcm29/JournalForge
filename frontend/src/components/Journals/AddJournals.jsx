/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWandMagicSparkles } from "react-icons/fa6";


const AddJournals = () => {
 
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  
  
  const navigator = useNavigate()

  const {id} = useParams();
  const [title , setTitle] = useState('')
  const [description , setDescription] = useState('')
  const [journalContent , setJournalContent] = useState('')
  const [author , setAuthor] = useState('')
  const [image , setImage] = useState("")
  const [data,setData] = useState([])
  const [generated,setGenerated] = useState('')
  const [_id,setId] = useState('')
  const [gen,setGen] =  useState(0);

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
   

   const fetchOldData = async() =>{
    const token = getCookieValue('journal_token')
    console.log(id)
    try{
    const data = await axios.post(`${import.meta.env.VITE_BASE_URL}journal/getJournalbyId`,{
      id:id
    },
    {
     headers:{
       'Authorization' : `Bearer ${token}`,
       'Content-Type' : 'application/json'
      }
    })
  
    setId(_id)
    setTitle(data.data.message.title)
    setAuthor(data.data.message.author)
    setImage(data.data.message.image)
    setDescription(data.data.message.description)
    setJournalContent(data.data.message.journalContent)
  }catch(err){
    console.log(err.message)
  }
  }
  


    useEffect(()=>{
      if(id){
        fetchOldData()
      }
    },[id])
    
    const extractGen = (content) => {
      const cleanedContent = content.replace(/\n/g, '').replace(/\*/g, '');
      const sentences = cleanedContent.split(/[.!?]+/);
      sentences.shift(); 
      sentences.pop();  
      const modifiedContent = sentences.join('. ');
  
      return modifiedContent;
  };
  

  
    const handleGenerate=async()=>{
      setGen(1);
      if(!title){
           return toast.error('Enter Title')
      }
      const token = getCookieValue('journal_token');
      try{
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}journal/generateblog`,{
          data : title
        },
      {
        headers :{
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        }
      })
      const content = extractGen(res.data.message);
      setGenerated(content)
      setGen(1);
      
      }catch(err){
         console.log(err.message)
      }
  }
  

  useEffect(() => {
    if (gen === 1) {
      setJournalContent(generated);
      setGen(0); 
    }
  }, [gen, generated]);
  
 
  const handleSubmit = async() => {
    try{
      const token = getCookieValue('journal_token')

      if(title==''||description==''||journalContent==''||image==''||author==''){
        toast.error('Fill all the details')
        return;
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}journal/add`, {
        id:id,
        title: title,
        description: description,
        journalContent: journalContent,
        image: image,
        author: author
    }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    console.log(response)
    if(response.status === 200){
      navigator('/home')
      setJournalContent('');
    }
    }
    catch(err){
      toast.error("incomplete data")
    }
  }

  return (
    <div className='p-4 '>
      <div className='flex items-center flex-col'>
        <div className='text-4xl border-b-2 border-solid border-[silver] p-4'>Showcase Your Journals</div>
        <div className='w-full sm:w-[70%] flex flex-col items-start gap-4 text-lg m-2'>
          <div>Title : </div>
          <input type='text' className='w-full p-2 border-2 border-gray-300 rounded-lg shadow-md' placeholder='Enter your Title here'
          value={title} onChange={(e) => {setTitle(e.target.value) }} required
          />
        </div>
        <div className='w-full sm:w-[70%] flex flex-col items-start gap-4 text-lg m-2'>
          <div>Description : </div>
          <textarea type='text' className='w-full p-2 border-2 border-gray-300 rounded-lg shadow-md h-30' placeholder='Enter your description here...'
          value={description} onChange={(e) => { setDescription(e.target.value) }} required
          />
        </div>
        <div className='w-full sm:w-[70%] flex flex-col items-start gap-4 text-lg m-2'>
          <div className='flex justify-between w-full items-center'>
          <span>Journal Content : </span>
          <button onClick={()=>(handleGenerate())} className='flex items-center gap-x-[0.5rem] bg-green-400 p-[0.5rem] rounded-md '>
              <span className='text-sm'>Generate using AI</span>
             <FaWandMagicSparkles />
           </button>
          </div>
          <ReactQuill
              modules={modules}
              formats={formats}
              placeholder='Write your Journal Content here...'
              className='w-full p-2 border-2 border-gray-300 bg-white rounded-lg h-30'
              value={journalContent} onChange={(e) => { setJournalContent(e) }}
              required
          />
        </div>
        <div className='flex w-full sm:w-[70%] flex-col sm:flex-row'>
          <div className='w-full sm:w-[50%] flex flex-col items-start gap-4 text-lg m-2'>
            <div>Author : </div>
            <input type='text' className='w-full p-2 border-2 border-gray-300 rounded-lg shadow-md' placeholder='@authorName' required
            value={author} onChange={(e) => { setAuthor(e.target.value) }}
            />
          </div>
          <div className='w-full sm:w-[50%] flex flex-col items-start gap-4 text-lg m-2'>
            <div>Cover image : </div>
            <input type='text' className='w-full p-2 border-2 border-gray-300 rounded-lg shadow-md' placeholder='Enter your image url...' 
              value = {image}
              onChange={(e) => {
              setImage(e.target.value)
            }}
  
            />
          </div>
        </div>
          <button className='bg-green-400 px-3 py-3 rounded-lg mt-7 text-2xl shadow-xl' onClick={()=>{handleSubmit()}}>Add Post</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddJournals
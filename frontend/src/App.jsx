/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import './App.css'
import {Outlet, useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    const token = document.cookie.split('=')[0];
    if(token){
      navigate('/')
    }
    else{
      navigate('/login')
    }
  },[navigate])

  return (
    <>
      <div className=''>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
    </>
  )
}

export default App

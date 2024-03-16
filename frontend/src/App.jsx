import { useEffect } from 'react'
import './App.css'
import {Outlet, useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    const token = document.cookie.split('=')[0];
    if(token !== 'journal_token'){
      navigate('/login')
    }
  },[navigate])

  return (
    <>
      <div className=''>
          <Navbar/>
          <Outlet/>
      </div>
    </>
  )
}

export default App

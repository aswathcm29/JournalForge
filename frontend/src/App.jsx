import { useEffect } from 'react'
import './App.css'
import {Outlet, useNavigate} from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    const token = document.cookie.split('=')[0];
    if(token === 'journal_token'){
      navigate('/login')
    }
  },[navigate])

  return (
    <>
      <div className=''>
          <Outlet/>
      </div>
    </>
  )
}

export default App

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {useNavigate} from 'react-router-dom';
import loginImg from '../../assets/image.png' 
import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm =()=>{
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const toSignup =()=>{
        navigate('/signup')
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}users/login`, {
            userName, password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(response.status === 200){
                document.cookie = `journal_token=${response.data.message.token}`
                console.log('Login Successful')
                navigate('/')
            }
        }
        catch(err){
            toast.error("Wrong username or password")
        }
    }

    return (    
        <div
                  style={{'animation': 'slideInFromLeft 1s ease-out'}}
                  className="w-[100%] flex flex-col justify-center md:w-[50%] bg-gradient-to-r rounded-lb-xl shadow-2xl overflow-hidden p-10 space-y-8 rounded-r-xl">
                <h2
                    style={{'animation': 'appear 2s ease-out'}}
                    className="text-center text-4xl font-extrabold text-gray-900"
                >
                    Login
                </h2>
                <p style={{'animation': 'appear 3s ease-out'}} className="text-center text-gray-900">
                    Sign in to your account
                </p>
                    <form method="POST" action="#" className="space-y-6">
                        <div className="relative">
                        <input
                            placeholder="john@example.com"
                            className="peer h-10 border-solid w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
                            required=""
                            id="email"
                            name="email"
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-400 peer-focus:text-sm"
                            htmlFor="email"
                            >User Name</label
                        >
                        </div>
                        <div className="relative">
                        <input
                            placeholder="Password"
                            className="peer h-10 w-full border-solid border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
                            required=""
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-400 peer-focus:text-sm"
                            htmlFor="password"
                            >Password</label
                        >
                        </div>
                        <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-200">
                       
                        </label>
                        <a className="text-sm text-green-500 hover:underline" href="#"
                            >Forgot your password?</a
                        >
                        </div>
                        <button
                        className="w-full py-2 px-4 bg-green-400 hover:bg-green-500 rounded-md shadow-lg text-white font-semibold transition duration-200"
                        type="submit"
                        onClick={(e)=>handleSubmit(e)}
                        // onClick={(e)=>handleEvents(e)}
                        >
                        Sign In
                        </button>
                    </form>
                        <div className="text-center text-gray-900"> Don't have an account?
                        <button className="text-green-500 px-2 hover:underline" onClick={toSignup}>Sign up</button>
                     </div>
                     <ToastContainer/>
                </div>
    )
}

const Login = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-center rounded-2xl h-[86vh]'>
         <div className='bg-white w-[55rem] h-[35rem] flex rounded-xl'>
             <div className='w-[50%] hidden md:block'>
               <img src={loginImg}></img>  
             </div>
               <LoginForm/>
             </div>
         </div>
    </div>
  )
}
export default Login
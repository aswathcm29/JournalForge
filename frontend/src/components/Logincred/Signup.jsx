/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import loginImg from '../../assets/image.png' 

const SignupForm =()=>{
  const navigate  = useNavigate()
  const toSignup=()=>{
    navigate('/login')
  }
  return (
    <>
        <div
                  style={{'animation': 'slideInFromLeft 1s ease-out'}}
                  className="w-[50%] bg-gradient-to-r rounded-lb-xl shadow-2xl overflow-hidden p-10 space-y-8 rounded-r-xl">
                <h2
                    style={{'animation': 'appear 2s ease-out'}}
                    className="text-center text-4xl font-extrabold text-gray-900"
                >
                    Register
                </h2>
                <p style={{'animation': 'appear 3s ease-out'}} className="text-center text-gray-900">
                    Get started with your account
                </p>
                    <form method="POST" action="#" className="space-y-6">
                        <div className="relative">
                        <input
                            placeholder="Username"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required=""
                            id="name"
                            name="name"
                            type="text"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            htmlFor="text"
                            >Username</label
                        >
                        </div>
                        <div className="relative">
                        <input
                            placeholder="Email"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required=""
                            id="email"
                            name="email"
                            type="email"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            htmlFor="email"
                            >Email</label
                        >
                        </div>
                        <div className="relative">
                        <input
                            placeholder="Password"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required=""
                            id="password"
                            name="password"
                            type="password"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            htmlFor="password"
                            >Password</label
                        >
                        </div>
                        <button
                        className="w-full py-2 px-4 bg-green-400 hover:bg-green-500 rounded-md shadow-lg text-white font-semibold transition duration-200"
                        type="submit"
                        >
                        Register
                        </button>
                    </form>
                        <div className="text-center text-gray-900">Have an account?
                        <button className="text-green-500 px-2 hover:underline" onClick={toSignup}>Login</button>
                     </div>
                </div>
    </>
  )
}

const Signup = () => {
  return (
    <div>
      <div className=''>
      <div className='flex items-center justify-between rounded-2x'>
         <div className='bg-white w-[55rem] h-[35rem] flex rounded-xl'>
             <div className='w-[50%'>
             <img src={loginImg}></img>  
             </div>
               <SignupForm/>
             </div>
         </div>
    </div>
    </div>
  )
}

export default Signup
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'


const LoginForm =()=>{
    return (
        <div
                  style={{'animation': 'slideInFromLeft 1s ease-out'}}
                  className="w-[50%] bg-gradient-to-r from-blue-800 to-purple-600 rounded-lb-xl shadow-2xl overflow-hidden p-10 space-y-8 rounded-r-xl">
                <h2
                    style={{'animation': 'appear 2s ease-out'}}
                    className="text-center text-4xl font-extrabold text-white"
                >
                    Welcome
                </h2>
                <p style={{'animation': 'appear 3s ease-out'}} className="text-center text-gray-200">
                    Sign in to your account
                </p>
                    <form method="POST" action="#" className="space-y-6">
                        <div className="relative">
                        <input
                            placeholder="john@example.com"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required=""
                            id="email"
                            name="email"
                            type="email"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            htmlFor="email"
                            >Email address</label
                        >
                        </div>
                        <div className="relative">
                        <input
                            placeholder="Password"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required=""
                            id="password"
                            name="password"
                            type="password"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            htmlFor="password"
                            >Password</label
                        >
                        </div>
                        <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-200">
                            <input
                            className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                            type="checkbox"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a className="text-sm text-purple-200 hover:underline" href="#"
                            >Forgot your password?</a
                        >
                        </div>
                        <button
                        className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                        type="submit"
                        >
                        Sign In
                        </button>
                    </form>
                        <div className="text-center text-gray-300"> Don't have an account?
                        <a className="text-purple-300 hover:underline" href="#">Sign up</a>
                     </div>
                </div>
    )
}

const Login = () => {
  return (
    <>
      <div className='flex items-center justify-between rounded-2xl'>
         <div className='bg-white w-[55rem] h-[35rem] flex rounded-xl'>
             <div className='w-[50%] bg-black rounded-l-xl'>  
             </div>
               <LoginForm/>
             </div>
         </div>
    </>
  )
}

export default Login
/* eslint-disable no-unused-vars */
import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './components/Logincred/Login.jsx'
import Signup from './components/Logincred/Signup.jsx'
import Home from './components/HomePage/Home.jsx'
import About from './components/HomePage/About.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/home',
      element:<Home/>, 
    },
    {
      path:'/about',
      element:<About/>
    },
  ]
},
  {
    path:'/home',
    element:<App/>
   },
  {
     path:'/login',
     element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
    }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)

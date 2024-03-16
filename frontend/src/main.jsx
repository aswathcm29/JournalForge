/* eslint-disable no-unused-vars */
import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './components/Logincred/Login.jsx'
import Signup from './components/Logincred/Signup.jsx'
import Contactus from './components/Contact-us/Contactus.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
    {
     path:'/home',
     element:<App/>
    },
    {
      path:'/contactus',
      element: <Contactus/>
    }
  ]
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

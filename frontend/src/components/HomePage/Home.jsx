/* eslint-disable no-unused-vars */
import React from 'react'
import Welcome from './Welcome'
import PopJourn from './PopJourn'
import About from './About'

const Home = () => {
  return (
    <div className=''>
      <div className=''>
        <Welcome />
        <About/>
        <PopJourn/>
      </div>
    </div>
  )
}

export default Home
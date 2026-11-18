import React from 'react'
import imageMockups from './assets/image-mockups.png'
import introBackground from './assets/bg-intro-desktop.svg'

const Hero = () => {
  return (
    <div className="flex flex-row max-w-7xl mx-auto pl-12 justify-around">
      <div className='flex w-1/2 flex-col justify-center text-xl'>
        <h1 className="text-5xl font-semibold py-6">Next Generation <br/>
        Digital Banking</h1>
        <p className="py-2 grid w-3/4 text-xl">
          Take your financial life online. 
          Your Digital bank account will be a one-stop-shop for spending,
           saving, budgeting, investing, and much more.
        </p>
        <button className="text-white w-40 px-7 py-4 border-none rounded-full text-sm font-semibold cursor-pointer bg-linear-to-r from-[#31d35c] to-[#2bb7da] hover:opacity-80 transition">
          Request Invite
        </button>
      </div>
      <div
        className='grid w-1/2 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${introBackground})` }}
      >
        <img className='w-full' src={imageMockups} alt="Digital Banking" />
      </div>
    </div>
  )
}

export default Hero

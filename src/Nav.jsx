import React from 'react'
import logo from './assets/logo-dark.svg'
const Nav = () => {
  return (
    <div>
      <div className='flex justify-evenly items-center py-6 bg-mist-100'>
        <img src={logo} alt="Digitalbank logo" className="w-40"/>
        <h3></h3>
        
        <nav className='flex gap-6 text-mist-600'>
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
            <a>Blog</a>
            <a>Careers</a>
        </nav>

        <button className="text-white px-7 py-4 border-none rounded-full text-sm font-semibold cursor-pointer bg-linear-to-r from-[#31d35c] to-[#2bb7da] hover:opacity-80 transition">Request Invite</button>
      </div>
    </div>
  )
}

export default Nav

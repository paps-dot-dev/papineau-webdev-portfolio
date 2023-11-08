import React from 'react'
import { FaHome, FaReact, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BottomNav() {
  return (
    <nav className='lg:hidden sticky z-10 bottom-0 w-screen bg-slate-700 text-2xl'>
      <div className='flex justify-between  items-center mx-16'>
        <Link
          id='projects'
          to={'/projects'}
          className='flex flex-col justify-center items-center hover:bg-opacity-30  cursor-pointer opacity-50 hover:opacity-100 hover:bg-white p-4 rounded-xl ease-linear duration-100'>
          <FaReact />
          <p>Projects</p>
        </Link>
        <Link
          id='home'
          to={'/home'}
          className='flex flex-col justify-center items-center hover:bg-opacity-30  cursor-pointer opacity-50 hover:opacity-100 hover:bg-white p-4 rounded-xl ease-linear duration-100'>
          <FaHome />
          <p>Home</p>
        </Link>
        <Link
          id='contact'
          to={'/contact'}
          className='flex flex-col justify-center items-center hover:bg-opacity-30  cursor-pointer opacity-50 hover:opacity-100 hover:bg-white p-4 rounded-xl ease-linear duration-100'>
          <FaUser />
          <p>Contact</p>
        </Link>
      </div>
    </nav>
  )
}

export default BottomNav

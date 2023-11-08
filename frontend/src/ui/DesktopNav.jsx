import React from 'react'
import { MdMenu } from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaTimes } from 'react-icons/fa'
import SocialLinks from '../ui/SocialLinks'

function DesktopNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='hidden lg:block fixed  right-0 top-[210px] bg-indigo-600 p-4 text-3xl rounded-full mx-4 hover:-translate-y-2 hover:bg-transparent hover:ring-2 hover:ring-indigo-400 duration-200 ease-linear z-10'>
        {isOpen ? <FaTimes /> : <MdMenu />}
      </div>
      {isOpen && (
        <nav className='hidden lg:block w-[300px] bg-indigo-600 lg:fixed right-0 top-[300px] h-[400px] rounded-xl mx-4 z-10'>
          <div className='flex justify-between items-center'>
            <h1 className='p-2 text-2xl font-bold w-1/2'>
              Looking for something?
            </h1>
          </div>

          <div className='flex flex-col justify-center items-end p-2 text-4xl'>
            <Link
              to={'/home'}
              className='my-2 font-extralight hover:font-light hover:bg-gradient-to-r from-white to-purple-300 hover:bg-clip-text hover:text-transparent hover:ring-2 p-2 rounded-xl hover:ring-white ease-in-out duration-200'>
              <p>Home</p>
            </Link>
            <Link
              to={'/projects'}
              className='my-2 font-extralight hover:font-light hover:bg-gradient-to-r from-white to-purple-300 hover:bg-clip-text hover:text-transparent hover:ring-2 p-2 rounded-xl hover:ring-white ease-in-out duration-200'>
              <p>Projects</p>
            </Link>
            <Link
              to={'/contact'}
              className='my-2 font-extralight hover:font-light hover:bg-gradient-to-r from-white to-purple-300 hover:bg-clip-text hover:text-transparent hover:ring-2 p-2 rounded-xl hover:ring-white ease-in-out duration-200'>
              <p>Contact</p>
            </Link>
            <SocialLinks />
          </div>
        </nav>
      )}
    </>
  )
}

export default DesktopNav

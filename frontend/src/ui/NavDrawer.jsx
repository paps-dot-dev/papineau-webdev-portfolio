import React from 'react'
import SocialLinks from './SocialLinks'
import { Link } from 'react-router-dom'
import { MdArrowBack, MdArrowRight, MdClose } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function NavDrawer({ toggleDrawer }) {
  const navigate = useNavigate()
  const handleNav = (e) => {
    let slug = e.target.innerHTML.toLowerCase()
    if (slug === 'home') {
      navigate('/')
      toggleDrawer()
    } else {
      navigate(`/${slug}`)

      toggleDrawer()
    }
  }
  return (
    <nav className='h-screen  bg-indigo-400 bg-opacity-80 border-2 absolute top-0 right-0 overflow-y-auto w-2/3 z-10'>
      <MdArrowBack
        onClick={toggleDrawer}
        className='rotate-180 text-5xl hover:text-white ease-linear duration-100'
      />

      <div className='flex flex-col justify-center items-end h-3/4 text-5xl'>
        <p
          onClick={handleNav}
          className='p-4 hover:text-white hover:border-2 hover:border-white hover:-translate-y-2 ease-linear duration-200 rounded-xl ml-auto'>
          Home
        </p>
        <p
          onClick={handleNav}
          className='p-4 hover:text-white hover:border-2 hover:border-white hover:-translate-y-2 ease-linear duration-200 rounded-xl ml-auto'>
          Projects
        </p>
      </div>
      <SocialLinks />
    </nav>
  )
}

export default NavDrawer

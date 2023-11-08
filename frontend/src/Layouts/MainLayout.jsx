import { useState } from 'react'
import moment from 'moment'
import headshot from '../assets/pictures/headshot.jpeg'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { Link } from 'react-router-dom'
import BottomNav from '../ui/BottomNav'
import DesktopNav from '../ui/DesktopNav'
import SpotifyEmbed from '../ui/SpotifyEmbed'

function MainLayout({ children }) {
  const [isBlur, setIsBlur] = useState(false)
  const handleBlur = () => {
    setIsBlur(!isBlur)
  }

  const today = moment().format('dddd, MMMM Do, YYYY')
  return (
    <div id='layout' className='flex flex-col justify-between min-h-screen'>
      <header className='flex flex-row justify-start md:justify-between items-center mt-16 text-sm p-2'>
        <img src={headshot} className='w-[48px] md:w-[96px] rounded-full' />
        <nav className='hidden lg:flex justify-between items-center w-[300px] font-semibold'>
          <Link
            to={'/home'}
            className='p-2 hover:border-b-2 border-white hover:-translate-y-2 duration-200 ease-linear'>
            Home
          </Link>
          <Link
            to={'/projects'}
            className='p-2 hover:border-b-2 border-white hover:-translate-y-2 duration-200 ease-linear'>
            See My Work
          </Link>
          <Link
            to={'/contact'}
            className='p-2 hover:border-b-2 border-white hover:-translate-y-2 duration-200 ease-linear'>
            Contact
          </Link>
        </nav>
        <div className='flex justify-between md:w-1/3 max-w-[450px] items-center w-full ml-4'>
          <a
            href='http://www.linkedin.com/in/shawn-papineau'
            target='_blank'
            className='flex justify-center items-center hover:bg-indigo-500 w-[104px] p-2 rounded-full bg-transparent hover:text-white ring-2 ring-indigo-500 ease-linear duration-200 hover:-translate-y-2'>
            <SiLinkedin />
            <p className='mx-2'>LinkedIn</p>
          </a>
          <a
            href='http://www.github.com/paps-dot-dev'
            target='_blank'
            className='flex justify-center items-center hover:bg-indigo-500 w-[104px] p-2 rounded-full bg-transparent hover:text-white ring-2 ring-indigo-500 ease-linear duration-200 hover:-translate-y-2'>
            <SiGithub />
            <p className='mx-2'>Github</p>
          </a>
          <a
            href='http://www.instagram.com/paps_audio'
            target='_blank'
            className='flex justify-center items-center hover:bg-indigo-500 w-[104px] p-2 rounded-full bg-transparent hover:text-white ring-2 ring-indigo-500 ease-linear duration-200 hover:-translate-y-2'>
            <SiInstagram />
            <p className='mx-2'>Instagram</p>
          </a>
          <Link
            to={'/contact'}
            className='flex justify-center items-center bg-indigo-500 w-[104px] p-2 rounded-full hover:bg-white hover:text-indigo-500 hover:ring-2 ring-indigo-500 ease-linear duration-200 hover:-translate-y-2'>
            Contact Me
          </Link>
        </div>
      </header>
      <main>{children}</main>

      <BottomNav />
      <DesktopNav />
    </div>
  )
}

export default MainLayout

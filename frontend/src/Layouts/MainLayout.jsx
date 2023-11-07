import { useState } from 'react'
import Navigation from '../ui/Navigation'
import moment from 'moment'
import headshot from '../assets/pictures/headshot.jpeg'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { Link } from 'react-router-dom'
import BottomNav from '../ui/BottomNav'

function MainLayout({ children }) {
  const [isBlur, setIsBlur] = useState(false)
  const handleBlur = () => {
    setIsBlur(!isBlur)
  }

  const today = moment().format('dddd, MMMM Do, YYYY')
  return (
    <div id='layout' className='flex flex-col justify-between'>
      <header className='flex flex-row justify-start mx-2 items-center mt-16 text-sm'>
        <img src={headshot} className='w-[48px] rounded-full' />
        <div className='flex justify-between items-center w-full ml-4'>
          <a
            href='http://www.linkedin.com/in/shawn-papineau'
            target='_blank'
            className='flex justify-center items-center hover:bg-indigo-500 w-[128px] p-2 rounded-full bg-transparent hover:text-white ring-2 ring-indigo-500 ease-linear duration-200 hover:-translate-y-2'>
            <SiLinkedin />
            <p className='mx-2'>LinkedIn</p>
          </a>
          <a
            href='http://www.github.com/paps-dot-dev'
            target='_blank'
            className='flex justify-center items-center hover:bg-indigo-500 w-[128px] p-2 rounded-full bg-transparent hover:text-white ring-2 ring-indigo-500 ease-linear duration-200 hover:-translate-y-2'>
            <SiGithub />
            <p className='mx-2'>Github</p>
          </a>
          <a
            href='http://www.instagram.com/paps_audio'
            target='_blank'
            className='flex justify-center items-center hover:bg-indigo-500 w-[128px] p-2 rounded-full bg-transparent hover:text-white ring-2 ring-indigo-500 ease-linear duration-200 hover:-translate-y-2'>
            <SiInstagram />
            <p className='mx-2'>Instagram</p>
          </a>
          <Link className='flex justify-center items-center bg-indigo-500 w-[128px] p-2 rounded-full hover:bg-white hover:text-indigo-500 hover:ring-2 ring-indigo-500 ease-linear duration-200 hover:-translate-y-2'>
            Contact Me
          </Link>
        </div>
      </header>
      <main className={`mb-auto  ${isBlur && 'blur'}`}>{children}</main>
      <footer>
        {' '}
        <p className='text-xl'>{today}</p>
      </footer>
      <BottomNav />
    </div>
  )
}

export default MainLayout

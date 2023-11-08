import React from 'react'
import { MdEmail, MdSmartphone } from 'react-icons/md'
import { SiLinkedin } from 'react-icons/si'

function ContactForm({ user }) {
  return (
    <div className='bg-white p-8 h-[500px] w-[90vw] lg:w-3/5 text-black flex flex-col justify-center items-center rounded-2xl m-auto'>
      <h1 className='text-4xl lg:text-5xl bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text font-semibold p-2'>
        Hey {user},
      </h1>
      <p className=' w-full lg:w-1/2'>
        Thank you for taking the time out of your day to check out my portfolio.
        If you'd like to get in touch with me, you can do so here.
      </p>
      <div className='flex justify-between items-center w-3/4 lg:w-1/2 p-8'>
        <a
          href='mailto:s_papineau@outlook.com'
          target='email'
          className='text-[4em] hover:-translate-y-2 hover:text-indigo-600 ease-in-out duration-200'>
          <MdEmail />
        </a>
        <a
          href='https://www.linkedin.com/in/shawn-papineau'
          target='_blank'
          className='text-[3em] text-blue-900 hover:-translate-y-2 hover:text-indigo-600 ease-in-out duration-200'>
          <SiLinkedin />
        </a>
        <a
          href='tel:5866015723'
          target='tel'
          className='text-[3.5em] hover:-translate-y-2 hover:text-indigo-600 ease-in-out duration-200'>
          <MdSmartphone />
        </a>
      </div>
    </div>
  )
}

export default ContactForm

import React from 'react'
import { MdMail } from 'react-icons/md'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

function SocialLinks() {
  return (
    <div className='flex justify-between items-center w-3/4 m-auto py-2 text-3xl'>
      <a
        target='_blank'
        href='https://www.github.com/paps-dot-dev'
        className=' hover:ring-2 ring-indigo-400 rounded-full hover:-translate-y-2 duration-200 p-2'>
        <SiGithub />
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/shawn-papineau'
        className=' hover:ring-2 ring-indigo-400 rounded-full hover:-translate-y-2 duration-200 p-2'>
        <SiLinkedin />
      </a>
      <a
        target='_blank'
        href='https://www.instagram.com/paps_audio'
        className=' hover:ring-2 ring-indigo-400 rounded-full hover:-translate-y-2 duration-200 p-2'>
        <SiInstagram />
      </a>
      <a
        target='email'
        href='mailto:s_papineau@outlook.com'
        className=' hover:ring-2 ring-indigo-400 rounded-full hover:-translate-y-2 duration-200 p-2'>
        <MdMail />
      </a>
    </div>
  )
}

export default SocialLinks

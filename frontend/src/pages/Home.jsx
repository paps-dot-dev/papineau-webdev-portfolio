import React from 'react'

import headshot from '../assets/pictures/headshot.jpeg'
import SocialLinks from '../ui/SocialLinks'
import PageIndicator from '../ui/PageIndicator'
import { SiJavascript } from 'react-icons/si'
import { FaLaptop } from 'react-icons/fa'

function Home() {
  return (
    <>
      <PageIndicator title={'Hello.'} />
      <img
        src={headshot}
        className='rounded-full ring-2 ring-indigo-400 w-[128px] m-auto'
      />
      <SocialLinks />

      <div>
        <h1 className='text-[3em] '>Hello!</h1>
        <div className='bg-indigo-400 h-[240px] w-[240px] flex flex-col justify-center items-center rounded-full ml-auto p-8 text-xl font-light bg-opacity-70 mt-8'>
          <SiJavascript className='absolute right-10 mb-40 text-6xl rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-200 text-black' />

          <h2 className='text-left'>
            I am a Javascript Developer and Web Designer.
          </h2>
        </div>
      </div>
    </>
  )
}

export default Home

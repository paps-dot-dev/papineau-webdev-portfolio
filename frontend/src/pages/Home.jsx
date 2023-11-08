import React, { useEffect } from 'react'
import { useState } from 'react'
import gif from '../assets/patrick.gif'
import SpotifyContainer from '../ui/SpotifyContainer'
import TechContainer from '../ui/TechContainer'
import headshot from '../assets/pictures/headshot.jpeg'
import ProjectSwiper from '../ui/ProjectSwiper'

import neature from '../assets/neat.gif'

function Home({ user }) {
  const [modalOpen, setModalOpen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setModalOpen(false)
    }, 4000)
  })
  console.log(modalOpen)
  return modalOpen ? (
    <div className='flex flex-col justify-center items-center m-auto min-h-screen'>
      <img
        className='rounded-xl'
        src={gif}
        alt='gif of patrick star from spongebob'
      />
      <h1 className='text-3xl font-light mt-4'>Hacking the Interweb...</h1>
      <p className='font-extralight'>
        In the meantime, is mayonnaise an instrument?
      </p>
    </div>
  ) : (
    <div>
      <h1 className='text-[4em] lg:text-[5em] font-bold mb-8 mt-4'>
        Hello, {user}!
      </h1>
      <div className='flex flex-row justify-between items-center  lg:mr-auto'>
        <SpotifyContainer user={user} />
        <div className='hidden lg:flex lg:flex-col justify-between items-center text-4xl'>
          <img className='w-[300px] rounded-xl' src={neature} />
          <h2 className='bg-gradient-to-r text-transparent bg-clip-text from-violet-400 to-purple-500 font-semibold px-4'>
            Responsive Design!
          </h2>
          <p className='text-sm font-light'>
            Shrink Your Browser Window to see it in action!
          </p>
        </div>
      </div>
      <h2 className='text-[3em] lg:text-[4em] pt-14 mb-2 text-center font-bold bg-gradient-to-br from-purple-500 to-indigo-400 text-transparent bg-clip-text lg:mt-64'>
        Technologies I Use:
      </h2>
      <TechContainer />
      <div className='mt-32 lg:mt-64 flex justify-start items-center mx-4'>
        <img src={headshot} className='rounded-full w-[144px]' />
        <div className='p-4'>
          <p className='font-light'>More From</p>
          <p className='font-semibold text-3xl'>Shawn Papineau</p>
        </div>
      </div>
      <ProjectSwiper />
    </div>
  )
}

export default Home

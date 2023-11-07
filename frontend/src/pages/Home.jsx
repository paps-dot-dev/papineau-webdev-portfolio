import React, { useEffect } from 'react'
import { useState } from 'react'
import gif from '../assets/patrick.gif'
import SpotifyContainer from '../ui/SpotifyContainer'
import TechContainer from '../ui/TechContainer'
import headshot from '../assets/pictures/headshot.jpeg'
import ProjectSwiper from '../ui/ProjectSwiper'

function Home({ user }) {
  const [modalOpen, setModalOpen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setModalOpen(false)
    }, 4000)
  })
  console.log(modalOpen)
  return modalOpen ? (
    <div className='flex flex-col justify-center h-screen items-center'>
      <img
        className='rounded-xl'
        src={gif}
        alt='gif of patrick star from spongebob'
      />
      <h1 className='text-4xl mt-4'>Hacking the Interweb...</h1>
      <p>In the meantime, is mayonnaise an instrument?</p>
    </div>
  ) : (
    <div>
      <h1 className='text-[5em] font-bold mb-8 mt-4'>Hello, {user}!</h1>
      <SpotifyContainer user={user} />
      <h2 className='text-[3em] pt-14 mb-2 text-center font-bold bg-gradient-to-br from-purple-500 to-indigo-400 text-transparent bg-clip-text'>
        Technologies I Use:
      </h2>
      <TechContainer />
      <div className='mt-32 flex justify-start items-center mx-4'>
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

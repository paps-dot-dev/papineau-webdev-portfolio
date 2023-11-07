import React from 'react'
import SpotifyCard from './SpotifyCard'
import gif from '../assets/patrick.gif'

function SpotifyContainer({ user }) {
  return (
    <div className='grid grid-cols-2 gap-4 p-4 mb-16'>
      <SpotifyCard image={gif} text='My Name is Shawn...' />
      <SpotifyCard image={gif} text='I am a Web Developer .' />
      <SpotifyCard image={gif} text='I like to make cool stuff with code...' />
      <SpotifyCard
        image={gif}
        text={`hey, ${user}, this UI looks familiar...`}
      />
    </div>
  )
}

export default SpotifyContainer

import React from 'react'

function SpotifyCard({ image, text }) {
  return (
    <div className='flex justify-start items-center bg-slate-800 rounded-md hover:bg-indigo-500 hover:bg-opacity-50 duration-200 ease-linear text-sm md:text-md'>
      <img className='w-[104px]' src={image} />
      <p className='font-semibold mx-4'>{text}</p>
    </div>
  )
}

export default SpotifyCard

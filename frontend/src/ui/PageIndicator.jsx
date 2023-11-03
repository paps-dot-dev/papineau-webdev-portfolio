import React from 'react'

function PageIndicator({ title }) {
  return (
    <p className='font-bold  bg-gradient-to-r from-purple-400 to-orange-400 opacity-30 text-[13em] w-full fixed top-[400px] right-0 page-bg -z-10 text-transparent bg-clip-text'>
      {title}
    </p>
  )
}

export default PageIndicator

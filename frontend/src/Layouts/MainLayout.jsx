import { useState } from 'react'
import Navigation from '../ui/Navigation'

function MainLayout({ children }) {
  const [isBlur, setIsBlur] = useState(false)
  const handleBlur = () => {
    setIsBlur(!isBlur)
  }
  return (
    <div id='layout' className='flex flex-col h-screen justify-between'>
      <header className='flex flex-col justify center items-center'>
        <div className='flex justify-between items-center w-full'>
          <div
            className={`border-2 rounded-md bg-gray-300 bg-opacity-75 border-black p-2 mr-auto ${
              isBlur && 'hidden'
            }`}>
            SP
          </div>
          <Navigation handleBlur={handleBlur} />
        </div>
      </header>
      <main className={`mb-auto  ${isBlur && 'blur'}`}>{children}</main>
      <footer className='bg-slate-300'> This is a footer</footer>
    </div>
  )
}

export default MainLayout

import React from 'react'
import headshot from '../assets/pictures/headshot.jpeg'
import { FaUser } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginSlider from '../ui/LoginSlider'

function Login({ handleLogin }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setFormData(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData === '') {
      handleLogin('Anonymous')
    } else {
      handleLogin(formData)
    }

    navigate('/home')
  }

  const handleAnonymous = () => {
    handleLogin('Anonymous')
    navigate('/home')
  }
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <h1 className='absolute top-0 text-[2em] font-light  '>Shawn Papineau</h1>
      <form
        onSubmit={handleSubmit}
        className='dark:bg-white h-1/2 w-4/5 lg:w-1/2 flex flex-col justify-center mt-32 items-center lg:p-10  rounded-2xl mb-16'>
        <img
          src={headshot}
          className=' lg:max-w-1/4 -translate-y-[100px] lg:translate-y-0 lg:top-0 rounded-full w-[256px]'
        />

        <p className='text-[2em] font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text'>
          Welcome to my Portfolio!
        </p>
        <p className='text-md text-center font-medium mx-auto w-full p-2 text-black'>
          Please Enter Your Name for a more Personalized Experience
        </p>
        <div className='text-black flex justify-start items-center text-2xl w-3/4 ring-2 ring-purple-500 rounded-xl p-4 mt-4 '>
          <FaUser />
          <input
            onChange={handleChange}
            value={formData}
            className='focus-within:outline-none font-light mx-2'
          />
        </div>
        <button
          type='submit'
          className='text-white ring-2 rounded-md w-3/4 mt-4 p-4 ring-indigo-600 text-2xl font-light bg-gradient-to-br from-purple-500 to-indigo-600 hover:bg-white hover:text-transparent hover:bg-clip-text  hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200'>
          Enter
        </button>
        <button
          onClick={handleAnonymous}
          className='text-black mt-4 hover:text-blue-500'>
          Forget personalized, show me the code.
        </button>
      </form>
      <LoginSlider />
    </main>
  )
}

export default Login

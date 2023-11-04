import React from 'react'
import { useRef } from 'react'

import headshot from '../assets/pictures/headshot.jpeg'
import SocialLinks from '../ui/SocialLinks'
import PageIndicator from '../ui/PageIndicator'
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAmazonaws,
  SiAngular,
  SiElementor,
  SiFigma,
  SiFirebase,
  SiGooglecloud,
  SiJavascript,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPowerapps,
  SiPython,
  SiReact,
  SiSquarespace,
  SiSupabase,
  SiTailwindcss,
  SiVuedotjs,
  SiWebflow,
  SiWordpress,
} from 'react-icons/si'
import { FaLaptop } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import leaf from '../assets/projects/leaf-login.png'
import noble from '../assets/projects/noble-hauling-home.png'

import 'swiper/css'
import { Link } from 'react-router-dom'
import { MdArrowCircleRight } from 'react-icons/md'

function Home() {
  return (
    <>
      <PageIndicator title={'Hello.'} />
      <img
        src={headshot}
        className='rounded-full ring-2 ring-indigo-400 w-[128px] m-auto'
      />
      <SocialLinks />

      <h1 className='text-[2.5em] font-semibold w-full '>Hello! I'm Shawn!</h1>
      <div className='bg-indigo-400 h-[240px] w-[240px] flex flex-col justify-center items-center rounded-full ml-auto p-8 text-xl font-light bg-opacity-70 mt-8'>
        <SiJavascript className='absolute right-10 mb-40 text-6xl rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-200 text-black' />

        <h2 className='text-left'>
          I am a Javascript Developer and Web Designer.
        </h2>
      </div>
      <Swiper
        className='my-8'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}>
        <SwiperSlide>
          <img
            src={leaf}
            className='w-full  h-fit max-h-[300px] rounded-md drop-shadow-xl'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={noble}
            className='w-full h-[250px] rounded-md drop-shadow-xl'
          />
        </SwiperSlide>
      </Swiper>
      <section className='mt-32'>
        <div className='flex justify-between items-center'>
          <div className='bg-orange-400 h-[120px] w-[120px] rounded-full flex justify-center items-center mr-auto bg-opacity-70'>
            <p className='text-sm font-light'>No Code.</p>
          </div>
          <div className='flex justify-between items-center w-2/3 text-2xl'>
            <SiFigma />
            <SiAdobephotoshop />
            <SiAdobeillustrator />
            <SiAdobeindesign />
            <SiPowerapps />
            <SiWebflow />

            <SiSquarespace />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center w-1/2 text-2xl'>
            <SiWordpress />
            <SiElementor />
            <SiAmazonaws />
            <SiMicrosoftazure />
            <SiGooglecloud />
          </div>
          <div className='bg-indigo-400 h-[144px] w-[144px] rounded-full flex justify-center items-center ml-auto bg-opacity-70'>
            <p className='text-md font-medium'>Low Code.</p>
          </div>
        </div>

        <div className='bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text rounded-full flex justify-center items-center mx-auto mt-16'>
          <p className='text-5xl font-semibold border-b-2 p-4 border-black'>
            Lots of Code.
          </p>
        </div>
        <div className='flex flex-row flex-wrap justify-evenly items-center text-2xl mt-4 m-auto'>
          <SiReact />
          <SiAngular />
          <SiVuedotjs />
          <SiTailwindcss />
          <SiNextdotjs />

          <SiPhp />
          <SiPostgresql />
          <SiMongodb />
          <SiFirebase />
          <SiSupabase />
          <SiPython />
        </div>
        <p className='text-justify bg-slate-500 p-8 w-11/12 m-auto text-white italic my-16'>
          I consider myself a jack-of-all-trades when it comes to tech. I know
          Front End, Back End, Databases, and Design. Envisioning the end-user
          is how I approach every project, as User Experience is a crucial
          component of what I do. As author Steve Krug titled his book, "Don't
          Make Me Think!"
        </p>
        <p>
          Check out some of my projects below to see some awesome solutions with
          immersive and user-friendly experiences.
        </p>
        <button className='p-4 mb-8 bg-indigo-400 w-3/4 rounded-full mt-4 hover:bg-purple-700 hover:text-white hover:-translate-y-2 duration-200 ease-linear'>
          <Link to={'/projects'} className='flex items-center justify-center'>
            <p>Take Me to the Nerd Stuff!</p>
            <MdArrowCircleRight className='mx-2' />
          </Link>
        </button>
      </section>
    </>
  )
}

export default Home

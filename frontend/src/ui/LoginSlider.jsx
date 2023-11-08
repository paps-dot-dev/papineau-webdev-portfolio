import React from 'react'
import { useState, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import {
  SiAmazonaws,
  SiAstro,
  SiCss3,
  SiGoogle,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
} from 'react-icons/si'

function LoginSlider() {
  return (
    <div className=' w-full text-white lg:w-1/2'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        slidesPerView={'4'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}>
        <SwiperSlide>
          <SiReact className='bg-gradient-to-r from-indigo-700 to-indigo-500 text-white w-full h-full rounded-xl ' />
        </SwiperSlide>
        <SwiperSlide>
          <SiNextdotjs className='bg-gradient-to-r from-indigo-700 to-indigo-500 text-white w-full h-full rounded-xl ' />
        </SwiperSlide>
        <SwiperSlide>
          <SiJavascript className='bg-gradient-to-r from-indigo-700 to-indigo-500 text-white w-full h-full rounded-xl ' />
        </SwiperSlide>
        <SwiperSlide>
          <SiGooglecloud className='bg-gradient-to-r from-indigo-700 to-indigo-500 text-white w-full h-full rounded-xl ' />
        </SwiperSlide>
        <SwiperSlide>
          <SiAmazonaws className='bg-gradient-to-r from-indigo-700 to-indigo-500 text-white w-full h-full rounded-xl ' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default LoginSlider

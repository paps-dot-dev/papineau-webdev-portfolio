import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import ProjectSlide from './ProjectSlide'
import projects from '../projects'
import 'swiper/css'

function ProjectSwiper() {
  return (
    <div className='py-8'>
      <Swiper
        spaceBetween={10}
        slidesPerView={2.1}
        freeMode={true}
        modules={FreeMode}>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectSlide project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProjectSwiper

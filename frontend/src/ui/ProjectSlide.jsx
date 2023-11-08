import React from 'react'

function ProjectSlide({ project }) {
  const tech = project.tech
  return (
    <div>
      <div
        //bg-[url(${project.image})]
        className={`h-[220px] w-[220px] lg:w-[600px] lg:h-[600px] bg-white bg-opacity-25  bg-cover flex flex-col justify-end px-1 rounded-lg`}>
        <p className=' text-3xl lg:text-[3em] font-bold py-1 lg:py-8 lg:px-2'>
          {project.name}
        </p>
      </div>
      <ul className='flex flex-wrap justify-start items-center'>
        {tech.map((item) => {
          return <li className='p-1 text-xs lg:text-lg'>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ProjectSlide

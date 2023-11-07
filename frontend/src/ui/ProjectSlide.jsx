import React from 'react'

function ProjectSlide({ project }) {
  const tech = project.tech
  return (
    <div>
      <div
      //bg-[url(${project.image})]
        className={`h-[300px] w-[300px] bg-white bg-opacity-25  bg-cover flex flex-col justify-end px-1 rounded-lg`}>
        <p className=' text-3xl font-bold py-1'>{project.name}</p>
      </div>
      <ul className='flex flex-wrap justify-start items-center'>
        {tech.map((item) => {
          return <li className='p-1 text-xs'>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ProjectSlide

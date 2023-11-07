import React from 'react'

function ProjectSlide({ project }) {
  const tech = project.tech
  return (
    <div>
      <div
        className={`h-[300px] w-[300px] bg-[url(${project.image})] bg-cover flex flex-col justify-end`}>
        <p className=' text-3xl font-bold py-1'>{project.name}</p>
      </div>
      <ul className='flex justify-start items-center'>
        {tech.map((item) => {
          return <li className='p-1 text-xs'>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ProjectSlide

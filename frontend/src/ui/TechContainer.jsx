import React from 'react'
import {
  SiAmazonaws,
  SiAstro,
  SiFirebase,
  SiGooglecloud,
  SiJavascript,
  SiMicrosoftazure,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si'

function TechContainer() {
  return (
    <ul className='grid grid-cols-4 gap-4 w-3/4 m-auto bg-slate-700 text-5xl p-8 rounded-xl'>
      <li className='flex justify-center'>
        <SiJavascript />
      </li>
      <li className='flex justify-center'>
        <SiReact />
      </li>
      <li className='flex justify-center'>
        <SiNextdotjs />
      </li>
      <li className='flex justify-center'>
        <SiAstro />
      </li>
      <li className='flex justify-center'>
        <SiMicrosoftazure />
      </li>
      <li className='flex justify-center'>
        <SiAmazonaws />
      </li>
      <li className='flex justify-center'>
        <SiGooglecloud />
      </li>
      <li className='flex justify-center'>
        <SiFirebase />
      </li>
      <li className='flex justify-center'>
        <SiMongodb />
      </li>
      <li className='flex justify-center'>
        <SiSupabase />
      </li>
      <li className='flex justify-center'>
        <SiPostgresql />
      </li>
      <li className='flex justify-center'>
        <SiTailwindcss />
      </li>
    </ul>
  )
}

export default TechContainer

import React from 'react'
import ContactForm from '../ui/ContactForm'

function Contact({ user }) {
  return (
    <div className='min-h-screen flex flex-col justify-start'>
      <h1 className=' text-[4em] lg:text-[5em] py-8 font-bold'>
        Let's Get In Touch
      </h1>
      <ContactForm user={user} />
    </div>
  )
}

export default Contact

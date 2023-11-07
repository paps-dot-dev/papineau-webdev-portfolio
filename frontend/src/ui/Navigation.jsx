import { useState } from 'react'
import React from 'react'
import {} from 'react-icons/si'
import { MdMenuOpen } from 'react-icons/md'
import NavDrawer from './NavDrawer'

function Navigation({ handleBlur }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
    handleBlur()
  }
  return (
    <>
      {isOpen ? (
        <NavDrawer toggleDrawer={toggleDrawer} />
      ) : (
        <MdMenuOpen
          onClick={toggleDrawer}
          className=' lg:hidden text-[2.5em] ml-auto mr-4 mt-10 right-10 top-10 '
        />
      )}
    </>
  )
}

export default Navigation

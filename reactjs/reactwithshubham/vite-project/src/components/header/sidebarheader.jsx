import React from 'react'
import { Link } from 'react-router-dom'

const Sidebarheader = () => {
  return (
    <div className='bg-gray-200 px-10 py-5'>
      <nav className='flex flex-col gap-5'>
        <Link to="/">Dashbord</Link>
        <Link to="/product">product</Link>
        <Link to="/addcord">addcord</Link>
        <Link to="/contract">contract</Link>
      </nav>
    </div>
  )
}

export default Sidebarheader

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='h-14 w-full flex items-center justify-between bg-gray-600 px-5'>
        <div className='text-yellow-500'>
            logo
        </div>
        <div className='flex items-center justify-center gap-5'>
            <Link className='text-white' to="/">Home</Link>
            <Link className='text-white' to="/Projects">project</Link>
            <Link className='text-white' to="/About">about</Link>
            <Link className='text-white' to="/Profile">profile</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header

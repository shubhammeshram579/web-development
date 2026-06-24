import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='px-5 py-2 bg-gray-200'>
      <nav className='flex items-center justify-between gap-5'>
        <div className='bg-yellow-400 text-lg font-semibold uppercase rounded-full px-2 '>logo</div>
        <div className=' flex items-center justify-around gap-4 font-semibold text-yellow-700 '>
            <Link to="/">logout</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header

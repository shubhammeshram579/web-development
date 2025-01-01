import React from 'react'
import "../App.css"


function Header() {
  return (
    <header className='w-full h-20'>
        <nav className='flex items-center justify-between bg-zinc-800 px-5 py-5'>
            <div className="logo">
                <a href="#" className='logo text-yellow-300 font-semibold text-2xl hover:'>shubhcode.co</a>
            </div>
            <div className="navItems px-10">
                <ul className="no-underline flex items-center justify-between gap-4">
                    <li className='text-white text-xl capitalize font-normal hover:text-black hover:bg-yellow-200 px-2 py-1 rounded-lg'>home</li>
                    <li className='text-white text-xl capitalize font-normal  hover:text-black hover:bg-yellow-200 px-2 py-1 rounded-lg'>about</li>
                    <li className='text-white text-xl capitalize font-normal  hover:text-black hover:bg-yellow-200 px-2 py-1 rounded-lg'>project</li>
                    <li className='text-white text-xl capitalize font-normal  hover:text-black hover:bg-yellow-200 px-2 py-1 rounded-lg'>contract</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header
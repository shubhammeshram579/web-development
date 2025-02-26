import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
    <nav className='flex items-center justify-between px-20 py-5 bg-indigo-300'>
        <div className="logo">
            <Link className='text-2xl' to="/">shubhcode.</Link>
        </div>
        <div className="navitems flex items-center justify-between gap-[20px]">
            <Link className='text-xl hover:text-green-600 hover:underline' to="/">home</Link>
            <Link className='text-xl hover:text-green-600 hover:underline' to="/ProductList">Product</Link>
            <Link className='text-xl hover:text-green-600' to="/profile">profile</Link>
            <Link className='text-xl hover:text-green-600' to="/about">about</Link>
            <Link className='text-xl hover:text-green-600' to="/contract">contract</Link>
        </div>
    </nav>
    </>
  )
}

export default Header

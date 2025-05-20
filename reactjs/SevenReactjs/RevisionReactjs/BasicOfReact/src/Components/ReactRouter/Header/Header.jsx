import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-20 w-full bg-gray-700  py-5 px-20'>
      <nav className='flex items-center justify-between'>
        <div>
            <Link to="/">Logo</Link>
        </div>
        <div className="navItams flex items-center justify-center gap-4">
            <Link to="/classPage">ClassComp</Link>
            <Link to="/allprops">AllProps</Link>
            <Link to="/allEventHan">AllEvent</Link>
            <Link to="/conditionalR">ConditionalPage</Link>
            <Link to="/ContextData">ContexApi</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header

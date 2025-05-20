import React, { useState } from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  const [ishow,setIsShow] = useState(false)

  const HandelShow = () => {
    setIsShow((ishow) => !ishow)

  }
  return (
    <>
    <div>
        <nav className='flex items-center justify-between px-20 h-24 bg-black fixed w-full top-0'>
            <div className='text-blue-300 text-2xl'>
                TravelGo
            </div>
            <div className='flex items-center justify-center gap-4'>
                <Link to="#">INR</Link>
                <Link to="#">Support</Link>
                <Link to="#">My Trips</Link>
                <button onClick={HandelShow}>userName </button>
            </div>
        </nav>
        {ishow && (<div className=' float-end'>
          <div className='flex items-center justify-center flex-col bg-black px-4 py-2 gap-2 mr-10 mt-24'>
                <Link to="#">Dashbord</Link>
                <Link to="#">Hotel Booking</Link>
                <Link to="#">Flight Booking</Link>
                <Link to="#">Contract Us</Link>
                <Link to="#">RegisterUser</Link>
                {/* <Link to="/register">RegisterUser</Link> */}
                <Link to="/">LogIn</Link>
                </div>
          </div>)}
    </div>
    </>
  )
}

export default Header;

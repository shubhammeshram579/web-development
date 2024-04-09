import React from 'react'
import Header from './componate/header/Header'
import Footer from './componate/footer/Footer'

// Outlet it give the facility to header and footer miadle page creation 
import {Outlet} from 'react-router-dom' 



// create header and footer pages 
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
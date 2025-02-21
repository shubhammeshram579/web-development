import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Home from "./Pages/Home.jsx"
import Profile from "./Pages/Profile.jsx"
import Contract from "./Pages/Contract.jsx"
import About from "./Pages/About.jsx"



const RoutingReact = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contract' element={<Contract />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  )
}

export default RoutingReact;

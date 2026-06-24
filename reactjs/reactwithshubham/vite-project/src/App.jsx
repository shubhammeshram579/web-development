import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import Header from "../src/components/header/header.jsx"
import Home from "../src/components/pages/home.jsx"
import Products  from "../src/components/pages/products.jsx"
import Mainheader from './components/header/mainheader.jsx'
import Footer from './components/footer/footer.jsx'


function App() {
  

  return (
    <>
     <div>
      <BrowserRouter>
      <Routes>
        <Route element={  <Mainheader />}>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/addcord' element={<Home />} />
        <Route path='/contract' element={<Home />} />
        </Route>
        
      </Routes>

      <Footer /> 
      

      </BrowserRouter>
    
     </div>
    </>
  )
}

export default App

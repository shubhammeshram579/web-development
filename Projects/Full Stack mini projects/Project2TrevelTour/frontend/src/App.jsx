import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./Components/Header/Header.jsx"

import RegisterUser from "./Components/Users/RegisterUser.jsx"
import LoginUser from "./Components/Users/LoginUser.jsx"

function App() {
 

  return (
    <>
     <div >
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/' element={<LoginUser />} />
      </Routes>
      </BrowserRouter>
     
     </div>
    </>
  )
}

export default App

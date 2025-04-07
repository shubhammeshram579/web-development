import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AllComp from "./Components/AllComp.jsx"

function App() {
  

  return (
    <>
      <div>
        <h1 className='text-5xl'>React Machine Coding Projects</h1>
        <div className='pt-20'>
        <AllComp />
        </div>
      </div>
    </>
  )
}

export default App

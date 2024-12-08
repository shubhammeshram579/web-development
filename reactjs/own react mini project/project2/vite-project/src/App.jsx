import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from "./Containers/Home.jsx"
import Header from "./Containers/Header/Header.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full'>
    <Header />
    <Home />
    </div>
    </>
  )
}

export default App

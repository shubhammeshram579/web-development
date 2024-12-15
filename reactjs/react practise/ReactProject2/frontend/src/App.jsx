import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header ,Home } from './Componates/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-full'>
    <Header />
    <Home />
    </div>
    </>
  )
}

export default App

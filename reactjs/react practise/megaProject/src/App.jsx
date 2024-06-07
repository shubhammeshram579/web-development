import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./componates/Header/Header.jsx"
import Footer from './componates/Footer/Footer.jsx'
import Singin from './componates/Singin.jsx'
import Login from './componates/Login.jsx'
// import {Footer} from "./componates/Footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header />
    <main className='flex items-center justify-center flex-col'>
    <Singin />
    <Login />
    </main>
    <Footer />
    </>
  )
}

export default App

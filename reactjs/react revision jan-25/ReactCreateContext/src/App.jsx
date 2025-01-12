import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Components/Contex/UserContextProvider.jsx'
import Login from "./Components/User/Login.jsx"
import Profile from "./Components/User/Profile.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1 className='text-white'>Contex in react</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App

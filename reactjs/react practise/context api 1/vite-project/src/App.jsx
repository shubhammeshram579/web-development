import { Profiler, useState } from 'react'
import UserContextProvider from "../src/contex/Usecontex.jsx"
import Login from "../src/componates/Login.jsx"
import Profile from "../src/componates/Profile.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1 className='font-normal text-3xl text-yellow-200'>Context api login page</h1>
    <Login />
    {/* <Profile /> */}
    </UserContextProvider>
  )
}

export default App

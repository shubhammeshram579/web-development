import { useState } from 'react'
import './App.css'

import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'
import ImageUpload from './components/ImageUpload.jsx'

function App() {


  return (
    <>
     <div>
            <h1>Authentication and Image Upload</h1>
            <Register />
            <Login />
            <Logout />
            <ImageUpload />
        </div>
    </>
  )
}

export default App

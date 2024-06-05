import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Login from "../src/componates/Login.jsx"
import Profile from "../src/componates/Profile.jsx"
import UserContextProvider from "../src/contex/Usecontex.jsx"

import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App />} />
    <Route path='profile' element={<Profile />} />
    </>
      

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
     < RouterProvider router={router} />
     </UserContextProvider>
)

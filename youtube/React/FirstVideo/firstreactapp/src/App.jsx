
/*
import HomePage from "./Components/Home"
import Props1 from "./Components/WhatProps/Props1"
import FunctionComp from "./Components/whatIsComp/FunctionComp"
import ClassbaseComp from "./Components/whatIsComp/ClassBaseComp"
import Employee from './Components/StateManagement/Employee'
import Students from './Components/StateManagement/Students'
import Students2 from './Components/StateManagement/MultipleStdStoreArray'


function App() {

  let propssecond = {
    name:"shubham",
    age:12
  }


  let arrayValues = [
    {
      name:"shubham",
      age:12
    },
    {
      name:"labham",
      age:22
    }

  ]

  return (
    <>
    <div>
      <h1>this is first video about reactjs</h1>
    </div>
    <HomePage />
    <Props1 mouse="dell" secondProps={propssecond} data={arrayValues}/>
    </>
  )
}




function App() {
  return (
    <>
    <div>
      <FunctionComp />
      <ClassbaseComp />
      <Employee />
      <Students />
      <Students2 />
   
    </div>
    </>
  )
}
*/

import React,{ useState ,Suspense} from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Header from "./Components2/Header/Header"
import Home from "./Components2/Pages/Home"
import Profile from './Components2/Pages/Profile'
import About from './Components2/Pages/About'
import Projects from './Components2/Pages/Projects'
import UsedContexProvider from "./Components2/ContexApi/usedContexProvider"
import Addcard from "./Components2/Pages/Addcard"
import AdditionalTopic from "./Components3/AdditionalTopic"
import AllErrorHendling from './Components4/AllErrorHendling'
import ErrorBoundary from './Components4/ErrorBoundary'
import FormValidation from './Components5/FormValidation'

// const AllErrorHendling = React.lazy(() => import('./Components4/AllErrorHendling'));


function App() {

const currentuser = "fff";

const statudes = {
  name: "shubham",
  age:23
}

const statudes2 = true


  return (
    <>
    <div>
      <ErrorBoundary>
      {/* <Suspense fallback={<div>Loading page...</div>}> */}
      <UsedContexProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/About' element={<About />} />
        <Route path='/Profile' element={<Profile user={statudes2} />} />
        <Route path='/Addcard' element={<Addcard  />} />
        <Route path='/AdditionalTopic' element={<AdditionalTopic  />} />
        <Route path='/AllErrorHendling' element={<AllErrorHendling  />} />
        <Route path='/FormValidation' element={<FormValidation  />} />
      </Routes>
      </BrowserRouter>
      </UsedContexProvider>
      {/* </Suspense> */}
      </ErrorBoundary>
    </div>
    </>
  )
}

export default App

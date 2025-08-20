import { useState } from 'react'
import './App.css'
import HomePage from "./Components/Home"
import Props1 from "./Components/WhatProps/Props1"

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
    {/* <HomePage /> */}
    <Props1 mouse="dell" secondProps={propssecond} data={arrayValues}/>
    </>
  )
}

export default App

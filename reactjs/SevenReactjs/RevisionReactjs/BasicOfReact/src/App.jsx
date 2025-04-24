import { useState } from 'react'
import './App.css'
import FunctionComp from "./Components/FunctionComp/FunctionComp.jsx"
import ClassComp from "./Components/FunctionComp/ClassComp.jsx"
import AllProps from "./Components/PropsCom/AllProps.jsx"
import AllEvent from "./Components/EventHandeling/AllEvent.jsx"

function App() {

  return (
    <>
     <div>
      <h1>Basic of React.js</h1>
      {/* <FunctionComp />
      <ClassComp />
      <AllProps /> */}
      <AllEvent />
     </div>
    </>
  )
}

export default App

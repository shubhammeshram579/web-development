import { useState } from 'react'
import './App.css'

// what is componant ?
//how many type of componate in react
import ClassCom from "./Components/Componet1/ClassCom.jsx"
import FunctionCom from "./Components/Componet1/FunctionCom.jsx"

// what is props in react?
import AllProps from "./Components/PropsCom2/AllProps.jsx"


function App() {

  return (
    <>
   <ClassCom />
   <FunctionCom />

   <AllProps />
    </>
  )
}

export default App

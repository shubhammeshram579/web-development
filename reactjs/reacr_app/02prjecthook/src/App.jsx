import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter, setCounter]= useState(10)
  // let counter = 10

 const addValue = ()=>{
  counter = counter  + 1
  setCounter(counter)
  console.log(counter)
 }


 const delValue = ()=>{
  counter = counter  - 1
  setCounter(counter)
  console.log(counter)
 }




  return (
    <>
    <h1>Shubham</h1>
    <h2>Couter values: {counter}</h2>

    <button
    onClick={addValue}>add value</button>
    <br />
    <button onClick={delValue}>remove value</button>
    </>
  )
}

export default App

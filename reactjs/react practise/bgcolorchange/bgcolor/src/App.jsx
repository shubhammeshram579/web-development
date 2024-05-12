import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgcolor, SetBgcolor] = useState("rose")
  



  return (
    <>
    <h1>Baground color change</h1>
    <div className="card min-h-screen w-full bg-orange-300" style={{backgroundColor:bgcolor}}>
      <div className="card2 h-full w-full mt-[60%]  bg-lime-500 flex gap-4 items-center justify-center p-5 rounded-lg">
        <button onClick={()=> SetBgcolor("red")}
         className='bg-red-500 rounded-lg py-2 px-10'>red</button>
        <button onClick={()=> SetBgcolor("green")}
         className='bg-green-500 rounded-lg py-2 px-10'>green</button>
        <button onClick={()=> SetBgcolor("blue")}
        className='bg-blue-500 rounded-lg py-2 px-10'>blue</button>

      </div>

    </div>
    </>
  )
}

export default App

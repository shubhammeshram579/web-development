import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (

    // mainpage
    // card 
    // card2
    // then button
   <div className='s-full h-lvh duration-200'
   style={{backgroundColor: color}}>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white py-3 px-10 rounded-3xl '>

        <button
        onClick={()=>setColor("red")}
         className='outline-none px-4 py-1 rounded-full text-yellow-400 shadow-lg'
         style={{backgroundColor:"red"}}>red
        </button>

        <button  onClick={()=>setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-yellow-400 shadow-lg'
         style={{backgroundColor:"green"}}>green
        </button>

        <button  onClick={()=>setColor("gray")}
         className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
         style={{backgroundColor:"gray"}}>gray
        </button>

      </div>

    </div>

   </div>
  )
}

export default App

import { useState, useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // varibles
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")


  // useref hook
  const passwordRef = useRef(null)

  // useCallback funtionality for password number and charactor genration 
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_+=}{[]:;<>,.?/|~`"

    for (let i = 0; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])


  //useref hook for text selector like copy to select eeffect
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])



  // same used for passwordGenerator like useCallback
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  

  return (
  <>

<div className='w-full h-full max-w-md mx-auto shadow-md rounded-lg 
 my-8 text-orange-400 bg-gray-700 '>

  <h1 className='text-center p-2 text-white' >Password genrater</h1>

  <div className='flex shadow rounded-lg overflow-hidden mb-4'>

    <input type="text"
     value={password} 
     className='outline w-full py-1 px-3' 
     placeholder='password' readOnly ref={passwordRef} />


    <button onClick={copyPasswordToClipboard}
    className='online-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
  </div>


  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLenght(e.target.value)}}/>
      <label> length: {length}</label>
    </div>

    

    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={numberAllowed}  id='numberInput'
      onChange={()=>{
        setNumberAllowed((prev)=> !prev)
      }}/>
      <label htmlFor="numberInput">Numbers</label>
    </div>


    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={charAllowed}  id='characterInput'
      onChange={()=>{
        setCharAllowed((prev)=> !prev)
      }}/>
      <label htmlFor="characterInput">Character</label>
    </div>

  </div>

 </div>
  </>
  )
}

export default App

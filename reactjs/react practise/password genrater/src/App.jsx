import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  //defind varibles
  const [length ,setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed ] = useState(false);
  const [password, setPassword] = useState("");


  // usref hook for selection password
  const passwordRef = useRef(null)


  // password genrater funcality build
  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_+=}{[]:;<>,.?/|~`"

    for (let i = 0 ; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])


  // password copy function creation by useref 
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])


  // another funcality for passwords genration
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])



  return (
    <>

    {/* navbar */}
     <nav className='flex items-center justify-between text-white font-bold'>
      <h1>Shubhcode</h1>
      <h1>Sign in</h1>
      </nav>


      {/* page1 */}
     <div className="card">
      <h1 className='text-white text-lg p-10'>Create strong passwords with Password Generator</h1>


      {/* password genrater input and butten */}
        <div className="card2 bg-blue-700 p-10 flex items-center gap-2 justify-center">
          <input className='w-[80%] p-3 rounded-lg text-black font-medium' type="text" value={password} placeholder='password' readOnly ref={passwordRef} /> 

          <button onClick={copyPasswordToClipboard}
          className='bg-yellow-500 p-3 rounded-lg text-black font-bold'>Copy Password</button>
        </div>



        <div className="card3 bg-white">
          <h1 className='text-black font-medium p-10'>Use the slider, and select from the options, below, to lengthen your password and strengthen your security.</h1>


          {/* password selection range defind */}
          <div className="card5 flex justify-center flex-col items-center">
          <label htmlFor='#' className='text-black '>Password Length: {length}</label>
          <input className='w-[80%] p-5 cursor-pointer' type="range" min={6} max={100} value={length}
           onChange={(e)=>{setLenght(e.target.value)}} />
          </div>




          {/* numberAllowed checkbox defind  */}
          <div className="card4 p-10 flex gap-3 items-center justify-center">
          <label className='text-black px-5 py-2 bg-yellow-600 rounded-lg' htmlFor="numberInput">
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=> !prev)}}
            />Numbers</label>


            {/* charAllowed checkbox defind */}
          <label className='text-black px-5 py-2 bg-yellow-600 rounded-lg'  htmlFor="characterInput">
          <input type="checkbox" defaultChecked={charAllowed} id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=> !prev)
          }}/>Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

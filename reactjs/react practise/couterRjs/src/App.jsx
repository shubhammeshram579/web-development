import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [countadd, setcountadd] = useState(10)


  const addvalue = (()=>{
    if(countadd < 20){
      countadd = countadd + 1
      setcountadd(countadd)

    }
    

  });

  const lessvalue = (()=>{
    if(countadd > 0){
      countadd = countadd - 1
    setcountadd(countadd)

    }

  });


  return (
    <>
      <div className="card flex items-center justify-center flex-col">
        <h1 className='text-green-500 text-2xl'>my firt react project</h1>
        <h2>couts value: {countadd} </h2>

        <button onClick={addvalue}>addcount</button>
        <button onClick={lessvalue}>lesscount</button>

      </div>
    </>
  )
}

export default App

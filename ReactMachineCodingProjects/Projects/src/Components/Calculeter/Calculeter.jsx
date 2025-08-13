import React, { useState } from 'react'

const Calculeter = () => {
    const [inputV,setInputV] = useState("")
    const [num,setNum] = useState("")

    const calculatorKeys = [
  "C", "DEL", "/", 
  "7", "8", "9", "*", 
  "4", "5", "6", "-", 
  "1", "2", "3", "+", 
  "0", ".", "="
];

const handelSeclec = (item) => {
    setNum(item)

}

// console.log("inputV",inputV)


  return (
    <div className='flex items-center justify-center flex-col gap-6'>
        <h1>calculater</h1>
      <form >
        <input type="text" className='mb-2' value={inputV} onChange={(e) => setInputV(e.target.value)} />
        <div className='bg-gray-500 grid grid-cols-3 w-52 px-2 py-2 rounded-lg'>
            {calculatorKeys.map((item,index)  => (
                <div key={index} className='flex items-center justify-center gap-4'>
                    <button onClick={() => handelSeclec(item)} className='mt-2 bg-red-400 px-5 py-2 rounded-lg' >{item}</button>
                </div>
            ))}  
        </div>
     
      </form>
    </div>
  )
}

export default Calculeter

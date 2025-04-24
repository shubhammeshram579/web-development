import React, { useState } from 'react'

const BgColor = () => {
    const [color ,setColor] = useState("gray")

    
  return (
    <div>
      <div className=' w-full h-40 flex items-center justify-center gap-7 flex-col' style={{backgroundColor:color}}>
        <h1>Background color chang</h1>
        <div className='flex items-center justify-center gap-2'>
            <button onClick={() => setColor("red")} className='bg-red-500 px-4 py-2 rounded-lg'>red</button>
            <button onClick={() => setColor("green")} className='bg-green-500 px-4 py-2 rounded-lg'>green</button>
        </div>
      </div>
    </div>
  )
}

export default BgColor

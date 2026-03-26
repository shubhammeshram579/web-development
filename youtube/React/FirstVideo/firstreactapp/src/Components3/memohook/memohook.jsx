import React, { useState } from 'react'
import Memohookchild from "./memohookchild"

const Memohook = () => {
    const [count,setCount] = useState(0)


    const handelCount = () => {

        setCount(count+1)

    }


  return (
    <div>
        <p>count:{count}</p>
        <Memohookchild />

      <button onClick={handelCount} className='bg-yellow-500 p-2 rounded-lg'>increse</button>
    </div>
  )
}

export default Memohook

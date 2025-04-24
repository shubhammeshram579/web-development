import React, { useState } from 'react'

const Counter = () => {
    const [count ,setCount] = useState(0)

    const Handelincre = () => {
        if(count >= 20){
            return 20;
        }
        setCount(count + 1)
    }

    const HandelDcrese = () => {
        if(count <= 0){
            return 0;
        }
        setCount(count - 1)
    }


  return (
    <div className='bg-gray-600 mt-5'>
      <div>
        <p>count : {count}</p>
        <div className='flex items-center justify-center gap-4'>
            <button onClick={Handelincre} className='bg-green-500 px-5 rounded-lg'>increse</button>
            <button onClick={HandelDcrese} className='bg-red-500 px-5 rounded-lg'>decrese</button>
        </div>
      </div>
    </div>
  )
}

export default Counter

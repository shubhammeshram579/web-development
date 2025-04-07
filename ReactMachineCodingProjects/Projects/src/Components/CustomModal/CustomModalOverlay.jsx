import React, { useState } from 'react'

const CustomModalOverlay = () => {
    const [isSow ,setSow] = useState(false)
    const [isSow2 ,setSow2] = useState(false)

    const handelBtn = () => {
        setSow(true)
    }
    const handelBtn2 = () => {
        setSow(false)
    }

    const handelBtn3 = () => {
        setSow2(true)
    }


  return (
    <>
    {isSow2 &&<div className='bg-slate-600 w-[65%] h- h-[50vh] flex items-center justify-center absolute z-20 mt-5'>
        <h1 className='text-red-400'>Accpeted Offer</h1>
    </div>}
   {isSow && <div onClick={handelBtn2} className='bg-slate-200 w-[65%] h- h-[50vh] flex items-center justify-center absolute z-10 mt-5'>
        <div className='w-[300px] h-[300px] bg-gray-600 flex items-center justify-center flex-col gap-5'>
            <button onClick={handelBtn2} className='text-red-400'>X</button>
            <p >hello i am shubham meshram</p>
            <button onClick={handelBtn3} className='bg-red-400 p-2'>Accept Offer</button>
        </div>
    </div>}
    <div className='w-full h-[50vh] bg-slate-700 flex items-center justify-center mt-5'>
      <button onClick={handelBtn} className='bg-red-400 px-2 py-2 rounded'>Show Offers</button>
    </div>
    </>
  )
}

export default CustomModalOverlay

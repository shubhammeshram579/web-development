import React, { useState , useCallback } from 'react'
import Usecallbackchild from "./usecallbackchild"

const UseCallbackhook = () => {

    const [count,setCount] = useState(0)

    // const handelIncrse = () => {
    //     setCount(count+1)
    // }

    const handelIncrse = useCallback(() => {
        // setCount(count+1)
        setCount((prev) => prev + 1)

    },[setCount])


  return (
    <div>
      <p>count:{count}</p>
      <Usecallbackchild handelIncrse={handelIncrse} />
    </div>
  )
}

export default UseCallbackhook

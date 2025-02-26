import React, { useEffect, useState } from 'react'

//2.  updating and change (state and props ) 
const UpdateUseEffectHook = () => {
    const [count ,setCount] = useState(0)


    // in class
    useEffect(() => {
        console.log("update Components")
    },[count]) 


    // my own 
  /*   useEffect(() => {
        console.log("update Components")
        setCount(count + 1)
    },[])  */
    // if [] then one time run , [count]  then continuely rending, and remove [],  }) thne alos continualy rending 



  return (
    <div>
      <p>couter: {count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}

export default UpdateUseEffectHook

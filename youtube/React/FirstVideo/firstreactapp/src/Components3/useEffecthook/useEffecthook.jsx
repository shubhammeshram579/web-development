import React, { useEffect, useState } from 'react'

// const UseEffecthook = () => {
//     const [count ,setCount] = useState(0)


//     // useEffect(() => {

//     //     console.log("componentDidMount componed")

//     // },[])

//     // useEffect(() => {

//     //     console.log("componentDidUpdate componed")

//     // },[count])

//   return (
//     <div>
//       <p>count:{count}</p>
//       <button onClick={() => setCount(count+1)} className='bg-yellow-300 px-5 py-2 rounded-lg'>increse</button>
//     </div>
//   )
// }

// export default UseEffecthook



// componentWillUnmount

const UseEffecthook = () => {

    const [count,setCount] = useState(0)

    useEffect(() => {

        console.log("componentDidMount")

       const counterid = setTimeout(() => {
         setCount(count+1)

       },[2000])


        return () => {
            console.log("componentWillUnmount")
            clearTimeout(counterid)
        }

    },[])


  return (
    <div>
    count: {count}
    </div>
  )
}

export default UseEffecthook


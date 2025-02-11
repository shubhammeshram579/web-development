import React, { useState } from 'react'

const InputeChange = () => {
    const [city ,setCity] = useState("")
    const [data,setData] = useState("")

      // css styling 
      const styles = {
        backgroundColor:"orange"
        ,padding:"50px",
        width:"15%"
    }


  return ( 
    <div style={styles}>
      <p>{data}</p>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => setData(city)}>click me</button>
    </div>
  )
}

export default InputeChange

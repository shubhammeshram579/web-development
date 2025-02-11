import React, { useState } from 'react'

const BgColorChange = () => {
    const [color,setColor] = useState("yellow");

    const styles = {
        backgroundColor:color,
        padding:"50px",
        width:"10%"
    }
  return (
    <div style={styles}>
      <h1>bgColor change</h1>
      <div>
        <button onClick={() => setColor("red")} style={{backgroundColor:"red"}}>red</button>
        <button onClick={() => setColor("green")} style={{backgroundColor:"green"}}>green</button>
      </div>
    </div>
  )
}

export default BgColorChange

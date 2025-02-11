import React, { useState } from 'react'

const FormHend3 = () => {
    const [city,setCity] = useState("");
    const [data,setData] = useState([])

    const handelSumbit = (e) => {
        e.preventDefault();
        setData((values) => ([...values,city]));
        setCity("")
    }

    // console.log(data)
  return (
    <div style={{display:"flex",flexDirection:"column" ,width:"25%" ,backgroundColor:"yellow",padding:"10px"}}>
        <h1>formHend3 single array</h1>
      <form onSubmit={handelSumbit}>
        <input type="text" name='city' value={city} onChange={(e) => (setCity(e.target.value))} placeholder='city'/>
        <button type='sumbit'>sumbit</button>
      </form>
      <div>
        <h1>Result</h1>
        {data.map((p,index) => (
            <div key={index}>
                <p>{p}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FormHend3

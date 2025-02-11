import React, { useState } from 'react'

const FormHend4 = () => {
    const [formData,setFormdata] = useState({});
    const [data,setData] = useState([])


    const handelChange = (e) => {
        const {name,value} = e.target;
        setFormdata((values) => ({...values,[name]:value}))
    }

    const handelSumbit = (e) => {
        e.preventDefault();
        const formDataS = {id: Math.random(),formData }
        setData((values) => ([...values,formDataS]));
    }

    // console.log(data)
  return (
    <div style={{display:"flex",flexDirection:"column" ,width:"25%" ,backgroundColor:"green",padding:"10px"}}>
        <h1>formHend maltiple arrayValue</h1>
      <form onSubmit={handelSumbit}>
        <input type="text" name='city' value={formData.city} onChange={handelChange} placeholder='city'/>
        <input type="text" name='state' value={formData.state} onChange={handelChange} placeholder='state'/>
        <button type='sumbit'>sumbit</button>
      </form>
      <div>
        <h1>Result</h1>
        {data.map((p,index) => (
            <div key={p.id}>
                <p>{p.formData.city}</p>
                <p>{p.formData.state}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FormHend4

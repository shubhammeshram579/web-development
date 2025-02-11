import React, { useState } from 'react'

const FormHead2 = () => {
    const [formData,setFormData] = useState({});
    const [data,setData] = useState({});

    const handelChange = (e) => {
        const {name,value} = e.target;
        setFormData((values) => ({...values,[name]:value}))
    }

    // console.log(formData)

    const handelSumbit = (e) => {
        e.preventDefault();
        setData(formData)
    }

    // console.log(data)


  return (
    <div style={{display:"flex",flexDirection:"column" ,width:"25%" ,backgroundColor:"green",padding:"10px"}}>
        <h1>formHend2 objec</h1>
      <form onSubmit={handelSumbit}>
        <input type="text" name='movieName' value={formData.movieName} onChange={handelChange} placeholder='enter movie name' />
        <input type="number" name='price' value={formData.price} onChange={handelChange} placeholder='enter movie price' />
        <input type="text" name='city' value={formData.city} onChange={handelChange} placeholder='enter city' />
        <button type='sumbit'>sumbit</button>
      </form>

      <div>
        <h1>Result</h1>
        <p>{`${data.movieName} and ${data.price}`}</p>
      </div>
    </div>
  )
}

export default FormHead2

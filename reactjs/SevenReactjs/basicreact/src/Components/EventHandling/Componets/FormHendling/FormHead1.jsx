import React, { useState } from 'react'

const FormHead1 = () => {
    const [user,setUser] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [pinCode ,setPinCode] = useState("");

    const [formdata ,setFormdata] = useState({});

    const handelSumbit = (event) => {
        event.preventDefault();
        setFormdata((values) => ({...values,user,city,state,pinCode}));
        setUser("")
        setCity("")
        setState("")
        setPinCode("")

    }

    console.log(formdata)



  return (
    <div style={{display:"flex",flexDirection:"column" ,width:"25%" ,backgroundColor:"yellow",padding:"10px"}}>
        <h1>FormHand1</h1>
    <form onSubmit={handelSumbit} style={{display:"flex",flexDirection:"column"}}>
        <input type="text" name='user' value={user} onChange={(e) => (setUser(e.target.value))}  placeholder='enter user name' required/>
        <input type="text" name='city' value={city} onChange={(e) => (setCity(e.target.value))} placeholder='enter city' />
        <input type="text" name='state' value={state} onChange={(e) => (setState(e.target.value))}  placeholder='enter state'/>
        <input type="number" name='pinCode' value={pinCode} onChange={(e) => (setPinCode(e.target.value))}  placeholder='enter the pincode'/>
        <button type='sumbit'>sumbit</button>
    </form>  

    <div>
        <h1>Result</h1>
        <p>{formdata.user}</p>
        <p>{formdata.city}</p>
        <p>{formdata.state}</p>
        <p>{formdata.pinCode}</p>
    </div>
    </div>
  )
}

export default FormHead1

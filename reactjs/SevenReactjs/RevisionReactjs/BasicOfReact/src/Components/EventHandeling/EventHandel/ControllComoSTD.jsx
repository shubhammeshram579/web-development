import React, { useState } from 'react'

/*
const ControllComoSTD = () => {
    const [firstname ,setFirstName] = useState("")
    const [age ,setAge] = useState(0)

    
  return (
    <div className='mt-5 bg-gray-500 h-[14vh]'>
      <input className='text-black mr-5 mt-5' type="text" name='firstname' id='firstname' onChange={(e) => setFirstName(e.target.value)} placeholder='ender name' required/>
      <input className='text-black' type="number" name='firstname' id='firstname' onChange={(e) => setAge(e.target.value)} placeholder='ender name' required/>

      <div>
        <p>name: {firstname}</p>
        <p>age: {age}</p>
      </div>
    </div>
  )
}

export default ControllComoSTD

*/


/*
const ControllComoSTD = () => {
    const [formData ,setFormData] = useState({})
    const [data,setData] = useState({})

    const HandelChange = (e) => {
        const {name,value} = e.target
        setFormData((values) => ({...values,[name]:value}))
    }

    const HandelSumbrt =  (e) => {
        e.preventDefault()
        setData(formData)
        setFormData({firstname:"",age:""})

    }
    return (
        <div className='mt-5 bg-gray-500 h-[14vh]'>
        <form onSubmit={HandelSumbrt} >
          <input className='text-black mr-5 mt-5' type="text" name='firstname' id='firstname' value={formData.firstname} onChange={HandelChange} placeholder='ender name' required/>
          <input className='text-black' type="number" name='age' id='firstname' value={formData.age} onChange={HandelChange} placeholder='ender name' required/>
          <button type='sumbit'>sumbit</button>
          </form>
          <div>
            <p>name: {data.firstname}</p>
            <p>age: {data.age}</p>
          </div>
        </div>
      )
}

export default ControllComoSTD
*/



/*
const ControllComoSTD = () => {
    const [userName , setUserName] = useState("")
    const [data,setData] = useState([])


    const HandelBtn = (e) => {
        e.preventDefault()
        const d = {id: Math.random(), userName:userName}
        setData((values) => ([...values,d]))
        setUserName("")
    }

    
  return (
    <div className='bg-gray-500 p-10 mt-5'>
      <input className='text-black' type="text" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button onClick={HandelBtn}>addName</button>
      <div>
        {data.map((i) => (
            <div key={i.id}>
                <p>{i.userName}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ControllComoSTD
*/



const ControllComoSTD = () => {
    const [formData , setformData] = useState({})
    const [data,setData] = useState([])


    const HandelChange = (e) => {
        const {name,value} = e.target;
        setformData((values) => ({...values, [name]:value}))
    }


    const HandelBtn = (e) => {
        e.preventDefault()
        const d = {id: Math.random(), formaData:formData}
        setData((values) => ([...values,d]))
        setformData({firstname: "",lastName:"",age:""})
    }
    
  return (
    <div className='bg-gray-500 p-10 mt-5'>
      <input className='text-black mr-5' type="text" name="firstname" value={formData.firstname} onChange={HandelChange} />
      <input className='text-black mr-5' type="text" name="lastName" value={formData.lastName} onChange={HandelChange} />
      <input className='text-black mr-5' type="number" name="age" value={formData.age} onChange={HandelChange} />
      <button onClick={HandelBtn}>addName</button>
      <div>
        {data.map((i) => (
            <div key={i.id}>
                <p>{i.formaData.firstname}</p>
                <p>{i.formaData.lastName}</p>
                <p>{i.formaData.age}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ControllComoSTD




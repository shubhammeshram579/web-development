import React, {useState} from 'react'

const Employee = () => {
    const [empname,setEmpname] = useState("")
    const [age,setAge] = useState(0)
    const [empType,setEmpType] = useState("")

    const [data,setData] = useState({})


    const handelSumbit = (e) => {
        e.preventDefault()
        setData({empname: empname, age:age, type:empType})
    }

    console.log(data)
    
    
  return (
    <div>
      <input type="text" id='empname' name='empname' value={empname} onChange={(e) => setEmpname(e.target.value)} placeholder='enter name' />
      <input type="text" id='age' name='age' value={age} onChange={(e) => setAge(e.target.value)} placeholder='enter age' />
      <input type="text" id='empType' name='empType' value={empType} onChange={(e) => setEmpType(e.target.value)} placeholder='enter type' />

      <button onClick={handelSumbit}>submit</button>


      <div>
        <p>{data.empname}</p>
        <p>{data.age}</p>
        <p>{data.type}</p>
      </div>

    </div>
  )
}

export default Employee

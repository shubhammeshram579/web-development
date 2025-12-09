import React,{useState} from 'react'

const Students = () => {
    const [studentform,setStudentform] = useState({})
    const [formdata,setformdata] = useState({})

    const handelChage = (e) => {
        const {name,value} = e.target;
        setStudentform((values) => ({...values,[name]:value}) )
    }


    const handelSumbit = (e) => {
        e.preventDefault()

        setformdata(studentform)
        setStudentform({stdname: '', address: '', city: '', state: ''})

    }


    // console.log("studentform",studentform)
    console.log("formdata",formdata)





  return (
    <div>
      <form onSubmit={handelSumbit}>
        <input type="text" id='stdname' name='stdname' value={studentform.stdname} onChange={handelChage} placeholder='enter name' required />
        <input type="text" id='address' name='address' value={studentform.address} onChange={handelChage} placeholder='enter address' required />
        <input type="text" id='city' name='city' value={studentform.city} onChange={handelChage} placeholder='enter city' required />
        <input type="text" id='state' name='state' value={studentform.state} onChange={handelChage} placeholder='enter state' required />
        <button type='submit' style={{backgroundColor:"blue", padding:"5px"}}>submit</button>
      </form>

      <div>
        <p>{formdata.stdname}</p>
      </div>
    </div>
  )
}

export default Students

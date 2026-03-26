import React,{useEffect, useRef, useState} from 'react'

const UseRefhook = () => {

    const username = useRef()

    const [userAge,setUserAge] = useState("")

    const [formdata,setFormdata] = useState({})


    // console.log("use ref" ,formdata)


    const handelSubit = () => {
        // e.preventDefault()
        setFormdata({
            username:username.current.value,
            userAge:userAge
        })

    }


    useEffect(() => {
        handelSubit()

    },[])



  return (
    <div className='flex items-center justify-center min-h-screen flex-col'>
        <div>
            <input type="text" ref={username}  className='border border-black' placeholder='enter name'/>
            <input type="text" value={userAge} onChange={(e) => setUserAge(e.target.value)}  className='border border-black' placeholder='enter age'/>

            <button onClick={handelSubit} className='bg-yellow-300 px-2 py-2 rounded-lg' >sumbit</button>
        </div>

        <p>name: {formdata.username}</p>
        <p>age: {formdata.userAge}</p>
    </div>
  )
}

export default UseRefhook

import React, { useEffect, useState } from 'react'

const FormValidation = () => {

    const [formdata,setFormData] = useState({});
    const [data,setData] = useState({})
    const [error ,setError] = useState({})
    const [error2 ,setError2] = useState("")


    const handelChange = (e) => {
        const {name,value} = e.target;
        setFormData((values) => ({...values , [name]:value}))
    }

    const handelSumbit = (e) => {
        e.preventDefault();

        //  if(!formdata.username > 0){
        //         setError("please ender username")
        // }else{
        //     setData(formdata)
        //     setError("")
        // }

        if(!formdata.username > 0 && !formdata.email > 0 && !formdata.password > 0 && !formdata.confirmPassword > 0 ){
            const errorData = {
                username:"please ender username",
                email:"please ender email",
                password:"enter password",
                confirmPassword:"ender confirm password"

            }

            setError((values) => ({...values ,errorData:errorData }))

        }else{
          
            setData(formdata)
            setError({})
            if(data.password === data.confirmpassword){
                setError2("")
            }else{
                setError2("mismatch")
            }

        }
        
    }






  return (
    <div>
      FormValidation
      <form  onSubmit={handelSumbit} className='flex items-center justify-center flex-col'>
        <div className='flex items-start justify-start flex-col'>
            <label htmlFor="username">Username</label>
        <input className='text-black' type="text" name="username" id='username' value={formdata.username} onChange={handelChange} />
        {error.errorData && <span className='text-red-500'>{error.errorData.username}</span>}
        </div>
       <div className='flex items-start justify-start flex-col'>
            <label htmlFor="email">email</label>
        <input className='text-black'  type="email" name="email" id='email' value={formdata.email} onChange={handelChange}  />
        {error.errorData && <span className='text-red-500'>{error.errorData.email}</span>}
         </div>

       <div className='flex items-start justify-start flex-col'>
            <label htmlFor="password">password</label>
        <input className='text-black'  type="password" name="password" id='password' value={formdata.password} onChange={handelChange}  />
        {error.errorData && <span className='text-red-500'>{error.errorData.password}</span>}
        </div>

        <div className='flex items-start justify-start flex-col'>
            <label htmlFor="username">confirm-password</label>
        <input className='text-black'  type="password" name="confirmpassword" id='confirmpassword' value={formdata.confirmPassword} onChange={handelChange}  />
        {error.errorData && <span className='text-red-500'>{error.errorData.confirmPassword }</span>}
        {error2 && <span className='text-red-500'>{error2 }</span>}
        </div>


        <button type='submit'>Sumbit</button>


      </form>
    </div>
  )
}

export default FormValidation

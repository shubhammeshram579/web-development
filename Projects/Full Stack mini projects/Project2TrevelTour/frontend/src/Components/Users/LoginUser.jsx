import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginUser = () => {

  const [formdata, setFormData] = useState({})
  const [LoginUser,setLoginUser] = useState({})

  const handelChange = (e) => {
    const {name,value} = e.target
    setFormData((values) => ({...values,[name]:value}))
  }

  const hanadelSumbit = (e) => {
    e.preventDefault()
    setLoginUser(formdata)

  }

  return (
    <div className='min-h-svh flex items-center justify-center absolute z-30 left-[40%]'>
     
      <form  onSubmit={hanadelSumbit} className=' bg-gray-700 flex items-start justify-start flex-col gap-2 px-24 py-10 rounded-xl'>
      <h1 className='text-3xl pb-5'>Login user</h1>
        
        <label htmlFor="email">email id</label>
        <input type="email" name='email' id="email" value={formdata.email} onChange={handelChange} placeholder='email' required />
        
        
          <label htmlFor="password">password</label>
        <input className='text-black' type="password" name='password' id="password" value={formdata.password} onChange={handelChange} placeholder='password' required />
        
        <button className='bg-blue-600 px-5 py-2 mt-5' type='sumbit'>Sumbit</button>

        <Link className='text-red-500 text-center mt-5' to="/register">got to the regiter</Link>
      </form>
    </div>
  )
}

export default LoginUser

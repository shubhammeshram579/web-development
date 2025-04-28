import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const UseForm = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [userdata,setUserdata] = useState({})


    const SumbitBtn = (data) =>{
        setUserdata(data)
        reset()
    }

  return (
    <div className='bg-gray-700 mt-5 py-20 '>
      <form onSubmit={handleSubmit(SumbitBtn)}  className='flex items-center justify-center gap-5 flex-col'>
        <label htmlFor="">username:</label>
            <input type='text' id='username' {...register("username", {required:true})} className='ml-2 text-red-600' placeholder='endter name' />
        <label htmlFor="email"> email:  </label>
        <input type='email' id='email' {...register("email")}  className='ml-2 text-red-600' placeholder='endter name' />
        <label htmlFor="password"> password:</label>
        <input type='password'  id="password" {...register("password")}  className='ml-2 text-red-600' placeholder='endter name'  />
        <button className='bg-orange-400 py-2 px-5' type="submit">sumbit</button>
      </form>


      <div>
        <h1>Result</h1>
        <p>{`${userdata.username} and ${userdata.email}`}</p>
      </div>
    </div>
  )
}

export default UseForm;

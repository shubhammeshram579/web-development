"use client"
import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation' /// also get next/router get router
import Link from 'next/link'

const LoginPage = () => {
  // similer to navigation
  const router = useRouter()

  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const [isvisuable ,setIsvisualble] = useState(false)
  const [loading,setLoading] = useState(false)


  const HandelLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:3000/api/users/login",user)
      
      console.log("data", response.data)

      // navagtion
      router.push("/profile")


    } catch (error:any) {
      throw new Error(error.message || "erorr")
      toast.error(error.message)
    }

    useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0){
        setIsvisualble(false)
      }else{
        setIsvisualble(true)
      }
    },[user])

  }
  return (
    <div className='min-h-screen w-auto flex items-center justify-center'>
      <div className='flex items-start justify-start flex-col gap-2 bg-gray-600 mt-20 p-20 rounded-2xl'>
        <h1>{loading ? "prosscing" : "Login"}</h1>
        <label htmlFor="email">email</label>
        <input className=' border-2' type="email" id='email' value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}  />
        <label htmlFor="password">password</label>
        <input className=' border-2' type="password" id='password' value={user.password} onChange={(e) => setUser({...user, password:e.target.value})} />
        <button onClick={HandelLogin} className='bg-blue-400 px-3 py-2 rounded-xl'>{isvisuable ? "no login" : "login"}</button>
        <Link href="/singin">go to the signup page</Link>
      </div>
    </div>
  )
}

export default LoginPage

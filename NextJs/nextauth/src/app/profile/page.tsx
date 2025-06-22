"use client"
import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation' /// also get next/router get router
import Link from "next/link"


const ProfilePage = () => {
  // similer to navigation
  const router = useRouter()
  const [user,setUser] = useState<any>({})
  const [loading,setLoading] = useState(false)



  useEffect(() => {

    const fatchdata = async () => {
    try {
      
      const response = await axios.get("http://localhost:3000/api/users/me")
      setUser(response.data.data)
    } catch (error:any) {
      console.log(error.message || "som ero")
      
    }
    }

    fatchdata()

  },[])

  console.log(user)


  const handleLogout = async () => {
    try {
      setLoading(true)
      const response = await axios.get("http://localhost:3000/api/users/logout")
      
      console.log("data", response.data)

      // navagtion
      router.push("/login")


    } catch (error:any) {
      throw new Error(error.message || "erorr")
      toast.error(error.message)
    }

  

  }
  return (
    <div className='min-h-screen w-auto flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col gap-3'>
        <h1>{user.username}</h1>
        <Link href={`/profile/${user._id}`}><h1>{user.email}</h1></Link>
        <button onClick={handleLogout} disabled={loading}>
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>

    </div>
  )
}

export default ProfilePage

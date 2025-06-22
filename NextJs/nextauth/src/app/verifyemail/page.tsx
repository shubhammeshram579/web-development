"use client"
import axios from 'axios'
import { useRouter } from 'next/router'
import  Link  from 'next/link'
import React, { useEffect, useState } from 'react'


const verifyemail = () => {
  // const router = useRouter()
  const [token,setToken] = useState("")
  const [verified ,setVerified] = useState(false)
  const [error ,setError] = useState(false)



  const EmailVerification = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/verifyemail",{token})
      console.log("data",response.data)
      setVerified(true)
    } catch (error:any) {
      console.log(error.message || "somtjing error")
      
    }
  }


  useEffect(() => {
    setError(false)
    const urlToken = window.location.search.split("=")[1]
    setToken(urlToken)

    // nextjs buase get token 
    // const {query} = router
    // const urlTokentwo = query.token
    // setToken(urlToken)

  },[])

  useEffect(() => {
    setError(false)
    if(token){
      EmailVerification()
    }
  },[token])



  return (
    <div className='min-h-screen w-auto flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col bg-gray-600 rounded p-20'>
        <h1>Verify your token</h1>
        <h1>{token ? `${token}` : "no token"}</h1>
        {verified && <div>
          <h2>Verified</h2>
          <Link href="/login">Login user</Link>
        </div>}
        {error && <div>
          <h2>error</h2>
        </div>}
      </div>

    </div>
  )
}

export default verifyemail

'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = ({params}:any) => {
    const router = useRouter()

    const handelBtun = () => {

        router.push("/profile")

    }
  return (
    <div className='flex items-center justify-center min-h-screen w-auto  flex-col'>
      <h1 className='text-white'>{params.id}</h1>
      <button onClick={handelBtun} className='bg-blue-400 rounded-2xl px-4 py-2'>back to profile</button>
    </div>
  )
}

export default page

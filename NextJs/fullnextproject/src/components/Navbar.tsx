'use client'
import React from 'react'
import Link from 'next/link'

import { useSession,signOut } from 'next-auth/react'
import { User } from 'next-auth'

const Navbar = () => {

    const {data:session} = useSession()
    const user: User = session?.user as User
    
  return (
    <>
      <nav className='h-20 w-full bg-gray-900 text-white flex items-center justify-around'>
        <div className='flex items-center justify-between gap-100 px-20'>
            <a href="#">Mystry message</a>
            {
                session ? (
                    <>
                    <span>welcome , {user?.username || user?.email}</span>
                    <button onClick={() => signOut()}>logout</button>
                    </>
                ) : (
                    <Link href="/sign-in">
                        <button>Login</button> 
                    </Link>
                )
            }
        </div>
      </nav>
   
    </>
  )
}

export default Navbar

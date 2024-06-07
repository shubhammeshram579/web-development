import React from 'react'

function Singin() {
  return (
    <>
    <div className="contenier h-[450px] w-[500px] bg-blue-400 rounded-lg">
        <div className="card">
            <h1>Logo</h1>
            <h2 className='font-bold text-xl'>Sign up to create account</h2>
            <h3>Already have an account? <span><a href="/login">LogIn</a></span></h3>
        </div>
        <div className="card2">
            <form action="/register" className='flex items-center justify-center flex-col gap-3'>
                <label htmlFor="#">fullname</label>
                <input type="text" name='fullname' id='fullname' placeholder='shubham meshram' />
                
                <label htmlFor="#">Email</label>
                <input type="email" name='email' id='email' placeholder='shubham123@gmail.com' />

                <label htmlFor="#">Password</label>
                <input type="password" name='password' id='password'  placeholder='*******'/>

                <input className='p-3 bg-yellow-400 rounded-lg mt-5' type="submit" value="Create Account" />
            </form>
        </div>
    </div>
    </>
  )
}

export default Singin
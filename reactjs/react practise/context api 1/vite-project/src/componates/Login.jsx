import React, { useContext, useState } from 'react'
import userContexs from '../contex/useContex'
import { Link } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const {setUser} = useContext(userContexs)


    function sumbmitHeadr(e){
        e.preventDefault()
        setUser({username,password})

    }


  return (
    <div className="login">
        <div className="card flex flex-col items-center ">
        <label className='pb-5  font-bold' htmlFor="#">Username</label>
        <input className='w-[300px] h-[30px] rounded text-center' type="text" name='unsername' id='username' value={username} onChange={(e) => setUsername(e.target.value) } />
        <label className='pb-5 pt-5 font-bold' htmlFor="#">Password</label>
        <input className='w-[300px] h-[30px] rounded text-center' type="password" name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} />

        <button onClick={sumbmitHeadr} className='pt-3 pb-3 px-10  mt-10 rounded bg-yellow-300'><Link to="/Profile">Submit</Link></button>

        </div>
      
    </div>
  )
}

export default Login
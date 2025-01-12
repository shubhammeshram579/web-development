import React, { useState ,useContext} from 'react'
import UserContext from '../Contex/Contex.js'



function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(UserContext);

    const formHaendel = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <>
    <div className='flex items-center justify-between flex-col gap-5'>
        <input className='text-black' type="text" name='username'  value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)} />
        <input className='text-black' type="text" name='password' value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button className='bg-blue-500 p-2 rounded-xl' type='submit' onClick={formHaendel}>submit</button>
    </div>
    </>
  )
}

export default Login
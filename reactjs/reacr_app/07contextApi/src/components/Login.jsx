import React ,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const {setUser} = useContext(UserContext)

    const handleSumit = (e) => {
        e.preventDefault()
        setUser({username,password})

    }



  return (

    <div className='flex items-center flex-col justify-center gap-4'>
        <h2 className="text-black font-bold text-lg py-4 px-12 mt-6 text-center rounded-full">login</h2>
        <input className="border-4 text-yellow-400 py-3 text-center rounded-full" type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        <input  className="border-4 text-black py-3 text-center rounded-full" type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button  className="bg-green-800 text-yellow-400 px-4  py-2 text-center rounded-full" onClick={handleSumit}>Submit</button>
        </div>
  )
}

export default login
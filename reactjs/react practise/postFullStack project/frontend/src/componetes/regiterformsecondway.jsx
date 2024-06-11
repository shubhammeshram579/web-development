import { useEffect, useState } from 'react'
import './App.css'
// import {useForm} from "react-hook-form"
import axios from "axios"

function App() {
  // const { register, handleSubmit, formState: { errors } } = useForm();
//   const [error, setError] = useState()

  const [fullname, setFullname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/v1/users/register', { fullname, username, email, password });
        alert(response.data.message);
    } catch (error) {
        console.log(error)
        alert('Error registering user');
    }
};



  return (
   <>
   <form onSubmit={handleSubmit} className='flex items-center justify-center gap-5 flex-col'>
            <div>
                <label>fullname:</label>
                <input className='text-black bg-gray-500' type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
            </div>
            <div>
                <label>username:</label>
                <input className='text-black bg-gray-500'  type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                <label>email:</label>
                <input className='text-black bg-gray-500'  type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input className='text-black bg-gray-500'  type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <button type="submit">Register</button>
        </form>
   </>
   
   
  )
}

export default App

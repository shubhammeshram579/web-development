import React,{useContext} from 'react'
import userContexs from '../contex/useContex'
import { Link } from 'react-router-dom'

function Profile() {
    const {user} = useContext(userContexs)
    if(!user) return 

    <Link to="/Profile"><div className='h-[500px] bg-red-600'>Please login {user.username}</div></Link>
   
     

    return <Link to="/Profile"><div>Wellcome {user.username}</div></Link>
  
}

export default Profile
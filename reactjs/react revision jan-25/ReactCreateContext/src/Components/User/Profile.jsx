import React ,{useContext } from 'react'
import UserContext from '../Contex/Contex.js'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>please login user</div>

    return <div>wellcome: {user.username}</div>
    
  
}

export default Profile
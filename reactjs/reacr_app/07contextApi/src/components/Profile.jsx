import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div className='text-black font-bold text-lg py-4 px-12 mt-6 text-center rounded-full'>Please login</div>

    return <div className='text-black font-bold text-lg py-4 px-12 mt-6 text-center rounded-full'>WellCome {user.username}</div>


}

export default profile
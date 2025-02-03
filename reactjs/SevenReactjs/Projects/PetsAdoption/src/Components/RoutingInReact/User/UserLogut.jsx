import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogut = () => {
    const navigate = useNavigate()


    const hndelClick = () => {
        localStorage.removeItem("token")
        alert(`user logout succefully`)
        navigate("/")
    }
  return (
    <div>
      <button style={{backgroundColor:"transparent" ,color:"red", fontSize:"15px",border:"none"}} onClick={hndelClick}>logout</button>
    </div>
  )
}

export default UserLogut

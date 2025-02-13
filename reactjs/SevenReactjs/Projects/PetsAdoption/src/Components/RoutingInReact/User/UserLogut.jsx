import React from 'react'
import { useNavigate } from 'react-router-dom'

// react redux
import {useDispatch} from "react-redux"
import { logout as AuthLogout } from '../../../ReduxStrore/AuthSlic.js'

const UserLogut = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const hndelClick = () => {

        dispatch(AuthLogout())
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

import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/config"
import {Logout, logout} from "../../store/authSlice"

function Logoutbtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.Logout().then(() =>{
            dispatch(logout())

        })
    }
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  
}

export default Logoutbtn
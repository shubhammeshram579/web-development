import React from 'react'
import { Header, Footer } from './componetes'
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
// import {Login} from  "./componetes/index.js"
import {login as authLogin} from "..//store/AuthSlice.js"
import {logout as authLogout} from "..//store/AuthSlice.js"
import "./App.css"
import Notification from "./componetes/Header/Notification.jsx"
import Massage from "./componetes/Header/Massage.jsx"

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMassage, setShowMassage] = useState(false);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      axios.get('http://localhost:8000/api/users/current-user', {
        headers: { 'x-auth-token': user.accessToken },
        withCredentials: true,
      })
        .then(response => {
          if (response.data) {
            dispatch(authLogin(response.data));
          } else {
            dispatch(authLogin());
          }
        })
        .catch(error => {
          console.log('Error fetching user:', error);
          dispatch(authLogout());
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  // const bacgroundC = {
  //   backgroundColor: "red",
  // color: "green",
  // fontSize: "100px"
    
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' w-full'>
        <div className='flex justify-normal flex-col gap-4 h-full'>
            <Header setShowNotifications={setShowNotifications} setShowMassage={setShowMassage}/>
            <div className="absolute z-50 left-[79vw] mt-28">
                {showNotifications && (<Notification />)}
                {showMassage && (<Massage />)}
                </div>
            <main className='flex items-centre justify-center'>
                <Outlet />
                
            </main>
            <Footer />
        </div>
    </div>
  )
}

export default App
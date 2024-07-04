import React from 'react'
import { Header, Footer } from './componetes'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
// import {Login} from  "./componetes/index.js"
import {login as authLogin} from "..//store/AuthSlice.js"
import {logout as authLogout} from "..//store/AuthSlice.js"

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/users/current-user', {
  //     withCredentials: true 
  //   })
  //   .then(response => {
  //     if (response.data) {
  //       dispatch(Login(response.data));
  //     } else {
  //       dispatch(Login());
  //     }
  //   })
  //   .catch(error => {
  //     console.log('Error fetching user:', error);
  //     dispatch(Logout());
  //   })
  //   .finally(() => setLoading(false));
  // }, [dispatch]);


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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex items-center justify-between'>
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    </div>
  )
}

export default App
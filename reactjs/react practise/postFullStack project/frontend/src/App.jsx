import React from 'react'
import { Header, Footer } from './componetes'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import {Login, Logout} from  "./componetes/index"

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/users/current-user', {
      withCredentials: true 
    })
    .then(response => {
      if (response.data) {
        dispatch(Login(response.data));
      } else {
        dispatch(Login());
      }
    })
    .catch(error => {
      console.log('Error fetching user:', error);
      dispatch(Logout());
    })
    .finally(() => setLoading(false));
  }, [dispatch]);


  return !loading ? (
    <div className='flex items-center justify-between'>
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    </div>
  ): null
}

export default App
import React from 'react'
import {useSelector} from "react-redux"
import Container from '../Contenier/Contenier.jsx'


function Header() {
    // const authStatus = useSelector((state)=> state.auth.status)

  return (
    <header>
        <Container>
            <nav className='flex items-center justify-between'>
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="navitem flex items-center gap-10">
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                    <a href="/register">Singin</a>
                    <a href="#">All Post</a>
                    <a href="#">Add Post</a>
                </div>
                <div className="logoutbtn">
                    <a href="/logout">Logout</a>
                </div>
            </nav>
        </Container>
    </header>
  )
}

export default Header
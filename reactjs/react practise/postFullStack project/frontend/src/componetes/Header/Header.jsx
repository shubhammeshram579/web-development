import React from 'react'
import Contenier from "../contenier/Contenier.jsx"
import Logo from "../Logo.jsx"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import LogoutBtn from './LogoutBtn.jsx'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()


    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
          }, 
          {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "AddPost",
            slug: "/Add-Post",
            active: authStatus,
        },
    ]


  return (
    <header className={'bg-gray-500 p-5 w-full'}>
        <Contenier>
            <nav className={'flex items-center justify-between'}>
                <div>
                    <Link to="/">
                    <Logo />
                    </Link>
                </div>
                <ul className={'flex items-center justify-between gap-5'}>
                    {/* {
                        navItems.map((item)=>
                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={() => navigate(item.slug)}
                                        className={'inline-block px-2 duration-200 hover:bg-blue-100 rounded-full'}> {item.name}
                                    </button>
                                </li>
                            ) : null )
                    } */}
                    {navItems.filter(item => item.active).map((item) => (
                        <li key={item.name}>
                            <button onClick={() => navigate(item.slug)}
                            className={'inline-block px-2 duration-200 hover:bg-blue-100 rounded-full'}>
                                {item.name}
                                </button>
                    </li>))}

                    {
                        authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )
                    }

                </ul>
            </nav>
        </Contenier>
    </header>
  )
}

export default Header
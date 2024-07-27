import React,{useState} from 'react'
import Contenier from "../contenier/Contenier.jsx"
import Logo from "../Logo.jsx"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import LogoutBtn from './LogoutBtn.jsx'
// import PostsList from "..//../componetes/pages/SearchPost/SearchPost.jsx"
import ChatSearchBar from "../ChatSearchbar.jsx"

function Header() {
    const authStatus = useSelector((state) => state.auth.isLoggedIn)
    const navigate = useNavigate()
    const user = useSelector((state) => state.auth.user);


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
            name: "Register",
            slug: "/Register",
            active: !authStatus,
        },
        {
            name: "Profile",
            slug: authStatus ? `/getPost/${user.user._id}` : '/getPost/null',
            active: authStatus,
        },
        {
            name: "AddPost",
            slug: "/addpost",
            active: authStatus,
        },
        // {
        //     name: "Search post",
        //     slug: "/posts/getAllpost/search",
        //     active: authStatus,
        // },
    ]


  return (
    <header className={'bg-gray-500 p-7'}>
        <Contenier>
            <nav className={'flex items-center justify-between'}>
                <div>
                    <Link to="/">
                    <Logo />
                    </Link>
                </div>
                {
                        authStatus && (
                            <div>
                                <ChatSearchBar/>
                        </div>
                        )
                    }
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
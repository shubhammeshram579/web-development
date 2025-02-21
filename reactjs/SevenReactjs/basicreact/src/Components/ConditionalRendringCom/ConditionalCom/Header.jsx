import React from 'react'
import Login from "./Login.jsx"
import Profile from "./Profile.jsx"

/*
const Header = (props) => {
    console.log(props)
  return (
    <div>
      <Login />
      <Profile />
    </div>
  )
}

export default Header

*/

// 1. Using if-else Statements
// The most straightforward way to implement conditional rendering.
/*
const Header = (props) => {

    if(props.isUser){
        return <Profile />

    }else{
        return <Login />
    }
}

export default Header;

*/



// 2. Using Ternary Operator
// This is a concise way to conditionally render elements.

/*
const Header = (props) => {

    return (
        <div>
            {props.isUser ? (<Profile />): (<Login />)}
        </div>
    )
}

export default Header;

*/



// 3 third way to logical oprater conditional rending &&

const Header = (props) => {

    return (
        <div>
            {props.isUser && <Profile />}
        </div>
    )
}

export default Header;

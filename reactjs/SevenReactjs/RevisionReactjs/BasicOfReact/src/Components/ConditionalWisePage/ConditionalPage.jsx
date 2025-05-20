import React from 'react'
import ProfilePage from "./Profile/ProfilePage.jsx"
import UserPage from "./User/UserPage.jsx"



// if else statement
/* const ConditionalPage = ({isLogin}) => {
    console.log(isLogin)
    if(isLogin === true){
        return <div><ProfilePage /></div>
    }else{
        return <div><UserPage /></div>
    }
}

export default ConditionalPage */


// tenttery oprater
/* const ConditionalPage = ({isLogin}) => {
    console.log(isLogin)
  return (
    <div>
      {isLogin === true ? (<ProfilePage />) :
      (<UserPage />)}
    </div>
  )
}

export default ConditionalPage */



// logical candition
/* const ConditionalPage = ({isLogin}) => {
   
    return (
        <>
        <div>
            {isLogin && (<ProfilePage />)}
        </div>
        </>
    )
}

export default ConditionalPage */


// switch statement
const ConditionalPage = ({isLogin}) => {
   
   switch(isLogin){
        case true: 
            return <div><ProfilePage /></div>
        case false:
            return <div><UserPage /></div>
        default:
            return <div>not found</div>
   }
}

export default ConditionalPage







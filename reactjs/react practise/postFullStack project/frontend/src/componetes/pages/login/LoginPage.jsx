import React ,{useState,useEffect} from 'react'
import {LoginFns as LoginComponate ,Contenier} from  "../../index.js"
import "..//..//../App.css"



function LoginPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay the visibility state change to trigger smooth transition
    setTimeout(() => {
        setVisible(true);
    }, 100); // Delay for smooth transition
  }, []);


  return (
    <div className={`LoginPage pt-32 ${visible ? "visible" : ""}` }>
        <LoginComponate />
    </div>
    
  )
}

export default LoginPage
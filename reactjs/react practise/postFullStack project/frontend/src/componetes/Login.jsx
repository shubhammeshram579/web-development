import React, { useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
import {Button, Input, Logo} from  "./index.js"
import {useDispatch} from  "react-redux"
import {useForm} from  "react-hook-form"
import axios from 'axios'
// import { useSelector } from 'react-redux'
import {login as authLogin} from '..//../store/AuthSlice.js'


function Login() {
    // const [email , setEmail] = useState("")
    // const [password , setPassword] = useState("")
    // const [error, setError] = useState("")
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    // api data fatch pending
    const onSubmit = async (data) => {
        try {
          const session = await axios.post('http://localhost:8000/api/users/login', data);
          console.log(session)


          if(session){
            const userData = await session.data

            console.log(userData.data.user)
            // const accessToken = await userData.data.accessToken

            // console.log(accessToken)


            if(userData){
              dispatch(authLogin(userData.data.user))

              // set accessToken
              // localStorage.setItem("accessToken", accessToken)
              navigate("/")
            } 

           
          }
          
        } catch (error) {
          console.log(error);
          alert('Error login user');
        }
      };
   

  return (
    <div> 
        <div>
        <Logo />
    </div>
    <h3>Sign in to your account</h3>
    <p>Don&apos;t have any account?&nbsp;<Link to="/Signup">Sign Up</Link></p>

    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input label="Email:" placeholder= "Enter email address" type="email" {...register("email", {required: "email required", 
                pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Email address must be a valid address',
                  },
            })} />

            <Input label="password" type="password" placeholder="esnter password" {...register("password", {
                required:"password required"
            })} />

          

            <Button type="submit" className="w-full">Sign In </Button>
            
        </div>
    </form>
        
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button , Input, Logo} from "./index.js"
import {useForm} from "react-hook-form"
import axios from "axios"
import {login  as authLogin} from '..//../store/AuthSlice.js'
import { useDispatch } from 'react-redux'

function Signup() {
    // create varible
    // const [fullname, setFullname] = useState("")
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
   

    const onSubmit = async (data) => {
        try {
          const userData = await axios.post('http://localhost:8000/api/users/register', data);
          alert(userData.data.message);
          console.log(userData.data.data)

        //   login dispatch
          dispatch(authLogin(userData.data.data))

        //   navigate router
          navigate("/")

        } catch (error) {
          console.log(error);
          alert('Error registration ');
        }
      };

  return (
    <div>
        <div>
            <div>
                <Logo />
            </div>
            <h2>Sign up to create account</h2>
            <h3>Already have an account?&nbsp; <Link to="/Login">Sign In</Link>  </h3>
            {errors && <p className="text-red-600 mt-8 text-center">There are some errors in your submission</p>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input
                    label= "Full Name: "
                    placeholder="Enter your full name"
                    {...register("fullname", {
                        required: "Full Name is required"
                    })}/>
                    {errors.fullname && <p className="text-red-600">{errors.fullname?.message}</p>}
                    
                    <Input
                    label= "UserName: "
                    placeholder="Enter your username"
                    {...register("username", {
                        required:"'Username is required"
                    })}/>
                    {errors.username && <p className="text-red-600">{errors.username?.message}</p>}

                    <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'Email address must be a valid address',
                          },
                            })} 
                    />
                    {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                    />
                    {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    <Button type="submit" className="w-full">Create Account</Button>


                </div>
            </form>

        </div>
    </div>
  )
}

export default Signup
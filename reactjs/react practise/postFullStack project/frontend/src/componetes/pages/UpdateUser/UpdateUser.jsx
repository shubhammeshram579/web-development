import React, { useEffect, useCallback,useState } from "react";
import { Input, Button } from "..//../index.js";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams, useNavigate ,Link} from "react-router-dom";
import {Contenier} from "..//../index.js"

const UpdateUser = () => {
  // const {userId} = useParams()
  const {register,handleSubmit,reset, setValue, formState: { errors }} = useForm();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.user.accessToken);
  const CurrentUId = useSelector((state) => state.auth.user.user);


  useEffect( () =>{
    const fetchPost = async () =>{
      try {
        const respornse = await axios.get("http://localhost:8000/api/users/current-user",{
          headers:{
            "Authorization":`Bearer ${accessToken}`
          }
        })

        const user = respornse.data.data.curentUser
        console.log(user)
        setValue("fullname",user.fullname);
        setValue("username",user.username);
        setValue("email",user.email)

        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setError(error.message)
        setLoading(false)
        
      }

    }
    fetchPost()
  },[setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("fullname",data.fullname)
    formData.append("username",data.username)
    formData.append("email",data.email)


    try {
      const res = await axios.patch("http://localhost:8000/api/users/updateuser",formData,{
        headers:{
          "Authorization":`Bearer ${accessToken}`
        }
      })
      navigate("/")
      console.log(res.data)
      alert("userUpdated SuccesFully")
      return res.data

      
    } catch (error) {
      console.log(error.message)
      
    }
  }

  if (loading) return <div className="py-[100vh]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <div>
    <Contenier>
      
      <div className="mt-44 pb-10 bg-slate-200 px-10 py-5 mb-10 rounded-3xl">
      <Link to={`/getPost/${CurrentUId._id}`}><i class="ri-arrow-left-fill text-xl text-red-500"></i></Link>
      <div className="text-center font-bold mt-10">Update User</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("fullname", {
                required: "Full Name is required",
              })}
            />
            {errors.fullname && (
              <p className="text-red-600">{errors.fullname?.message}</p>
            )}

            <Input
              label="UserName: "
              placeholder="Enter your username"
              {...register("username", {
                required: "'Username is required",
              })}
            />
            {errors.username && (
              <p className="text-red-600">{errors.username?.message}</p>
            )}

            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
            <Button type="submit" className="mt-5 bg-red-500">Sumbit</Button>
          </div>
        </form>
        
      </div>

      </Contenier>
      </div>
      
     
    </>
  );
};

export default UpdateUser;

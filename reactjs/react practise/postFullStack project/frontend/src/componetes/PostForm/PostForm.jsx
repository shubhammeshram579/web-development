import React ,{useState,useCallback} from 'react';
import { Input, Select, Button } from '../index.js';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "..//../Responsive.css"
import axios from 'axios';



import io from "socket.io-client";


const socket = io("http://localhost:8000");




const  PostForm = ({post}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  // const [loading ,setLoading] = useState(true)

    // Get the token from cookies or local storage
    const localStorageToken = localStorage.getItem("token");
    const stoken = sessionStorage.getItem("token")
    const accessToken = useSelector((state) => state.auth.user?.accessToken);
    const token = stoken || localStorageToken || accessToken;




    // form data setup
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("postImg",data.postImg[0]);
    formData.append("status",data.status);


    // fatch addpost api
try {
      const response = await axios.post("http://localhost:8000/api/posts/addpost",formData,{
        headers:{"Authorization":`Bearer ${token}`}
      })
      console.log(response.data)
      alert("post uploaded successfully")
      // socket.emit("sendNotification", response.data);
      // socket.emit('newPost', response.data);
    
      // socket.emit('sendNotification', { id: new Date().getTime(), message: "New notification from client!" });
      navigate("/")


      return response.data

     
} catch (error) {
  alert("postImg not upload")

  
}

};







  return (
    <form id='AddpostForm' className='flex items-start justify-between gap-[50px] bg-gray-200 rounded-3xl py-20 px-20' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="Title: "
          placeholder="title"
          className="mb-4"
          {...register('title', { required: 'Title required' })}
        />
        {errors.title && <p>{errors.title.message}</p>}
        
        <Input
          label="Description: "
          placeholder="Description"
          className="py-5"
          {...register('description', { required: 'Description required' })}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      
      <div>
        <Input
          label="Post Image: "
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('postImg', { required: "post image required"})}
        />
        {errors.postImg && <p>{errors.postImg.message}</p>}
        {/* {post && (
          <div>
            <img src={response.data.data.PostPublish.postImg} alt="title" />
          </div>
        )} */}

        <Select
          options={["active","inactive"]}
          label="status :"
          className="p-2 mb-4 text-black"
          {...register('status', { required: 'Status required' })}
        />
        {errors.status && <p>{errors.status.message}</p>}

        <Button type="submit" bgColor={post ? 'bg-green-500' : undefined} className="w-full mt-10 bg-red-500">
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;

import React ,{useState,useCallback} from 'react';
import { Input, Select, Button } from '../index.js';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';




const  PostForm = ({post}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

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
      navigate("/")

      return response.data

     
} catch (error) {
  alert("postImg not upload")
  
}

};




  return (
    <form className='flex items-start justify-between gap-[50px] bg-gray-400 py-20 px-20' onSubmit={handleSubmit(onSubmit)}>
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
            <img src={response.data.PostPublish.postImg} alt="title" />
          </div>
        )} */}

        <Select
          label="Status: "
          options={[true,false]}
          className="mb-4 p-10"
          {...register('status', { required: 'Status required' })}
        />
        {errors.status && <p>{errors.status.message}</p>}

        <Button type="submit" bgColor={post ? 'bg-green-500' : undefined} className="w-full mt-10">
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;

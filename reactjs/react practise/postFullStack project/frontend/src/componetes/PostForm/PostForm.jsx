import React ,{useCallback,useEffect} from 'react';
import { Input, Select, Button } from '../index.js';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function PostForm({ post }) {
  const navigate = useNavigate()
  const userData = useSelector((state) => state.userData )
  const { register, handleSubmit, formState: { errors } } = useForm();

 
  const onSubmit = async (post) => {
    try {


    console.log(userData)
      // const response = await axios.post('http://localhost:8000/api/posts/addpost', post);
      // alert(response.data.message);
   

    //   console.log(response)

    //   login dispatch
      // dispatch(authLogin(response.data))

    //   navigate router
      navigate("/")

    } catch (error) {
      console.log(error);
      alert('Error registration ');
    }
  };




  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="Title: "
          placeholder="Title"
          className="mb-4"
          {...register('title', { required: 'Title required' })}
        />
        {errors.title && <p>{errors.title.message}</p>}
        
        <Input
          label="Description: "
          placeholder="Description"
          className="mb-4"
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
          {...register('postImg', { required: !post })}
        />
        {errors.postImg && <p>{errors.postImg.message}</p>}

        <Select
          options={["active", "inactive"]}
          label="Status: "
          className="mb-4 text-black p-10"
          {...register('status', { required: 'Status required' })}
        />
        {errors.status && <p>{errors.status.message}</p>}

        <Button type="submit" bgColor={post ? 'bg-green-500' : undefined} className="w-full">
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;

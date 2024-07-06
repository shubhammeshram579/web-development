// EditPost.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Input, Select, Button } from '..//../index.js';

const EditPost = () => {
  const { postId } = useParams(); // Extract postId from URL
  const { register, handleSubmit, reset, setValue ,formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const accessToken = useSelector((state)=>state.auth.user?.accessToken)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/posts/getPostByID/${postId}`,{
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });
        const post = response.data.data.getPostbyId;
        // console.log(post)

        setValue('title', post.title);
        setValue('description', post.description);
        setValue('postImg', post.postImg);
        // setValue('owner', post.owner);
        setValue("status",post.status)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("postImg",data.postImg[0]);
    formData.append("status",data.status);

    try {
      const res = await axios.patch(`http://localhost:8000/api/posts/EditPost/${postId}`, formData ,{
        headers:{
          "Authorization":`Bearer ${accessToken}`
        }
      });
      // console.log(res.data)
      navigate(`/getPostByID/${postId}`)
      return res.data
    
      
    } catch (error) {
      console.log('Error updating post:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='py-14'>
      <h1>Edit Post</h1>
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
        <button className='py-3 px-10 bg-orange-400 rounded-lg' type="submit">Update Post</button>
      </div>
    </form>
    </div>
  );
};

export default EditPost;

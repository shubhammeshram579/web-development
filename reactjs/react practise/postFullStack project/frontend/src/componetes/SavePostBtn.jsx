// src/components/SavePostButton.jsx
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const SavePostButton = ({ userId, postId }) => {
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate()


  const accessToken = useSelector((state) => state.auth.user?.accessToken);

  const handleSavePost = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/posts/savePost",{userId, postId},{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }

      });
      // return response.data
      navigate("/getPost")
      console.log(response.data)
      alert(response.data.message);
    } catch (error) {
      alert('Error saving post');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSavePost)}>
      {/* <input type="hidden" {...register('userId')} value={userId} /> */}
      <button type="submit" className="bg-green-600 py-2 px-4 rounded-2xl">Save</button>
    </form>
  );
};

export default SavePostButton;

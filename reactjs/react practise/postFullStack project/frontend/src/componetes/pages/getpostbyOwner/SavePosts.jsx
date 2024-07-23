import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import {Contenier} from "..//../index.js"

const SavePosts = () => {
    const [savePost ,setSavePost] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    


    const accessToken = useSelector((state)=>state.auth.user?.accessToken)

    
  useEffect(()=>{
    const fatchSavePost = async () => {
      try {
        const userSavePost = await axios.get("http://localhost:8000/api/users/savePosts",{
          headers: {
            "Authorization":`Bearer ${accessToken}`
          }
        });
        console.log("usersavepost",userSavePost.data.data)
        setSavePost(userSavePost.data.data)
        setLoading(false);
        
      } catch (error) {
        setError(error.message);
          setLoading(false);
        
      }
  
    };
    fatchSavePost();
  
    },[]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  return (
    <div>
        <Contenier>
         <ul className='flex justify-center items-center gap-20 flex-row pt-14 flex-wrap'>
        {savePost.map(post => (
          <li key={post._id}>
            <Link to={`/getPostByID/${post._id}`}>
            {post.postImg && <img className='h-[300px] w-[400px] rounded-xl object-cover' src={post.postImg} alt={post.title} />}</Link>
            <h2 className='text-center font-bold mt-5'>{post.title}</h2>
            <p className='text-center'>{post.description}</p>
            <div className='flex items-center justify-around'>
            </div>
          </li>
        ))}
      </ul>
      </Contenier>
    </div>
  )
}

export default SavePosts
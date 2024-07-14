import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import {Contenier} from "..//../index.js"

const PostsByOwner = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(posts)

  const accessToken = useSelector((state)=>state.auth.user?.accessToken)
  const user = useSelector((state)=>state.auth.user)

  // console.log(user.user._id)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/posts/getPost`,{
            headers:{
                "Authorization": `Bearer ${accessToken}`
            }
        });
        // console.log(response.data.data.getPost)
        setPosts(response.data.data.getPost);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    
    <Contenier>
    <div className='flex items-center justify-center flex-col'>
      <h1 className='w-10 h-10 p-16 rounded-full bg-gray-400 flex items-center justify-center font-bold text-xl mb-5'>{user.user.fullname[0]}</h1>
      <h1 className='font-bold text-4xl mb-2'>{user.user.fullname}</h1>
      <h2 >@ {user.user.username}</h2>
      <h2 className='mt-2'> 0 Follwing</h2>
      <div className='flex items-center justify-center gap-3 mt-5'>
        <Link to="https://web.whatsapp.com/"><h1 className=' rounded-3xl py-3 px-10 bg-slate-400 text-center'>Share</h1></Link>
        <Link to="/UpdateUser"><h1 className=' rounded-3xl py-3 px-10 bg-slate-400 flex items-center justify-center'>Edit profile</h1></Link>
      </div>
      <div className='flex items-center justify-center gap-5 mt-20'>
        <Link to="/addpost"><h1 className='font-semibold text-xl hover:border-b-4'>Create</h1></Link>
        <h1 className='font-semibold text-xl hover:border-b-4'>Saved</h1>
      </div>

    </div>
    <div className='p-[100px]'>
      
      {/* <h1>Posts by Owner {posts.length}</h1> */}

      <ul className='flex justify-center items-center gap-20 flex-row'>
        {posts.map(post => (
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

      
     
    </div>
    </Contenier>

  );
};

export default PostsByOwner;

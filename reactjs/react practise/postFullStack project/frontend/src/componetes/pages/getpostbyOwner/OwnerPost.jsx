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
    <div className='p-[100px]'>
      <Contenier>
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

      </Contenier>
     
    </div>
  );
};

export default PostsByOwner;

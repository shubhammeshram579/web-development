// pages/SearchResults.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Contenier from '../../contenier/Contenier';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const [posts, setPosts] = useState([]);
  const query = useQuery().get('query');
  const accessToken = useSelector((state) => state.auth.user?.accessToken);


  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:8000/api/posts/getAllpost/search`, {
          params: { query },
          headers:{
            "Authorization":`Bearer ${accessToken}`
          }
        })
        .then((response) => {
          setPosts(response.data.data.getPost);
        })
        .catch((error) => {
          console.log('Error fetching search results:', error);
        });
    }
  }, [query]);

  return (
    <Contenier>
    <div className='flex items-center justify-center gap-20 p-20 flex-wrap'>
      {/* <h1>Search Results</h1> */}
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <img src={post.postImg} alt={post.title} className='w-[350px] h-[500px] object-cover rounded-xl' />
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
    </Contenier>
  );
};

export default SearchResults;

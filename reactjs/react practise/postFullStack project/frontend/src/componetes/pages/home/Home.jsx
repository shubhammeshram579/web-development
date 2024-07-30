import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Contenier } from "..//../index.js";
import { Link } from "react-router-dom";
import "..//..//../App.css";
import { SharePost, SavePostButton, OptionsCard } from "..//../index.js";
import Notification from ".//..//../Header/Notification.jsx"
import Header from "..//../Header/Header.jsx"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
 

  // console.log(posts);

  // donload butten and hide butten
  // const [visible, setVisible] = useState(false);
  // const [isHidden, setIsHidden] = useState(false);

  // console.log(posts)
  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  const user = useSelector((state) => state.auth.user?.user);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const token = localStorage.getItem("token")

        // console.log(token)
        const response = await axios.get(
          "http://localhost:8000/api/posts/getAllpost",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        // console.log(response.data.data.getPosts)
        setPosts(response.data.data.getPosts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // postUrl copy
  // const postUrl = window.location.href;

  //post image hide
  // const handleHide = () => {
  //   setIsHidden(!isHidden);
  // };

  if (loading) return <div>Loading...</div>;
  if (!posts) {
    return <div>Loading...</div>;
  }
  // if (error) return <div className='font-bold text-5xl py-[27vh] text-green-900'>Login to read posts</div>;

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Contenier>
          <div className="flex flex-wrap p-[23vh]">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Contenier>
      </div>
    );
  }

  return (
    
    <Contenier>

      <div className="py-10 w-full">
        {/* <h1>home: {posts.length}</h1> */}
        
        <ul className="flex flex-row items-center justify-around flex-wrap">
          {posts.map((post) => (
            <li key={post._id} className="py-10 px-2 rounded-lg">
              <Link to={`/getPostByID2/${post._id}`}>
                {" "}
                <img className="cardImg" src={post.postImg} alt="image" /></Link>
                <div className="hoverEffect flex items-end justify-between flex-col text-white">
                  <div>
                    <h1 className="SaveBtn mr-5 mt-5 bg-green-500 py-2 px-10 rounded-lg">Save</h1>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                      <i className="ri-share-2-line cursor-pointer text-[30px] mr-2"></i>
                      <i className="fa-solid fa-ellipsis cursor-pointer mr-5 text-2xl "></i>
                  </div>
                </div>
                
              
              <h2 className="text-center mt-5 font-bold">{post.title}</h2>
              <p className="text-center">{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Contenier>
  );
};

export default Home;

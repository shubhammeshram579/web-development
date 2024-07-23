import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Contenier } from "..//../index.js";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, SharePost ,SavePostButton} from "..//../index.js";
import OptionsCard from "..//../OptionCard.jsx";
import FollowButton from "..//../FollowBtn.jsx"

const HomePagePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const [userId, setUserId] = useState([])
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  const user = useSelector((state) => state.auth.user);


  console.log("userId",userId)


  // donload butten and hide butten 
  const [visible, setVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // get post
  useEffect(() => {
    const fatchgetpost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/posts/getPostByID/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("getPost",response.data.data.getPostbyId.owner)
        setPost(response.data.data.getPostbyId);
        setUserId(response.data.data.getPostbyId.owner)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fatchgetpost();
  }, [postId, accessToken]);


  useEffect(() =>{
    const fatchCurrentUser = async () =>{
    try {
      const currentUser = await axios.get("http://localhost:8000/api/users/current-user",{
        headers: {
          "Authorization":`Bearer ${accessToken}`
        }
      })
      console.log("curret",currentUser.data.data.curentUser)
      setIsFollowing(currentUser.data.data.curentUser.followers.includes(user.user._id))
      setLoading(false);
      
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  fatchCurrentUser()

  },[accessToken])

  // get comment
  useEffect(() => {
    const fatchgetComment = async () => {
      try {
        const resComment = await axios.get(
          `http://localhost:8000/api/comments/getcomment/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("comment", resComment.data.data.getcomment);
        setComment(resComment.data.data.getcomment);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fatchgetComment();
  }, [postId, accessToken]);

  const postUrl = window.location.href;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>No post found</div>;

  // post comment function
  const onSubmit = async (data) => {
    try {
      const addcomment = await axios.post(
        `http://localhost:8000/api/comments/addcomment/${postId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert(addcomment.data.message);
      console.log(addcomment);
      // alert("succesfully add comment")
      return addcomment.data;

      //   navigate router
      // navigate("/")
    } catch (error) {
      console.log(error);
      alert("Error registration ");
    }
  };
  

  // hide image 
  const handleHide = () => {
    setIsHidden(!isHidden)
  };

  return (
    <Contenier>
      <div>
        <div className="font-bold text-[25px]">
          <Link to="/">
            <i class="ri-arrow-left-fill"></i>
          </Link>
        </div>

        <div className="bg-gray-400 w-[900px] flex items-center rounded ml-[300px]">
          <div className="py-5 flex items-start justify-start">
            <div className={`transition-colors duration-500 rounded-lg ${isHidden ? "bg-gray-200" : ""}`}>
            {post.postImg && (
              <img
                className={`h-[600px] w-[400px] rounded-xl object-cover ml-2 ${isHidden ? "opacity-0" : "opacity-100"}`}
                src={post.postImg}
                alt={post.title}
              />
            )}
            </div>

            {/* share post and download image */}
            <div className="flex items-center flex-col">
              <div className="flex items-center justify-between w-full pl-4">
                <div className="flex items-center justify-center gap-4 text-[30px]">
                  <SharePost postUrl={postUrl} postTitle={post.title} />
                  <i
                    className="fa-solid fa-ellipsis cursor-pointer"
                    onClick={() => setVisible(!visible)}
                  ></i>
                  <OptionsCard onHide={handleHide} visible={visible} />
                </div>


                {/* profile and save post card */}
                <div className="flex gap-4 text-[25px] items-center">
                  <h5>
                    Profile <i class="fa-solid fa-chevron-down"></i>
                  </h5>
                  <SavePostButton userId={user.user._id} postId={postId}/>
                </div>
              </div>
              <div className="flex items-start justify-start flex-col w-full pl-5">
                <h1 className="font-bold text-[40px] mt-[100px]">
                  {post.title}
                </h1>
                <p className="mt-3 pb-20">{post.description}</p>
              </div>
              <div className="w-full pl-5 flex items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                <h1 className="rounded-full bg-blue-500 px-3 py-3">Logo</h1>
                <h1 className="flex flex-col">folower name <span>0 followers</span></h1>
                </div>
                <FollowButton userId={userId}  isFollowing={isFollowing} currentUser={user.user._id}  />
                <button className="bg-green-400 px-6 py-3 rounded-xl">follow</button>
              </div>

              {/* get comment */}
              <div className="mt-10 w-full pl-5">
                <h1 className="font-bold text-2xl mb-2">
                  Comment : {comment.length}
                </h1>
                {comment.map((c) => (
                  <div
                    key={c._id}
                    className="flex items-center justify-between"
                  >
                    <p className="ml-10 text-xl">{c.content}</p>
                    <small className="ml-10">By: {c.owner.email}</small>
                  </div>
                ))}
              </div>

              {/* create comment */}
              <div className="mt-10 w-full pl-5">
                <h1 className="font-bold text-[25px]">What do you think?</h1>
                <div className="flex items-center gap-3 mt-4">
                  <h1 className="bg-green-600 py-5  px-10 rounded-full">
                    {user.user.fullname[0]}
                  </h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-yellow-700 text-[30px] bg-white rounded-e-lg py-[9.5px] px-4 flex items-center justify-around">
                      <Input
                        placeholder="Add a comment"
                        className="text-lg rounded-s-sm"
                        {...register("content", {
                          required: "'content is required",
                        })}
                      />
                      <i class="fa-regular fa-face-smile"></i>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Contenier>
  );
};

export default HomePagePost;

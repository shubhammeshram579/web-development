import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {Contenier} from "..//../index.js"
import { Link } from 'react-router-dom'

const HomePagePost = () => {
  const {postId} = useParams()
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const accessToken = useSelector((state)=>state.auth.user?.accessToken)

  useEffect(() => {
    const fatchgetpost = async () =>{
      try {
        const response = await axios.get(`http://localhost:8000/api/posts/getPostByID/${postId}`,{
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });
       
        setPost(response.data.data.getPostbyId)
        setLoading(false)
        
      } catch (error) {
        setError(error.message);
        setLoading(false);
        
      }

    };
    fatchgetpost();
  },[postId])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>No post found</div>;


  return (
    <Contenier>
    <div>
      <div className='font-bold text-[25px] text-red-400'>
      <Link to="/"><i class="ri-arrow-left-fill"></i></Link>
      </div>

      <div className='bg-red-400 w-[900px] flex items-center rounded ml-[300px]'>
        <div className='py-5 flex items-start justify-start'>
          {post.postImg && <img className='h-[600px] w-[400px] rounded-xl object-cover ml-2' src={post.postImg} alt={post.title} />}
        <div className='flex items-center flex-col'>
            <div className='flex items-center justify-between w-full pl-4'>
              <div className='flex gap-4 text-[50px] items-center'>
                <i class="ri-share-2-line"></i>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className='flex gap-4 text-[25px] items-center'>
                  <h5>Profile <i class="fa-solid fa-chevron-down"></i></h5>
                  <h5 className='bg-green-600 py-2 px-4 rounded-2xl'>Save</h5>
              </div>
              </div>
      <div className='flex items-start justify-start flex-col w-full pl-5'>
        <h1 className='font-bold text-[40px] mt-[100px]'>{post.title}</h1>
        <p className='mt-3 pb-20'>{post.description}</p>
      </div>
      <div className='w-full pl-5'>
        <h1 className='font-bold text-[25px]'>Comment</h1>
        <p>No comments yet! Add one to start the conversation.</p>
      </div>
      <div className='mt-10 w-full pl-5'>
        <h1 className='font-bold text-[25px]'>What do you think?</h1>
        <div className='flex items-center gap-3 mt-4'>
          <h1 className='bg-green-600 py-5  px-10 rounded-full'>S</h1>
          <p className='flex items-center '><input type="text" placeholder='Add a comment' className='w-[300px] h-16 rounded-s-lg' /> <div className='text-yellow-700 text-[30px] bg-white rounded-e-lg py-[9.5px] px-4'><i class="fa-regular fa-face-smile"></i></div></p>
        </div>
      </div>
      </div>
    </div>
    </div>
    
    </div>
    </Contenier>
  );
}

export default HomePagePost
import React, {useState ,useEffect} from 'react'
import img from "..//../assets/hyundai-creta.jpg"
import axios from "axios"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Notification = ({userId})  => {
  const [notification , setNotification] = useState([]);
  const [loading ,setLoading] = useState(true)
  const accessToken = useSelector((state) => state.auth.user?.accessToken)
  const user = useSelector((state) => state.auth.user?.user)
  const navigate = useNavigate()

  // console.log(user)


  useEffect(() => {
    const fatchnotification =  async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/Notification/${user._id}`,{
          headers:{
            "Authorization":`Bearer ${accessToken}`,
          }
        });
        console.log(response.data.data.notification)
        setNotification(response.data.data.notification)

        setLoading(false)
        
      } catch (error) {
        console.log("notification not fatch",error)
        setLoading(false)
        
      }
    }
    fatchnotification();

  },[userId]);

  const handleNotificationClick = async (notificationId, postId) => {
    // Remove notification from UI
    setNotification(notification.filter(n => n._id !== notificationId));


    try {
      await axios.delete(`http://localhost:8000/api/Notification/${notificationId}`,{
        headers:{
          "Authorization":`Bearer ${accessToken}`,
        }
      });

      setLoading(false)
      
    } catch (error) {
      console.log("notification not fatch",error)
      setLoading(false)
      
    }



    // Navigate to the post page
    navigate(`/getPostByID2/${postId}`);
  }

  if(loading) return <div>Loading...</div>
  

  return (
    <div className='w-[22vw] h-[89vh] rounded-xl bg-gray-200 fixed z-50'>
    <div className='flex items-start justify-center  flex-col gap-2' >
      <h1 className='px-2 py-2 font-semibold text-xl'>notification: {notification.length} </h1>
      <h1 className='font-bold ml-2 mb-5 text-xl'>Updates</h1>
      {notification.length === 0 ? (
        <p className='px-2'>No notifications</p> 
      ):(
        <ul>
      {notification.map((n)=>(
        <div className='h-full bg-green-300 rounded-lg pb-2 mr-1' onClick={() => handleNotificationClick(n._id, n.postId._id)}>
         <h1 className='font-bold ml-2'>New</h1>
        <div className='flex items-center justify-evenly mb-2 gap-4'>
            <img src={n.postId.postImg} alt={n.postId.title} className='h-20 w-28 rounded-lg ml-2'/>
            <h1>{n.postId.description}</h1>
            <p>{n.createdAt.substring(0,10)}</p>
        </div>
    </div>
      ))}
        </ul>
    )}  
        
    </div>
    </div>
  )
}

export default Notification
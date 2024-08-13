import React, { useState, useEffect ,useMemo} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChatNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const [selectMessage , setSelectMessage] = useState(null)
 
  const accessToken = useSelector((state) => state.auth.user?.accessToken);



  useEffect(() => {
    const interval = setInterval(() => {
      fetchNotifications();
    }, 3000); // Check for new messages every 30 seconds

    return () => clearInterval(interval);
  }, []);



  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/chatMessage/chatnotifications', {
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
      });
      console.log("response.data.data.chatNotify",response.data.data.chatNotify)
      setNotifications(response.data.data.chatNotify);
    } catch (error) {
      console.log('Error fetching notifications:', error);
    }
  };



  // functinating for latest message only sowing 
  const latestNotifications = useMemo(() => {
    const map = new Map();
    notifications.forEach((notification) => {
      const { from } = notification;
      if (!map.has(from._id) || map.get(from._id).createdAt < notification.createdAt) {
        map.set(from._id, notification);
      }
    });
    return Array.from(map.values());
  }, [notifications]);




  // Handle message click
  const handleNotificationClick = async (notification) => {
    setSelectMessage(notification);
    
    // Mark the message as read
    try {
      await axios.put(`http://localhost:8000/api/chatMessage/readchat/${notification.from._id}/${notification.to}`,{
      },{
        headers:{
          "Authorization":`Bearer ${accessToken}`
        }
      });

      console.log("read succefully")
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  };



  // Handle user removal
  const handleRemoveUser = (userId) => {
    setUserMessages(prevState => {
      const newState = { ...prevState };
      delete newState[userId];
      return newState;
    });
  };



  // time format
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
        // year: 'numeric',
        // month: '2-digit',
        // day: '2-digit',
        // weekday:"long",
        // hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        hour12: true
    };
    return date.toLocaleString('en-US', options);
  };

  

  return (

    
    <div className="notification-container overflow-y-auto w-full h-[calc(30vh-50px)]">
    
      {latestNotifications.length > 0 ? (
        <div className="notifications">
          {/* <h2>New Messages:</h2> */}
          {latestNotifications.map((notification, index) => (
            
              <div key={index} onClick={() => handleNotificationClick(notification)} className="notification cursor-pointer flex items-start justify-between gap-10 rounded-lg py-5 mb-3 mt-5 hover:bg-green-300">
                <Link key={index} to={`/otherUser/${notification.from._id}/${notification.to}`}>
                <div className='flex items-center justify-start gap-5'>
                <h1 className='bg-blue-600 py-2 px-5 rounded-full ml-2'>{notification.from.fullname[0]}</h1>
                <div>
                <h1 className='font-semibold text-xl'>{notification.from.fullname}</h1>
                <p className='text-justify'>{notification.message}...... </p></div></div> </Link>
                <div className='flex items-center flex-col justify-center gap-3 mr-5'>
                <span>{formatDate(new Date(notification.createdAt))}m</span>
                <button onClick={() => handleRemoveUser(notification.from._id)} className="remove-button bg-red-500 text-white p-1 rounded opacity-0 hover:opacity-100">✕
             </button></div>
             </div>
           
          ))}
        </div>
      ) :(
        <p className='text-red-400 mt-5'>No messages</p>
      )}
    
   
    </div>
  );
};

export default ChatNotification;






  
  // useEffect(()=>{
  //   const fatchcurrentUser = async () => {
  //     try {
        
  //       const getcurrentUser = await axios.get(`http://localhost:8000/api/users/current-user`,{
  //         headers:{
  //           "Authorization":`Bearer ${accessToken}`,
  //         }
  //       })

  //       // console.log("getcurrentUser.data.data.curentUser",getcurrentUser.data.data.curentUser)
  //       setCurrentUser(getcurrentUser.data.data.curentUser)
  //     } catch (error) {
  //       console.error("Error fetching search results", error);
        
  //     }

  //   }
  //   fatchcurrentUser();
  // },[accessToken]);


  
  // useEffect(()=>{
  //   const fatchredchat = async () =>{
  //     try {

  //       const response = await axios.put(`http://localhost:8000/api/chatMessage/readchat/${notifications.from._id}/${}`,{},{
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },

          
  //       });
        
  //     } catch (error) {
  //       console,log(error.message)
        
  //     }
  //   }
  //   fatchredchat()

  // },[from, to])

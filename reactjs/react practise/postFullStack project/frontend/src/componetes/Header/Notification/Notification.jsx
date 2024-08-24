// src/components/ChatNotification.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Notification = ({ setSelectedUser }) => {
  const [notifications, setNotifications] = useState([]);


  // current user accessToken
  const accessToken = useSelector((state) => state.auth.user?.accessToken);

  useEffect(() => {
    const fetchSavedUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Saveuser2',{
            headers:{
                "Authorization":`Bearer ${accessToken}`,
            }
        });
        setNotifications(response.data.savedUsers);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchSavedUsers();
  }, []);

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((user) => (
        <div key={user._id} onClick={() => handleClick(user)}>
          <h4>{user.fullName}</h4>
          <p>{user.latestMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;

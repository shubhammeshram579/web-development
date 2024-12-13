import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';

// Create Context
export const NotificationContext = createContext();

// Context Provider Component
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);
 

  const accessToken = useSelector((state) => state.auth.user?.accessToken)

  useEffect(() => {
    const socket = io('http://localhost:8000');

    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/Notification', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // console.log("post notifaction",response.data.data.notification)
        setNotifications(response.data.data.notification);
        setNotificationCount(response.data.data.notification.length);
        setLoading(false);
      } catch (error) {
        console.log('Failed to fetch notifications', error);
        setLoading(false);
      }
    };

    fetchNotifications();

    // Listen for notification deletion in real-time
    socket.on('notificationDeleted', (deletedNotificationId) => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((n) => n._id !== deletedNotificationId)
      );
      setNotificationCount((prevCount) => prevCount - 1);
    });

    return () => {
      socket.disconnect();
    };
  }, [accessToken]);

  const handleNotificationClick = async (notificationId, postId, navigate) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n._id !== notificationId)
    );
    setNotificationCount((prevCount) => prevCount - 1);

    try {
      await axios.delete(`/api/Notification/${notificationId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const socket = io('http://localhost:8000');
      socket.emit('deleteNotification', notificationId);
    } catch (error) {
      console.log('Failed to delete notification', error);
    }

    navigate(`/getPostByID2/${postId}`);
  };

  return (
    <NotificationContext.Provider value={{ notifications, loading, notificationCount, handleNotificationClick }}>
      {children}
    </NotificationContext.Provider>
  );
};

import React, { useState, useEffect,useMemo } from 'react';

const SavedUsers = () => {
  const [savedUsers, setSavedUsers] = useState([]);


  console.log("savedUsers",savedUsers)
  useEffect(() => {
    // Fetch saved users when the component mounts
    const users = getSavedUsers();
    setSavedUsers(users);
  }, []);

  const getSavedUsers = () => {
    return JSON.parse(localStorage.getItem('savedUsers')) || [];
  };



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


//   // functinating for latest message only sowing 
//   const latestNotifications = useMemo(() => {
//     const map = new Map();
//     savedUsers.forEach((notification) => {
//       const { from } = notification;
//       if (!map.has(from) || map.get(from).createdAt < notification.createdAt) {
//         map.set(from, notification);
//       }
//     });
//     return Array.from(map.values());
//   }, [savedUsers]);


//   console.log("latestNotifications",latestNotifications)

  return (
    <div>
      <h2>Saved Users</h2>
      {savedUsers.length > 0 ? (
        <ul className='flex items-center justify-center flex-col gap-1'>
          {savedUsers.map((user, index) => (
            <li key={index} className="saved-user">
              <h3>{user.fullName}</h3>
              <p>{user.latestMessage}</p>
              {/* <small>{formatDate(new Date(user.createdAt))}m</small> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved users</p>
      )}
    </div>
  );
};

export default SavedUsers;

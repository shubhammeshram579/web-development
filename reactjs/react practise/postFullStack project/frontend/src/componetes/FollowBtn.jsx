// components/FollowButton.js
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FollowButton = ({ userId, targetUserId }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const accessToken = useSelector((state) => state.auth.user?.accessToken);

  const handleFollow = async () => {
    try {
      if (isFollowing) {
        await axios.post('http://localhost:8000/api/users/unfollow', { userId, targetUserId },{
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        });
        setIsFollowing(false);
      } else {
        await axios.post('http://localhost:8000/api/users/follow', { userId, targetUserId },{
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        });
        setIsFollowing(true);
      }
    } catch (error) {
      console.error('Error following/unfollowing:', error);
    }
  };

  return (
    <button onClick={handleFollow}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
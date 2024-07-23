import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FollowButton = ({ userId, isFollowing, currentUser }) => {
    const [following, setFollowing] = useState(isFollowing);
    const accessToken = useSelector((state) => state.auth.user?.accessToken);


    
    useEffect(() => {
        setFollowing(isFollowing);
    }, [isFollowing]);

    const handleFollow = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/api/follow/${userId}`, {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}` // Assuming you have token-based auth
                }
            });
            setFollowing(true);
            return response.data
           
        } catch (error) {
            console.log('Error following user:', error);
        }
    };

    const handleUnfollow = async () => {
        try {
            const resposnse = await axios.post(`http://localhost:8000/api/unfollow/${userId}`, {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}` // Assuming you have token-based auth
                }
            });
            setFollowing(false);
            return resposnse.data
        } catch (error) {
            console.log('Error unfollowing user:', error);
        }
    };

    return (
        <button onClick={following ? handleUnfollow : handleFollow}>
            {following ? 'Unfollow' : 'Follow'}
        </button>
    );
};

export default FollowButton;

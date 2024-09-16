// src/components/SavedUsers.jsx
import React from 'react';

const SavedUsers = ({ savedUsers, setSelectedUser }) => {
  return (
    <div>
      <h2>Saved Users</h2>
      {savedUsers.map((user) => (
        <div key={user._id} onClick={() => setSelectedUser(user)}>
          <h4>{user.fullName}</h4>
          <p>{user.latestMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedUsers;

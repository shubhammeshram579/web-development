import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('User logged out successfully');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;

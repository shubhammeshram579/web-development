import React from 'react';
import { useDispatch } from 'react-redux';
import { Logout } from "../index.js";
import axios from 'axios'; // Import Axios

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        axios.post('/logout') // Assuming your logout endpoint is '/logout'
            .then(() => {
                dispatch(Logout());
            })
            .catch(error => {
                console.error("Logout failed:", error);
            });
    };

    return (
        <button 
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;

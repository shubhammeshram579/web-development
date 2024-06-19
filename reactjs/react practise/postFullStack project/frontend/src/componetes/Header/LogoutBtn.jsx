import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { logout as authLogout } from "..//..//../store/AuthSlice.js";
import { useNavigate } from 'react-router-dom';
import { ApiError } from '../../../../backend/utils/ApiError.js';


function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const logoutHandler =  () => {
      try {

        localStorage.removeItem("accessToken")

        dispatch(authLogout())

        navigate("/login")


        
      } catch (error) {
        throw new ApiError(404,"logout faild")
        
      }
    };

    return (
        <div>
            <button 
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>

            

        </div>
       
    );
}

export default LogoutBtn;

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

        localStorage.removeItem("token")

        dispatch(authLogout())

        navigate("/login")


        
      } catch (error) {
        throw new ApiError(404,"logout faild")
        
      }
    };

    return (
        <div>
            <button 
            className='inline-block px-3 py-2 duration-200 hover:bg-red-500 rounded-full'
            onClick={logoutHandler}
        >
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>

            

        </div>
       
    );
}

export default LogoutBtn;

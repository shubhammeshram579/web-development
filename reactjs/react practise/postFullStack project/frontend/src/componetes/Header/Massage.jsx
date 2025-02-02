import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
// import SavedUsers from "./SaveUserChat.jsx"
// import Notification from "./Notification/Notification.jsx"
import ChatNotification from "./ChatNotification.jsx"
import "..//../App.css"
import "..//../Responsive.css"
// import {motion} from "framer-motion"



const Massage = ({shereProfile,setNewMessage,newMessage}) => {
  const [currentUser,setCurrentUser] = useState([])

  const [selectedUser, setSelectedUser] = useState(null);

  const [visible, setVisible] = useState(false);

  const accessToken = useSelector((state) => state.auth.user?.accessToken);




  useEffect(() => {
    // Delay the visibility state change to trigger smooth transition
    setTimeout(() => {
        setVisible(true);
    }, 100); // Delay for smooth transition
}, []);


  const sendMessagefns = () =>{
    setNewMessage((prevState) => !prevState)
  }



  
  useEffect(()=>{
    const fatchcurrentUser = async () => {
      try {
        
        const getcurrentUser = await axios.get(`http://localhost:8000/api/users/current-user`,{
          headers:{
            "Authorization":`Bearer ${accessToken}`,
          }
        })

        // console.log("getcurrentUser.data.data.curentUser massage page",getcurrentUser.data.data.curentUser)
        setCurrentUser(getcurrentUser.data.data.curentUser)
      } catch (error) {
        console.error("Error fetching search results", error);
        
      }

    }
    fatchcurrentUser();
  },[accessToken])
  
  
  

  return (
    <div id="masseagebox" className={`page-container2 w-[22vw] h-[85vh] bg-gray-200 rounded-xl fixed z-50 mt-28 ml-[73%] ${visible ? 'visible' : ''}`}>
      <div className="flex items-center justify-between pr-5 pt-5 font-medium text-2xl">
        <h1></h1>
        <h1>Inbox</h1>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div id="masseageboxcard" className="flex items-start flex-col gap-7 ml-8">
        <div className="mt-12">
        <Link to="/newmessage"><form>
            <p className="flex items-center justify-center">
              <i class="fa-solid fa-magnifying-glass bg-green-300 h-12 pt-4 pl-3 rounded-s-lg"></i>
              <input
                type="search"
                name="search"
                id="SearchUser"
                className="w-[18vw] h-12 rounded-e-lg bg-green-300"
              />
            </p>
          </form></Link>
        </div>
        <div id="massageItem" className="text-2xl  hover:bg-green-300 py-5 rounded px-2 w-[20vw]">
        <Link to="/newmessage">

        {/* <button onClick={sendMessagefns}> */}
            <i class="fa-regular fa-pen-to-square bg-red-600 p-5 rounded-full"></i>{" "}
            New Message
          {/* </button> */}
          </Link>
        </div>
        <div id="massageItem2" className="mt-10 ml-2">
          <h1 className="text-xl font-semibold">Messages</h1>
        <ChatNotification />
        </div>

      

       
  
        <Link to="/shareprofile">
          {shereProfile ? ( "Hide Massage") 
          :( <div id="Sharepage" className="flex items-center gap-5 text-xl  hover:bg-green-300 py-5 rounded px-2 w-[20vw]">
          <i class="fa-solid fa-user-plus bg-gray-300 px-5 py-5 rounded-full"></i>
          <div className="text-start">
            <h1 className="font-semibold">Invite your friends</h1>
            <h1>connect to start chatting</h1>
          </div>
        </div>
       )}</Link>
      
      </div>
    </div>

  );
};

export default Massage;



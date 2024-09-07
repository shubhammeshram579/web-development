import React, { useState, useEffect, useContext } from "react";
import Contenier from "../contenier/Contenier.jsx";
import Logo from "../Logo.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn.jsx";
import ChatSearchBar from "../ChatSearchbar.jsx";
import axios from "axios";
import { NotificationContext } from "../NotificationPost/NotificationContext.jsx";

import io from "socket.io-client";

const socket = io("http://localhost:8000");

function Header({
  showNotifications,
  setShowNotifications,
  showMassage,
  // setShowMassage,
  // notify
}) {
  const [currentUser ,setCurrentUser] = useState([])

  const { notificationCount } = useContext(NotificationContext);
  const [showMessages, setShowMessages] = useState(false);
 
  // authstatus user is login or not
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const accessToken = useSelector((state)=>state.auth.user?.accessToken)
  const [loading, setLoading] = useState(true);

  // current user from redux
  const user = useSelector((state) => state.auth.user?.user);



// console.log("currentUser",currentUser._id)

  useEffect(() =>{
  const fatchCurrentUser = async () => {
    try {

      const userData = await axios.get("http://localhost:8000/api/users/current-user",{
        headers: {
          "Authorization":`Bearer ${accessToken}`
        }
      })
      // console.log("savePost currentuser",userData.data.data.curentUser._id)
      setCurrentUser(userData.data.data.curentUser)

      setLoading(false);
    } catch (error) {
      // setError(error.message);
      console.log(error.message)
      setLoading(false);
    }

  };

  fatchCurrentUser()
},[]);




  // const [notification, setNotification] = useState([]);
  // const accessToken = useSelector((state) => state.auth.user?.accessToken);
  // const [loading, setLoading] = useState(true);



// notication buttnet hendeler
  const handleNotificationsClick = () => {
      setShowNotifications((prev) => !prev);
    // setShowMassage(false); // Hide messages when showing notifications
  };


  // const handleMessagesClick2 = () => {
  //   setShowMassage((prevState) => !prevState);
  //   setShowNotifications(false); // Hide messages when showing notifications
  // };



  // massage butten hendaler
  const handleMessagesClick2 = () => {
    setShowMessages((prevState) => {
      const newState = !prevState;
      if (newState) {
        navigate("/message");
      } else {
        navigate("/");
      }
      return newState;
    });
  };


  if (loading) return <div className="py-[90vh]">Loading...</div>;
  // if (!currentUser.fullname) {
  //   return <div>Loading...</div>;
  // }




  const navItems = [
    // {
    //   name: "Home",
    //   slug: "/",
    //   active: true,
    // },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Register",
      slug: "/Register",
      active: !authStatus,
    },
    {
      name: authStatus ? (
        <h1 className="font-semibold uppercase bg-gray-300 px-4 py-2 rounded-full hover:bg-slate-300">
          {user.fullname[0]}
        </h1>
      ) : (
        "null"
      ),
      slug: authStatus ? `/getPost/${user._id}` : "/getPost/null",
      active: authStatus,
    },
   
  ];

  return (
    <header
      className={"bg-slate-100 py-8 fixed w-full top-0 z-50 font-semibold px-20"}
    >
      {/* <Contenier> */}
        <nav className={"flex items-center justify-between"}>
          <div className="flex items-center justify-around gap-20">
            <Link to="/">
              <Logo />
            </Link>

            <div>
              <Link
                to="/"
                active={true}
                className="inline-block py-2 duration-200 bg-black text-white px-6 rounded-full"
              >
                Home
              </Link>
            </div>
          </div>

          {authStatus && (
            <div>
              <Link
                to="/addpost"
                active={authStatus}
                className="inline-block px-2 py-3 duration-200 hover:bg-blue-100 rounded-full"
              >
                Create
              </Link>
            </div>
          )}

          {authStatus && (
            <div>
              <ChatSearchBar />
            </div>
          )}

          {authStatus && (
            <button onClick={handleNotificationsClick}>
              {showNotifications ? (
                "Hide Notifications"
              ) : (
                <div className="flex items-center">
                  <i class="fa-solid fa-bell text-xl inline-block px-2 py-2 duration-200 hover:bg-blue-100 rounded-full"></i>

                  {/* {notification.length === 0 ? null : ( */}
                    <div className=" text-red-500 mb-5 ml-[-10px] text-lg ">
                      {notificationCount > 0 && `${notificationCount}`}
                    </div>
                  {/* )} */}
                </div>
              )}
            </button>
          )}

          {authStatus && (
            <button onClick={handleMessagesClick2}>
              {showMassage ? (
                "Hide Massage"
              ) : (
                <i class="fa-solid fa-comment-dots text-xl inline-block px-2 py-2 duration-200 hover:bg-blue-100 rounded-full"></i>
              )}
            </button>
          )}

          <ul className={"flex items-center justify-between gap-5"}>
            
            {navItems
              .filter((item) => item.active)
              .map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={
                      "inline-block px-auto py-2 p-2 duration-200 hover:bg-blue-200 rounded-full"
                    }
                  >
                    {item.name}
                  </button>
                </li>
              ))}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      {/* </Contenier> */}
    </header>
  );
}

export default Header;



 // const [currentUser, setCurrentUser] = useState([]);

  // useEffect(() => {
  //   const fatchcurrentUser = async () => {
  //     try {
  //       const getcurrentUser = await axios.get(
  //         `http://localhost:8000/api/users/current-user`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );

  //       console.log(
  //         "getcurrentUser.data.data.curentUser massage page",
  //         getcurrentUser.data.data.curentUser
  //       );
  //       setCurrentUser(getcurrentUser.data.data.curentUser);
  //     } catch (error) {
  //       console.error("Error fetching search results", error);
  //     }
  //   };
  //   fatchcurrentUser();
  // }, [accessToken]);





  
  
  // useEffect(() => {
  //   const fatchnotification = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `http://localhost:8000/api/Notification`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );
  //       console.log("notit ", response.data.data.notification);
  //       setNotification(response.data.data.notification);

  //       setLoading(false);
  //     } catch (error) {
  //       console.log("notification not fatch", error);
  //       setLoading(false);
  //     }
  //   };
  //   fatchnotification();

  //   // / Listen for real-time updates from the server
  //   socket.on("notificationDeleted", (deletedNotificationId) => {
  //     setNotification((prevNotifications) =>
  //       prevNotifications.filter((n) => n._id !== deletedNotificationId)
  //     );
  //   });

  //   // Clean up the socket connection on component unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [accessToken]);

  // if (loading) {
  //   return <div>Loading notifications...</div>;
  // }

  // const navigate = useNavigate();




  {/* <div className="notification-icon" onClick={handleNotificationClick}>
        <span className="icon">🔔</span>
        {notificationCount > 0 && (
          <span className="notification-count">{notificationCount}</span>
        )}
      </div> */}



{/* {
                        navItems.map((item)=>
                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={() => navigate(item.slug)}
                                        className={'inline-block px-2 duration-200 hover:bg-blue-100 rounded-full'}> {item.name}
                                    </button>
                                </li>
                            ) : null )
                    } */}



 // {
    //   name: "AddPost",
    //   slug: "/addpost",
    //   active: authStatus,
    // },
    // {
    //     name: "Search post",
    //     slug: "/posts/getAllpost/search",
    //     active: authStatus,
    // },
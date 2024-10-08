import React from "react";
import { Header, Footer, Contenier } from "./componetes";
import { useState, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { login as authLogin } from "..//store/AuthSlice.js";
import { logout as authLogout } from "..//store/AuthSlice.js";
import "./App.css";

import Notification from "./componetes/NotificationPost/NotificationPage.jsx";

import { NotificationProvider } from "./componetes/NotificationPost/NotificationContext.jsx";

function App() {
  // const dispatch = useDispatch();
  const [showNotifications, setShowNotifications] = useState(false);
  // const accessToken = useSelector((state) => state.auth.user?.accessToken);


  return (
    <NotificationProvider>
      <div className=" w-full h-full">
        <div className="flex justify-normal flex-col">
          {/* <NotificationProvider> */}
          <Header
            setShowNotifications={setShowNotifications}
            showNotifications={showNotifications}
            // setShowMassage={setShowMassage}
            // showMassage={showMassage}
            // notify={notify}
          />

          {/* </NotificationProvider> */}
          <div className="absolute z-[100] left-[76vw] mt-28">
            {showNotifications && (
              <Notification
                setShowNotifications={setShowNotifications}
                showNotifications={showNotifications}
              />
            )}
          </div>

          <main className="flex items-centre justify-center">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </NotificationProvider>
  );
}

export default App;

// const [showMassage, setShowMassage] = useState(false);
// const [shereProfile, setShereProfile] = useState(false);
// const [chatboxpage, setChatboxpage] = useState(false);
// const [newMessage, setNewMessage] = useState(false);

// const toggleShareProfile = () =>{
//   setShereProfile(!shereProfile)

// }

// css style
// const bacgroundC = {
//   backgroundColor: "red",
// color: "green",
// fontSize: "100px"

// }

// useEffect(() => {
//   // Initialize Locomotive Scroll
//   const scroll = new LocomotiveScroll({
//     el: scrollRef.current,
//     smooth: true,
//     smoothMobile: true, // Enable smooth scrolling on mobile
//     inertia: 1, // Inertia-based smooth scrolling
//     getDirection: true, // Track scroll direction (useful for triggering effects)
//     getSpeed: true, // Track scroll speed
//     reloadOnContextChange: true, // Reload on content changes
//   });

//   // Clean up on component unmount
//   return () => {
//     scroll.destroy();
//   };
// }, []);

{
  /* <div className="absolute z-50 left-[76vw] mt-28 bg-red-600">
          {showMassage && (<Massage newMessage={newMessage}  setNewMessage={setNewMessage}/>
          )}
        </div>

        <div className="absolute z-50 left-[76vw] mt-28 bg-red-600">
          {newMessage && (<NewMessage   setShowMassage={setShowMassage} />)}

        </div> */
}

{
  /* <div className="absolute z-[50] left-[76vw] mt-28">
          {shereProfile && <ShareProfile />}
        </div> */
}
{
  /* <div className="absolute z-[50] left-[76vw] mt-28">
          {chatboxpage && (
            <Chatbox
              showMassage={showMassage}
              setShowMassage={setShowMassage}
              setChatboxpage={setChatboxpage}
            />
          )}
        </div> */
}

{
  /* {showMassage && <Massage />} */
}
{
  /* {showMassage && (
            <Massage
              setShereProfile={setShereProfile}
              shereProfile={shereProfile}
              chatboxpage={chatboxpage}
              setChatboxpage={setChatboxpage}
              sendmessage={sendmessage}
              setSendMessage={setSendMessage}
            />
          )} */
}




  // const [loading, setLoading] = useState(true);

  // fatch current user api
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user && user.accessToken) {
  //     axios
  //       .get("http://localhost:8000/api/users/current-user", {
  //         headers: { "x-auth-token": user.accessToken },
  //         withCredentials: true,
  //       })
  //       .then((response) => {
  //         if (response.data) {
  //           dispatch(authLogin(response.data));
  //         } else {
  //           dispatch(authLogin());
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching user:", error);
  //         dispatch(authLogout());
  //       })
  //       .finally(() => setLoading(false));
  //   } else {
  //     setLoading(false);
  //   }
  // }, [dispatch]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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


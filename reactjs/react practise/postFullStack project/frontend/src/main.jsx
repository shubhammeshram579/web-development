import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import {AuthLayout} from "./componetes/index.js"

import { global } from "global";
import { Buffer } from "buffer";
import process from "process";

window.global = global;
window.Buffer = Buffer;
window.process = process;






import store from "..//..//frontend/store/Store.js"
import RegisterPage from './componetes/pages/signup/RegisterPage.jsx'
import Home from "./componetes/pages/home/Home.jsx"
import LoginPage from './componetes/pages/login/LoginPage.jsx'
import Addpost from './componetes/pages/Addpost/Addpost.jsx'
import OwnerPost from "./componetes/pages/getpostbyOwner/OwnerPost.jsx"
import EditPost from "./componetes/pages/EditPost/EditPost.jsx"
import SearchResults from "./componetes/pages/SearchPost/ChatSearchResult.jsx"
import HomePagePost from "./componetes/pages/home/HomePagePost.jsx"
import UpdateUser from "./componetes/pages/UpdateUser/UpdateUser.jsx"
import GetPotsByUserProfile from "./componetes/pages/home/GetPotsByUserProfile.jsx"
import HomePagePost2 from "./componetes/pages/Getpost/PostPage.jsx"
import GetpostByotherUser from "./componetes/pages/Getpost/GetPostByOtherUser.jsx"
import NewMessage from "./componetes/Header/NewMessage.jsx"
import Massage from "./componetes/Header/Massage.jsx"
import Chatbox from "./componetes/Header/Chatbox.jsx"
import ShareProfile from "./componetes/Header/ShareProfile.jsx"
import VideoCall from './componetes/Header/VideoCall.jsx'





const router = createBrowserRouter([
    
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/Login",
            element: (
                <AuthLayout authentication={false}>
                    <LoginPage />
                </AuthLayout>
            ),
        },
        {
            path: "/Register",
            element: (
                <AuthLayout authentication={false}>
                    <RegisterPage />
                </AuthLayout>
            ),
        },
        {
            path: "/UpdateUser",
            element: (
                <AuthLayout authentication>
                    <UpdateUser />
                </AuthLayout>
            ),
        },
        {
          path: "/addpost",
          element: (
              <AuthLayout authentication>
                  <Addpost />
              </AuthLayout>
          ),
      },
        {
            path: "/getPost/:userId",
            element: (
                <AuthLayout authentication>
                    <OwnerPost />
                </AuthLayout>
            ),
        },
        {
            path: "/getPostByID/:postId",
            element: (
                <AuthLayout authentication>
                    {/* <GetPostbyId /> */}
                    <HomePagePost2 />
                </AuthLayout>
            
            ),
        },
        {
            path: "/EditPost/:postId",
            element: (
                <AuthLayout authentication>
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/deletePost/:postId",
            element: (
                <AuthLayout authentication>
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/posts/getAllpost/search",
            element: (
                <AuthLayout authentication>
                    {/* <PostsList /> */}
                    <SearchResults />

                </AuthLayout>
            ),
        },
        {
            path: "/getPostByID2/:postId",
            element: (
                <AuthLayout authentication>
                    <HomePagePost/>
                </AuthLayout>
            ),
            
        },
        {
            path: "/getPostByID3/:postId",
            element: (
                <AuthLayout authentication>
                    <GetpostByotherUser />
                </AuthLayout>
            ),
            
        },
        {
            path: "/getPostByUserPorofile/:userId",
            element: (
                <AuthLayout authentication>
                    <GetPotsByUserProfile/>
                </AuthLayout>
            ),
            
        },
        {
            path: "/otherUser/:from/:to",
            element: (
                <AuthLayout authentication>
                    <Chatbox  />
                    <Home />
                </AuthLayout>
            ),
        },
        {
            path: "/message",
            element: (
                <AuthLayout authentication>
                    <Massage />
                    <Home />
                </AuthLayout>
            ),
        },
        {
            path: "/newmessage",
            element: (
                <AuthLayout authentication>
                    <NewMessage />
                    <Home />
                </AuthLayout>
            ),
        },
        {
            path: "/shareprofile",
            element: (
                <AuthLayout authentication>
                    <ShareProfile />
                    <Home />
                </AuthLayout>
            ),
        },
        {
            path: "/videoCall/:from/:to",
            element: (
                <AuthLayout authentication>
                    <VideoCall />
                    {/* <Home /> */}
                </AuthLayout>
            ),
        },
    ],

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SmoothScrolling> */}
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider> 
    {/* </SmoothScrolling> */}
  </React.StrictMode>,
)

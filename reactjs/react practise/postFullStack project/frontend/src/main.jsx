import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import {AuthLayout} from "./componetes/index.js"

import store from "..//..//frontend/store/Store.js"
import RegisterPage from './componetes/pages/signup/RegisterPage.jsx'
import Home from "./componetes/pages/home/Home.jsx"
import LoginPage from './componetes/pages/login/LoginPage.jsx'
import Addpost from './componetes/pages/Addpost/Addpost.jsx'
import OwnerPost from "./componetes/pages/getpostbyOwner/OwnerPost.jsx"
import EditPost from "./componetes/pages/EditPost/EditPost.jsx"
import GetPostbyId from "./componetes/pages/Getpost/GetPostbyId.jsx"
// import PostsList from "./componetes/pages/SearchPost/SearchPost.jsx"
import SearchResults from "./componetes/pages/SearchPost/ChatSearchResult.jsx"
import HomePagePost from "./componetes/pages/home/HomePagePost.jsx"
import UpdateUser from "./componetes/pages/UpdateUser/UpdateUser.jsx"



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
            path: "/getPost",
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
                    <GetPostbyId />
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
                    <HomePagePost />

                </AuthLayout>
            ),
        },
    ],

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider> 
  </React.StrictMode>,
)
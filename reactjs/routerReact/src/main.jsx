import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import page file 
import Layout from './Layout.jsx'
import Home from './componate/home/Home.jsx'
import About from './componate/about/About.jsx'
import Contact from './componate/contact/Contact.jsx'
import Github ,{githubInfoLoader} from './componate/github/Github.jsx'
import User from './componate/user/User.jsx'

// import react router 
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'


// first way create router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       },
//       {
//         path: "Github",
//         element: <Github />
//       }
//     ]
//   }
// ])


// second way creation router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
      loader={githubInfoLoader}
       path='github' element={<Github />} />
    </Route>
  )
)


// apply router like 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)

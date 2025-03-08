import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserContextProvider from "./RoutingInReact/ContexApi/UserContextProvider.jsx"

import Header from "./RoutingInReact/Header/Header.jsx"
import Footer from "./RoutingInReact/Footer/Footer.jsx"
import Home from "./RoutingInReact/Pages/Home.jsx"
import About from "./RoutingInReact/Pages/About/AboutPage.jsx"
// import Contract from "./RoutingInReact/Pages/Contract/ContractPage.jsx"
import Contract from "./RoutingInReact/Pages/Contract/ContractPage.jsx"
import Product from "./RoutingInReact/Pages/Product.jsx"
import Addcard from "./RoutingInReact/Pages/Addcard/Addcard.jsx"
import ProductById from "./RoutingInReact/Pages/ProductByID/ProductById.jsx"
import AdoptionPayment from "./RoutingInReact/Pages/Payment/AdoptionPayment.jsx"
import PetsAdoptionApprowR from "./RoutingInReact/Pages/AdoptionRequist/PetsAdoptionApprowR.jsx"
import UserRegister from "./RoutingInReact/User/UserRegister.jsx"
import UserLogin from "./RoutingInReact/User/UserLogin.jsx"
import AdminLogin from "./RoutingInReact/Admin/AdminLogin.jsx"
import AdminHomepage from "./RoutingInReact/Admin/AdminHomepage.jsx"
// import SearchResult from "./RoutingInReact/Pages/SearchPets/SearchResult.jsx"
import SearchInput from "./RoutingInReact/Pages/SearchPets/SearchInput.jsx"

import SheltersPage from "./RoutingInReact/Pages/Shelters/SheltersPage.jsx"
import { useSelector } from "react-redux";


// admin page
import Admin from "./RoutingInReact/Admin/Admin.jsx"
import HomeDashboard from "./RoutingInReact/Admin/Pages/HomeDashBoard/HomeDashboard.jsx"
import Users from "./RoutingInReact/Admin/Pages/Users/Users.jsx"
import CreatePets from "./RoutingInReact/Admin/Pages/CreatePets/CreatePets.jsx"
import PetsAdoption from "./RoutingInReact/Admin/Pages/PetsAdoption/PetsAdoption.jsx"
import AdoptionReq from "./RoutingInReact/Admin/Pages/AdoptionRequest/AdoptionReq.jsx"

const PetsApp = () => {
    const authStatus = useSelector((state) => state.auth.isLoggedIn);
    const authStatusAdmin = useSelector((state) => state.auth.isAdminLoggedIn);
  return (
   
    <UserContextProvider>
   <BrowserRouter>
      <Header />
      {authStatusAdmin ? (<AdminHomepage />) :(null)}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={authStatus ? (<About />) : (<UserLogin />)} />
        <Route path='/Contract' element={authStatus ? (<Contract />) : (<UserLogin />)} />
        <Route path='/Product' element={authStatus ? (<Product />) : (<UserLogin />)} />
        <Route path='/Addcard/:postId' element={authStatus ? (<Addcard />) : (<UserLogin />)} />
        <Route path='/Product/:postId' element={authStatus ? (<ProductById />) : (<UserLogin />)} />
        <Route path='/AdoptionPayment/:postId' element={authStatus ? (<AdoptionPayment />) : (<UserLogin />)} />
        <Route path='/PetsAdoptionApprowR' element={authStatus ? (<PetsAdoptionApprowR />) : (<UserLogin />)} />
        <Route path='/Product/searchinput' element={authStatus ? (<SearchInput />) : (<UserLogin />)} />
        <Route path='/Shelters' element={authStatus ? (<SheltersPage />) : (<UserLogin />)} />
        <Route path='/Register' element={<UserRegister />} />
        <Route path='/Login' element={!authStatusAdmin ? (<UserLogin />) : (<AdminLogin />)} />


        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/AdminPage' element={<AdminHomepage />} />
        <Route path='/HomeDashboard' element={<HomeDashboard />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/AdminChart' element={<Admin />} />
        <Route path='/PetsAdoption' element={<PetsAdoption />} />
        <Route path='/AdoptionReq' element={<AdoptionReq />} />
        <Route path='/CreatePets' element={<CreatePets />} />
      </Routes>
      <Footer />
      </BrowserRouter>

      </UserContextProvider>

  )
}

export default PetsApp


// https://chatgpt.com/share/67bf7fae-2154-800c-9976-c1c7934b9b5e
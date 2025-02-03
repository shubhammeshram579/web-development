import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserContextProvider from "./RoutingInReact/ContexApi/UserContextProvider.jsx"

import Header from "./RoutingInReact/Header/Header.jsx"
import Footer from "./RoutingInReact/Footer/Footer.jsx"
import Home from "./RoutingInReact/Pages/Home.jsx"
import About from "./RoutingInReact/Pages/About/AboutPage.jsx"
import Contract from "./RoutingInReact/Pages/Contract/ContractPage.jsx"
import Product from "./RoutingInReact/Pages/Product.jsx"
import Addcard from "./RoutingInReact/Pages/Addcard/Addcard.jsx"
import ProductById from "./RoutingInReact/Pages/ProductByID/ProductById.jsx"
import UserRegister from "./RoutingInReact/User/UserRegister.jsx"
import UserLogin from "./RoutingInReact/User/UserLogin.jsx"
// import SearchResult from "./RoutingInReact/Pages/SearchPets/SearchResult.jsx"
import SearchInput from "./RoutingInReact/Pages/SearchPets/SearchInput.jsx"

import SheltersPage from "./RoutingInReact/Pages/Shelters/SheltersPage.jsx"

const PetsApp = () => {
  return (
   
    <UserContextProvider>
   <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contract' element={<Contract />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Addcard' element={<Addcard />} />
        <Route path='/Product/:postId' element={<ProductById />} />
        <Route path='/Product/searchinput' element={<SearchInput />} />
        <Route path='/Shelters' element={<SheltersPage />} />
        <Route path='/Register' element={<UserRegister />} />
        <Route path='/Login' element={<UserLogin />} />
      </Routes>
      <Footer />
      </BrowserRouter>

      </UserContextProvider>

  )
}

export default PetsApp

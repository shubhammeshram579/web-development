import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import FunctionComp from "../FunctionComp/FunctionComp.jsx"
import ClassComp from "../FunctionComp/ClassComp.jsx"

import AllProps from "../PropsCom/AllProps.jsx"
import AllEvent from "../EventHandeling/AllEvent.jsx"
import ConditionalPage from "../ConditionalWisePage/ConditionalPage.jsx"
import Header from "./Header/Header.jsx"
import ContextData from "../ContexApi/ContextData.jsx"
import AddCard from "..//..//../src/Components/ReduxAddCard/AddCard.jsx"

import CreateContexDataProvider from "../ContexApi/Context/CreateContexData.jsx"



import TodaApp from "../TodoList/TodaApp.jsx"




const Routers = () => {
  return (
    <>
    <div>
      <CreateContexDataProvider>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<FunctionComp />} />
            <Route path='/classPage' element={<ClassComp />} />
            <Route path='/allprops' element={<AllProps />} />
            <Route path='/allEventHan' element={<AllEvent />} />
            <Route path='/conditionalR' element={<ConditionalPage  isLogin={true}/>} />
            <Route path='/ContextData' element={<ContextData />} />
            <Route path='/addCard' element={<AddCard />} />
            <Route path='/todaApp' element={<TodaApp />} />

        </Routes>
        </BrowserRouter>
        </CreateContexDataProvider>
    </div>
    </>
  )
}

export default Routers

import { useState } from 'react'
import './App.css'
import Container from './Container/Container.jsx'
import {Header , Footer,CountPage,BgColorchanger,PasswordGentrater,CurrencyConvetP4} from "./index.js"

function App() {

  return (
    <Container>
      <Header />
      {/* project 1 */}
      <CountPage />
      {/* project 2 */}
      <BgColorchanger />

      {/* Project 3 password genrater */}
      <PasswordGentrater />
      {/* project 4 */}
      <div className='min-h-[80vh]'>
      <CurrencyConvetP4 />
      </div>
      <Footer />
    </Container>
  )
}

export default App

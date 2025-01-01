import { useState } from 'react'
import './App.css'
import Container from './Container/Container.jsx'
import {Header , Footer,CountPage} from "./index.js"

function App() {

  return (
    <Container>
      <Header />
      <CountPage />
      <Footer />
    </Container>
  )
}

export default App

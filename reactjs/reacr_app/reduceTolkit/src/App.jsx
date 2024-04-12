import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {

  return (
  <>
  <h1>Redux Toolkite</h1>
  <AddTodo />
  <Todos />
  </>
  )
}

export default App

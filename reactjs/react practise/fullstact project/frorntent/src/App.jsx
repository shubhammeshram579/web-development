import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"


function App() {
  const [jokes, setJokes] = useState([])
  const [about, setAbout] = useState([])


  useEffect(() =>{
    axios.get("/api/jokes")
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })

  })

  // useEffect(() =>{
  //   axios.get("/api/about")
  //   .then((response) =>{
  //     setAbout(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // })

  return (
  <>
  <h1>shubham</h1>
  <p>Jokes: {jokes.length}</p>


  {
    jokes.map((joke , index) =>(
      <div key={joke.id}>
        <h4>{joke.title}</h4>
        <p>{joke.content}</p>

      </div>

    ))
  }

  {/* <h2>AboutProfile: {about.length}</h2>

  {
    about.map((ab, index) => (
      <div>
        <h1>{ab.name}</h1>
        <h1>{ab.age}</h1>
      </div>
      

    ))

  } */}
  </>
  )
}

export default App

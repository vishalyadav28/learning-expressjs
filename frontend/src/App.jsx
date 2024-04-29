import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])  // Empty dependency array to run effect only once


  return (
    <>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>Title: {joke.title}</h2>
            <h3>Content: {joke.content}</h3>
          </div>
        ))
      }

    </>
  )
}

export default App

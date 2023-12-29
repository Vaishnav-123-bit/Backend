import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, [jokes]);
  

  return (
    <>
      <h3>Jokes</h3>
      <p>Jokes count ={jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={index}>
            <h3>{joke.id}</h3>
            <p>{joke.name}</p>

          </div>
        ))
      }
    </>
  )
}

export default App

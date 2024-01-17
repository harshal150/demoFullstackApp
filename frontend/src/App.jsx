
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes , setJokes] = useState([]);

  useEffect(()=>{
     axios.get('/api/jokes')
     .then((responce)=>{
         setJokes(responce.data)
     })
     .catch((error)=>{
      console.log(error)
     })
  })

  return (
    <>
         <h1>Fullstack demo app</h1>
         <p>JOKES : {jokes.length}</p>

         {
          jokes.map((joke)=>(  
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
         }
    </>
  )
}

export default App

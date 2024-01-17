const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes' , (req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "The Mathematician's Dilemma",
          content: "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else."
        },
        {
          id: 2,
          title: "Programming Puns",
          content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
          id: 3,
          title: "Coffee Lover's Joke",
          content: "How do you stay awake during an important meeting? Espresso yourself!"
        },
        {
          id: 4,
          title: "The Invisible Man",
          content: "I used to play piano by ear, but now I use my hands and fingers."
        },
        {
          id: 5,
          title: "Physics Humor",
          content: "Why did the photon refuse to check a bag at the airport? It was traveling light."
        },
    ];

    res.send(jokes);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
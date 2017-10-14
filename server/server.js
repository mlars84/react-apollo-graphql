import express from 'express'

const PORT = 3005

const server = express()

server.get('/', function(req, res) {
  res.send('Hello from Server!')
})

server.listen(PORT, () => console.log(`Server up on ${PORT}!`))

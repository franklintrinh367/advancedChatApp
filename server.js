const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const { registerUser } = require('./back_end/controllers/user')
const { checkHandle } = require('./back_end/controllers/user')
const createRoom = require('./back_end/controllers/room')
// DB config
const db = require('./back_end/config/keys').mongoURI

// Connect to Database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('DB is connected'))
  .catch(err => console.log(err))

// Import routes
const history = require('./back_end/routes/api/history')
const room_history = require('./back_end/routes/api/room_history')
const events = require('./back_end/routes/api/events')
const user = require('./back_end/routes/user')
const room = require('./back_end/routes/room')

const app = express()

app.use(cors())

// / parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Middleware
app.use(bodyParser.json())

// Create server instance
const server = http.createServer(app)

// Create IO using server instance
const io = socketIO(server)

io.on('connection', socket => {
  console.log('user connect', socket.id)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat', data => {
    console.log('test chat')
    let roomName = data.room
    console.log(roomName)
    io.to(roomName).emit('chat', data)
  })

  socket.on('registerUser', data => {
    registerUser(io, data)
  })

  // Tam - not gonna check for now
  // socket.on('checkHandle', data => {
  //   console.log('check handle')
  //   checkHandle(io, data)
  // })

  socket.on('createRoom', data => {
    createRoom(io, data)
  })

  socket.on('joinRoom', roomName => {
    console.log('joinTest backend', roomName)
    socket.join(roomName)
  })

  // Send activeUser to other members in the group
  socket.on('activeUser', data => {
    socket.to(data.roomName).emit('activeUser', { name: data.userName })
  })
})

// app.use((req,res,next) => {
//   req.socketIO = io;
//   next();
// })
// Use route
// app.use('/api/history', history)
// app.use('/api/room_history', room_history)
// app.use('/api/events', events)
app.use('/user', user)
app.use('/room', room)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  // Set default file for all routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
  })
}

// Set port
const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

module.exports = io

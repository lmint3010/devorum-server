const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Database Config
const { mongoURI, mongooseOption } = require('./config/keys')

// Routes resource
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

// Connect to mongoDB
mongoose.connect(mongoURI, mongooseOption)
const { connection: db } = mongoose
db.on('error', () => console.log('Failed to connect with MongoDB'))
db.once('open', () => console.log('MongoDB connected successfully!'))

// Routes using
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

app.get('/', (req, res) => res.send('Server is started!'))

app.listen(port)
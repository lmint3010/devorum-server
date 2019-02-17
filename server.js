const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')

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

// Body Parser Config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Passport Middleware
app.use(passport.initialize())
// Passport config via module
require('./config/passport')(passport)

// Application Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

app.listen(port)